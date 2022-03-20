import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

export function Dashboard() {
  const theme = useMantineTheme();
  const { ref: containerRef, height } = useElementSize();
  const SECONDARY_COL_HEIGHT = height / 2 - theme.spacing.md / 2;

  return (
    <Container ref={containerRef} fluid py="md" sx={{ height: '100%', overflow: 'scroll' }}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Skeleton height={height} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
