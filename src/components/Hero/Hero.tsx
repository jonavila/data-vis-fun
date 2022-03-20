import { Anchor, Button, Container, Group, Image, List, Text, Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import image from '../../assets/heroImage.svg';
import { useStyles } from './Hero.styles';

export function Hero() {
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
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with keyboard
              </List.Item>
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
