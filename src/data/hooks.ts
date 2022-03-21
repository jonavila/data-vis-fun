import * as aq from 'arquero';
import { useMemo, useState } from 'react';
import type { GroupByColumn, MetricColumn, SortDirection } from './index';
import { columnsToSelect, dataset as rawData, RenamedColumn } from './index';

export interface UseDataQueryProps {
  groupByColumn: GroupByColumn;
  metricColumn: MetricColumn;
  sortColumn?: RenamedColumn;
  sortDirection: SortDirection;
  rowLimit: number;
}

export function useDataQuery({ groupByColumn, metricColumn, sortDirection, rowLimit, sortColumn }: UseDataQueryProps) {
  const [groupBy, setGroupBy] = useState(groupByColumn);
  const [metric, setMetric] = useState(metricColumn);
  const [sort, setSort] = useState(sortDirection);
  const [limit, setLimit] = useState(rowLimit);

  const query = useMemo(() => {
    const sortField = sortColumn ?? metric;
    const orderBy = sort === 'desc' ? aq.desc(sortField) : sortField;
    const videoGameSales = aq.from(rawData).select(columnsToSelect);

    return videoGameSales
      .filter((d) => d!['Year of Release'] <= 2017)
      .groupby(groupBy)
      .rollup({
        'Video Game Count': aq.op.count(),
        'Total Units Sold': aq.op.sum('Total Units Sold'),
        'North America Units Sold': aq.op.sum('North America Units Sold'),
        'Europe Units Sold': aq.op.sum('Europe Units Sold'),
        'Japan Units Sold': aq.op.sum('Japan Units Sold'),
        'Other Units Sold': aq.op.sum('Other Units Sold'),
        'Critic Count': aq.op.sum('Critic Count'),
        'User Count': aq.op.sum('User Count'),
        'Average Critic Score': aq.op.average('Average Critic Score'),
        'Average User Score': aq.op.average('Average User Score'),
      })
      .orderby(orderBy);
  }, [groupBy, metric, sort, sortColumn]);

  const dataset = useMemo(() => query.objects({ limit }), [limit, query]);

  return { groupBy, metric, sort, limit, setGroupBy, setMetric, setSort, setLimit, dataset, query };
}
