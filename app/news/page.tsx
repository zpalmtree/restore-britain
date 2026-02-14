import { Metadata } from 'next';
import NewsPage from './NewsPage';

export const metadata: Metadata = {
  title: 'News — Restore Britain',
  description: 'The latest news and updates from Restore Britain.',
};

export default function Page() {
  return <NewsPage />;
}
