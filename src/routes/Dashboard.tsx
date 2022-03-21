import { Container, Grid, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { Chart } from '../components/Chart';
import { MIN_DASHBOARD_PRIMARY_COLUMN_HEIGHT, MIN_DASHBOARD_SECONDARY_COLUMN_HEIGHT } from '../constants';

export function Dashboard() {
  const theme = useMantineTheme();
  const { ref: containerRef, height } = useElementSize();
  const PRIMARY_COL_HEIGHT = Math.max(height, MIN_DASHBOARD_PRIMARY_COLUMN_HEIGHT);
  const SECONDARY_COL_HEIGHT = Math.max(height / 2 - theme.spacing.md / 2, MIN_DASHBOARD_SECONDARY_COLUMN_HEIGHT);

  return (
    <Container ref={containerRef} fluid py="md" sx={{ height: '100%', overflow: 'scroll' }}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Chart type="bar" groupByColumn="Platform" metricColumn="Video Game Count" height={PRIMARY_COL_HEIGHT} />
        <Grid gutter="md">
          <Grid.Col>
            <Chart
              type="line"
              groupByColumn="Year of Release"
              metricColumn="Total Units Sold"
              sortDirection="asc"
              rowLimit={50}
              height={SECONDARY_COL_HEIGHT}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Chart
              type="pie"
              groupByColumn="Rating"
              metricColumn="Total Units Sold"
              sortDirection="desc"
              rowLimit={5}
              height={SECONDARY_COL_HEIGHT}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Chart
              type="pie"
              groupByColumn="Genre"
              metricColumn="Total Units Sold"
              sortDirection="desc"
              rowLimit={5}
              height={SECONDARY_COL_HEIGHT}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
