import {
  Shield,
  Landmark,
  BookOpen,
  Users,
  Scale,
  Gavel,
  TreePine,
  Tv,
  Vote,
  Store,
  Globe,
  Beer,
  type LucideIcon,
} from 'lucide-react';

export interface PolicyArea {
  icon: LucideIcon;
  title: string;
  slug: string;
  href: string;
}

export const policyAreas: PolicyArea[] = [
  {
    icon: Shield,
    title: 'Immigration & Border Control',
    slug: 'immigration',
    href: '/policies#immigration',
  },
  {
    icon: Landmark,
    title: 'Economy & Taxation',
    slug: 'economy',
    href: '/policies#economy',
  },
  {
    icon: BookOpen,
    title: 'Education',
    slug: 'education',
    href: '/policies#education',
  },
  {
    icon: Users,
    title: 'Cultural Identity & Social Issues',
    slug: 'culture',
    href: '/policies#culture',
  },
  {
    icon: Scale,
    title: 'Civil Liberties & Governance',
    slug: 'civil-liberties',
    href: '/policies#civil-liberties',
  },
  {
    icon: Gavel,
    title: 'Law & Order / Criminal Justice',
    slug: 'law-order',
    href: '/policies#law-order',
  },
  {
    icon: TreePine,
    title: 'Environment & Infrastructure',
    slug: 'environment',
    href: '/policies#environment',
  },
  {
    icon: Tv,
    title: 'Media & Institutions',
    slug: 'media',
    href: '/policies#media',
  },
  {
    icon: Vote,
    title: 'Elections & Democracy',
    slug: 'elections',
    href: '/policies#elections',
  },
  {
    icon: Store,
    title: 'Local Economy & Community',
    slug: 'local',
    href: '/policies#local',
  },
  {
    icon: Globe,
    title: 'Foreign Policy',
    slug: 'foreign',
    href: '/policies#foreign',
  },
];

export const featuredPolicies = [
  {
    icon: Beer,
    title: 'Restoring the British Pub: Measures for Preserving the Heart of Britain',
    date: 'Jan 07, 2026',
    author: 'Rupert Lowe',
  },
  {
    icon: Shield,
    title: 'Mass Deportations: Legitimacy, Legality, and Logistics',
    date: 'Oct 09, 2025',
    author: 'Rupert Lowe',
  },
];

export const stats = [
  { label: 'Petition Signatures', value: 300000, suffix: '+' },
  { label: 'Polling Support', value: 10, suffix: '%' },
  { label: 'Policy Areas', value: 11, suffix: '' },
];

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  href: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'England Spends up to £80 million per year on Healthcare for Illegal Migrants',
    date: '2026-01-09',
    author: 'Rupert Lowe',
    href: '/news#healthcare-illegal-migrants',
  },
  {
    id: '2',
    title: 'Restoring the British Pub - Our Latest Policy Paper',
    date: '2026-01-07',
    author: 'Rupert Lowe',
    href: '/news#british-pub',
  },
  {
    id: '3',
    title: 'Voting Intention November 2025',
    date: '2025-11-28',
    author: 'Rupert Lowe',
    href: '/news#voting-intention',
  },
  {
    id: '4',
    title: 'Restore Britain launches the most comprehensive deportation policy ever produced in Britain',
    date: '2025-10-09',
    author: 'Rupert Lowe',
    href: '/news#deportation-policy-launch',
  },
  {
    id: '5',
    title: 'Overwhelming public support for mass deportations',
    date: '2025-09-23',
    author: 'Rupert Lowe',
    href: '/news#mass-deportation-support',
  },
  {
    id: '6',
    title: 'Write to your MP - Draft Deportations Letter',
    date: '2025-09-23',
    author: 'Rupert Lowe',
    href: '/news#write-your-mp',
  },
  {
    id: '7',
    title: 'Restore Britain mass deportation petition hits 300,000 signatures in two days',
    date: '2025-09-17',
    author: 'Rupert Lowe',
    href: '/news#petition-300k',
  },
  {
    id: '8',
    title: 'Restore Britain Polling Rape Gangs',
    date: '2025-08-27',
    author: 'Rupert Lowe',
    href: '/news#polling-rape-gangs',
  },
  {
    id: '9',
    title: 'Restore Britain Polling Gaza',
    date: '2025-08-19',
    author: 'Rupert Lowe',
    href: '/news#polling-gaza',
  },
];

export interface FeaturedCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const featuredCards: FeaturedCard[] = [
  {
    icon: Users,
    title: 'Join Us',
    description:
      'Restore Britain is a political party for those who believe that our nation has been hollowed out by weak leadership, broken institutions, and a political class that no longer serves the people.',
    href: '/join',
    cta: 'Join the Movement',
  },
  {
    icon: BookOpen,
    title: 'Our Policies',
    description:
      'From immigration and border control to economy, education, law and order, and protecting our cultural identity. Read the policies that will restore Britain.',
    href: '/policies',
    cta: 'Read Our Policies',
  },
  {
    icon: Vote,
    title: 'Direct Democracy',
    description:
      'An entirely new way of doing politics. Propose policy, vote on suggestions from other members, and shape the future of this party and this country.',
    href: '/direct-democracy',
    cta: 'Have Your Say',
  },
];

export const directDemocracySteps = [
  {
    step: 1,
    icon: BookOpen,
    title: 'Propose',
    description:
      'Any member can propose policy through our direct democracy platform.',
  },
  {
    step: 2,
    icon: Vote,
    title: 'Vote',
    description:
      'A simple yes or no response to the main question, with lots more polls included.',
  },
  {
    step: 3,
    icon: Users,
    title: 'Campaign',
    description:
      'Those that receive the most support will be examined to be taken forward for a full campaign.',
  },
];
