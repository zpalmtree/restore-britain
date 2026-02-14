import { Metadata } from 'next';
import JoinPage from './JoinPage';

export const metadata: Metadata = {
  title: 'Join Us — Restore Britain',
  description: 'Become a member of Restore Britain and help shape the future.',
};

export default function Page() {
  return <JoinPage />;
}
