import { CalendarTime, Gauge, World } from 'tabler-icons-react';
import { DetailItem, Hero } from '../components/Hero';

export function DefaultIndex() {
  const items: DetailItem[] = [
    { label: 'Historical', description: 'contains data of video games releases from 1980 - 2016', icon: CalendarTime },
    {
      label: 'Global',
      description: 'includes number of units sold in North America, Europe, Japan & Rest of World',
      icon: World,
    },
    {
      label: 'Scores',
      description: `critic and users scores from Metacritic's website`,
      icon: Gauge,
    },
  ];

  return <Hero detailItems={items} />;
}
