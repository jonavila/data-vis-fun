import { Button, Container, Group, Text, Title } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './Placeholder.styles';

export interface PlaceholderProps {
  label: string;
  title: string;
  description: string;
}

export function Placeholder({ label, title, description }: PlaceholderProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{label}</div>
      <Title className={classes.title}>{title}</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        {description}
      </Text>
      <Group position="center">
        <Button component={NavLink} to="/" variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
