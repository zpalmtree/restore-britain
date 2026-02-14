import { Metadata } from 'next';
import WhistleblowingPage from './WhistleblowingPage';

export const metadata: Metadata = {
  title: 'Whistleblowing — Restore Britain',
  description: 'Report wrongdoing safely and confidentially.',
};

export default function Page() {
  return <WhistleblowingPage />;
}
