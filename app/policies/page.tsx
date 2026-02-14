import { Metadata } from 'next';
import PoliciesPage from './PoliciesPage';

export const metadata: Metadata = {
  title: 'Our Policies — Restore Britain',
  description: 'Evidence-based, common-sense policies to restore Britain.',
};

export default function Page() {
  return <PoliciesPage />;
}
