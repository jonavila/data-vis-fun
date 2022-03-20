import { Anchor, Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import type { Icon } from 'tabler-icons-react';
import image from '../../assets/heroImage.svg';
import { useStyles } from './Hero.styles';

export interface DetailItem {
  icon: Icon;
  label: string;
  description: string;
}

export interface HeroProps {
  detailItems?: DetailItem[];
}

export function Hero({ detailItems = [] }: HeroProps) {
  const { classes } = useStyles();

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Video Game Sales Analysis</Title>
            <Text color="dimmed" mt="md">
              Built using data obtained from{' '}
              <Anchor
                href="https://www.kaggle.com/sidtwr/videogames-sales-dataset"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kaggle's Video Games Sales Dataset
              </Anchor>
              .
            </Text>

            <List mt={30} spacing="sm" size="sm">
              {detailItems.map((item) => (
                <List.Item
                  key={item.label}
                  icon={
                    <ThemeIcon size={20} radius="xl">
                      {<item.icon size={12} />}
                    </ThemeIcon>
                  }
                >
                  <b>{item.label}</b> - {item.description}
                </List.Item>
              ))}
            </List>

            <Group mt={30}>
              <Button component={NavLink} to="/dashboard" radius="xl" size="md" className={classes.control}>
                Explore data
              </Button>
              <Button
                component="a"
                href="https://github.com/jonavila/data-vis-fun"
                target="_blank"
                rel="noopener noreferrer"
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
