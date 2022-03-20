import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink } from '../components/Header';

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
    <AppShell padding="md" navbarOffsetBreakpoint="sm" fixed header={<Header links={headerLinks} />}>
      <Outlet />
    </AppShell>
  );
}
