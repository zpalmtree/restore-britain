import { Metadata } from 'next';
import DonatePage from './DonatePage';

export const metadata: Metadata = {
  title: 'Donate — Restore Britain',
  description: 'Support the movement to restore Britain.',
};

export default function Page() {
  return <DonatePage />;
}
