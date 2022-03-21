import { createStyles } from '@mantine/core';

interface BarChartStylesParams {
  width?: number | string;
  height?: number | string;
}

export const useStyles = createStyles((theme, { width, height }: BarChartStylesParams) => ({
  root: {
    width,
    height,
    overflow: 'hidden',
  },
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },
  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  menuBody: {
    width: 400,
  },
  menuItemRoot: {
    width: '100%',
    position: 'relative',
  },
  menuItemLabel: {
    width: '100%',
  },
  menuItemInput: {
    height: 'auto',
  },
  menuItemInputLabel: {
    width: '100%',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));
