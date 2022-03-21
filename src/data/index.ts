import dataset from './video_game_sales.json';

export type OriginalColumnName =
  | 'Name'
  | 'Platform'
  | 'Year_of_Release'
  | 'Genre'
  | 'Publisher'
  | 'NA_Sales'
  | 'EU_Sales'
  | 'JP_Sales'
  | 'Other_Sales'
  | 'Global_Sales'
  | 'Critic_Score'
  | 'Critic_Count'
  | 'User_Score'
  | 'User_Count'
  | 'Developer'
  | 'Rating';

export const columnsToSelect = {
  Name: 'Game',
  Platform: 'Platform',
  Year_of_Release: 'Year of Release',
  Genre: 'Genre',
  Publisher: 'Publisher',
  Developer: 'Developer',
  Rating: 'Rating',
  NA_Sales: 'North America Units Sold',
  EU_Sales: 'Europe Units Sold',
  JP_Sales: 'Japan Units Sold',
  Other_Sales: 'Other Units Sold',
  Global_Sales: 'Total Units Sold',
  Critic_Score: 'Average Critic Score',
  Critic_Count: 'Critic Count',
  User_Score: 'Average User Score',
  User_Count: 'User Count',
} as const;

type ValueOf<T> = T[keyof T];
export type RenamedColumn = ValueOf<typeof columnsToSelect>;

export type GroupByColumn = Extract<
  RenamedColumn,
  'Game' | 'Platform' | 'Year of Release' | 'Genre' | 'Publisher' | 'Developer' | 'Rating'
>;

export type MetricColumn =
  | Extract<
      RenamedColumn,
      | 'North America Units Sold'
      | 'Europe Units Sold'
      | 'Japan Units Sold'
      | 'Other Units Sold'
      | 'Total Units Sold'
      | 'Average Critic Score'
      | 'Critic Count'
      | 'Average User Score'
      | 'User Count'
    >
  | 'Video Game Count';

export type SortDirection = 'asc' | 'desc';

export const groupByColumns: GroupByColumn[] = [
  'Developer',
  'Game',
  'Genre',
  'Platform',
  'Publisher',
  'Rating',
  'Year of Release',
];

export const metricColumns: MetricColumn[] = [
  'Average Critic Score',
  'Average User Score',
  'Critic Count',
  'Europe Units Sold',
  'Japan Units Sold',
  'North America Units Sold',
  'Other Units Sold',
  'Total Units Sold',
  'User Count',
  'Video Game Count',
];

export { dataset };
export { useDataQuery } from './hooks';
export type { UseDataQueryProps } from './hooks';
