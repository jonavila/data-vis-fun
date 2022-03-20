import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from '../components/Header';
import { HEADER_HEIGHT } from '../constants';

export function Default() {
  const headerLinks: HeaderLink[] = [
    {
      to: '/dashboard',
      label: 'Dashboard',
    },
    {
      to: '/details',
      label: 'Details',
    },
  ];

  return (
    <AppShell
      padding={0}
      navbarOffsetBreakpoint="sm"
      header={<Header links={headerLinks} />}
      styles={{ body: { height: `calc(100vh - ${HEADER_HEIGHT}px)` } }}
    >
      <Outlet />
    </AppShell>
  );
}
