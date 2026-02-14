import { Metadata } from 'next';
import FoiPage from './FoiPage';

export const metadata: Metadata = {
  title: 'FOI Requests — Restore Britain',
  description: 'Freedom of Information investigations and findings.',
};

export default function Page() {
  return <FoiPage />;
}
