import type { GroupByColumn, MetricColumn } from '../../data';
import type { EChartsOption } from '../ReactEcharts';
import type { ChartProps } from './Chart';

export { Chart } from './Chart';
export type { ChartProps } from './Chart';

export const typeOption = (groupBy: GroupByColumn, metric: MetricColumn, type: ChartProps['type']): EChartsOption => {
  return type === 'pie'
    ? { series: { type, encode: { itemName: groupBy, value: metric } } }
    : {
        grid: {
          show: true,
          top: 5,
          left: 5,
          right: 5,
          bottom: 5,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          axisLabel: { rotate: 30 },
        },
        yAxis: {
          axisLabel: { formatter: `{value} ${metric.includes('Units Sold') ? 'M' : ''}` },
        },
        series: {
          type,
          encode: { x: groupBy, y: metric },
        },
      };
};
