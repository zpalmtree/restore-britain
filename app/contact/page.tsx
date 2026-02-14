import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us — Restore Britain',
  description: 'Get in touch with Restore Britain.',
};

export default function Page() {
  return <ContactPage />;
}
