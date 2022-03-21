import { ActionIcon, Group, Menu, NumberInput, Paper, Select, Text, useMantineColorScheme } from '@mantine/core';
import { Settings } from 'tabler-icons-react';
import { GroupByColumn, groupByColumns, MetricColumn, metricColumns, SortDirection, useDataQuery } from '../../data';
import { ReactECharts, ReactEChartsProps } from '../ReactEcharts';
import { useStyles } from './Chart.styles';
import { typeOption } from './index';

export interface ChartProps {
  /** Query's Group By column */
  groupByColumn: GroupByColumn;

  /** Query's metric column */
  metricColumn: MetricColumn;

  /** Chart width */
  width?: number | string;

  /** Chart height */
  height?: number | string;

  /** Query's sort order */
  sortDirection?: SortDirection;

  /** Query's limit */
  rowLimit?: number;

  /** Chart Type */
  type: 'bar' | 'line' | 'pie';
}

export function Chart({
  type,
  groupByColumn,
  metricColumn,
  width,
  height,
  sortDirection = 'desc',
  rowLimit = 10,
}: ChartProps) {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles({ height, width }, { name: 'BarChart' });
  const isLine = type === 'line';
  const { dataset, query, groupBy, metric, sort, limit, setGroupBy, setMetric, setSort, setLimit } = useDataQuery({
    groupByColumn,
    metricColumn,
    sortDirection,
    rowLimit,
    sortColumn: isLine ? groupByColumn : undefined,
  });

  const option: ReactEChartsProps['option'] = {
    backgroundColor: 'transparent',
    tooltip: {
      valueFormatter: (value: number) => `${parseFloat(value.toFixed(2))} ${metric.includes('Units Sold') ? 'M' : ''}`,
    },
    dataset: [
      {
        dimensions: query.columnNames(),
        source: dataset,
      },
    ],
    ...typeOption(groupBy, metric, type),
  };

  const sortTitle = sort === 'desc' ? 'Top' : 'Bottom';
  const groupTitle = `${groupBy}s`;
  const nonLineTitle = `${sortTitle} ${limit} ${groupTitle} by ${metric}`;
  const lineTitle = `${metric} by ${groupBy}`;
  const title = isLine ? lineTitle : nonLineTitle;

  return (
    <Paper component={Group} className={classes.root} radius="md" p="md" withBorder direction="column">
      <Group position="apart" noWrap>
        <Text size="xs" color="dimmed" className={classes.title}>
          {title}
        </Text>
        <Menu
          placement="end"
          classNames={{ body: classes.menuBody, item: classes.menuItemRoot, itemLabel: classes.menuItemLabel }}
          closeOnItemClick={false}
          control={
            <ActionIcon>
              <Settings className={classes.icon} size={22} />
            </ActionIcon>
          }
        >
          <Menu.Label>Query</Menu.Label>
          {!isLine && (
            <Menu.Item component="a">
              <Select
                data={groupByColumns}
                label="Group By"
                value={groupBy}
                onChange={(value: GroupByColumn) => {
                  if (value) setGroupBy(value);
                }}
                classNames={{
                  root: classes.menuItemRoot,
                  input: classes.menuItemInput,
                  label: classes.menuItemInputLabel,
                }}
              />
            </Menu.Item>
          )}
          <Menu.Item component="a">
            <Select
              data={metricColumns}
              label="Metric"
              value={metric}
              onChange={(value: MetricColumn) => {
                if (value) setMetric(value);
              }}
              classNames={{
                root: classes.menuItemRoot,
                input: classes.menuItemInput,
                label: classes.menuItemInputLabel,
              }}
            />
          </Menu.Item>
          {!isLine && (
            <Menu.Item component="a">
              <Select
                data={[
                  { value: 'asc', label: 'Ascending' },
                  { value: 'desc', label: 'Descending' },
                ]}
                label="Sort Direction"
                value={sort}
                onChange={(value: SortDirection) => {
                  if (value) setSort(value);
                }}
                classNames={{
                  root: classes.menuItemRoot,
                  input: classes.menuItemInput,
                  label: classes.menuItemInputLabel,
                }}
              />
            </Menu.Item>
          )}
          {!isLine && (
            <Menu.Item component="a">
              <NumberInput
                min={1}
                max={50}
                label="Limit"
                value={limit}
                onChange={(value: number) => {
                  if (value) setLimit(value);
                }}
                classNames={{
                  root: classes.menuItemRoot,
                  input: classes.menuItemInput,
                  label: classes.menuItemInputLabel,
                }}
              />
            </Menu.Item>
          )}
        </Menu>
      </Group>
      <ReactECharts option={option} theme={colorScheme} />
    </Paper>
  );
}
