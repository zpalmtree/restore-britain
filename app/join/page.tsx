import { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

const LIVE_JOIN_URL = 'https://www.restorebritain.org.uk/join_us';

export const metadata: Metadata = {
  title: 'Join Us — Restore Britain',
  description: 'Redirecting to the official Restore Britain join page.',
};

export default function Page() {
  permanentRedirect(LIVE_JOIN_URL);
}
