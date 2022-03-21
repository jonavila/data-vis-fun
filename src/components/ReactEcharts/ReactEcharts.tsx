import { useElementSize } from '@mantine/hooks';
import type { BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts/charts';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import type { GridComponentOption } from 'echarts/components';
import { DatasetComponent, GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import type { ComposeOption, ECharts, SetOptionOpts } from 'echarts/core';
import { getInstanceByDom, init, use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, useEffect } from 'react';

// register only the necessary ECharts components
use([
  LegendComponent,
  LineChart,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  CanvasRenderer,
  DatasetComponent,
]);

export type EChartsOption = ComposeOption<BarSeriesOption | LineSeriesOption | PieSeriesOption | GridComponentOption>;

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: 'light' | 'dark';
}

export function ReactECharts({ option, style, settings, loading, theme }: ReactEChartsProps) {
  const { ref: chartRef, width, height } = useElementSize();

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Return cleanup function
    return () => {
      chart?.dispose();
    };
  }, [chartRef, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.resize({ animation: { duration: 300 } });
    }
  }, [width, height, chartRef]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [chartRef, option, settings, theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [chartRef, loading, theme]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%', ...style }} />;
}
