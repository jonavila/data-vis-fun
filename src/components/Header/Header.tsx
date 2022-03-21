import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  Image,
  Paper,
  Transition,
  useMantineColorScheme,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import type { MouseEventHandler } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MoonStars, Sun } from 'tabler-icons-react';
import AppLogo from '../../assets/appLogo.svg';
import { HEADER_HEIGHT } from '../../constants';
import { useStyles } from './Header.styles';

export interface HeaderLink {
  to: string;
  label: string;
}

export interface HeaderProps {
  links: HeaderLink[];
}

export function Header({ links }: HeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { pathname } = useLocation();
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const onLinkClick: MouseEventHandler<HTMLAnchorElement> = () => {
    toggleOpened(false);
  };

  const onBurgerClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleOpened();
  };

  const onToggleColorScheme = () => toggleColorScheme();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.to}
      className={cx(classes.link, { [classes.linkActive]: pathname === link.to })}
      onClick={onLinkClick}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <NavLink to="/">
          <Image src={AppLogo} width={30} height={30} />
        </NavLink>
        <Group spacing={5} className={classes.links}>
          {items}
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={onToggleColorScheme}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
        <Group>
          <Burger opened={opened} onClick={onBurgerClick} className={classes.burger} size="sm" />
          <ActionIcon
            className={classes.burger}
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={onToggleColorScheme}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
        <Transition transition="pop" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  );
}
