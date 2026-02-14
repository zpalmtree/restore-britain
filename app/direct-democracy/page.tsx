import { Metadata } from 'next';
import DirectDemocracyPage from './DirectDemocracyPage';

export const metadata: Metadata = {
  title: 'Direct Democracy — Restore Britain',
  description: 'Your voice matters. Shape policy through direct democracy.',
};

export default function Page() {
  return <DirectDemocracyPage />;
}
