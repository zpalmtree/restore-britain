import { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

const LIVE_DONATE_URL = 'https://www.restorebritain.org.uk/donate';

export const metadata: Metadata = {
  title: 'Donate — Restore Britain',
  description: 'Redirecting to the official Restore Britain donation page.',
};

export default function Page() {
  permanentRedirect(LIVE_DONATE_URL);
}
