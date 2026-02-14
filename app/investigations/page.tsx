import { Metadata } from 'next';
import InvestigationsPage from './InvestigationsPage';

export const metadata: Metadata = {
  title: 'Investigations — Restore Britain',
  description: 'Holding power to account through investigations and transparency.',
};

export default function Page() {
  return <InvestigationsPage />;
}
