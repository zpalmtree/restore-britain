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

export interface PolicyPoint {
  title: string;
  description: string;
}

export interface PolicyArea {
  icon: LucideIcon;
  title: string;
  slug: string;
  href: string;
  policies: PolicyPoint[];
}

export const policyAreas: PolicyArea[] = [
  {
    icon: Shield,
    title: 'Immigration & Border Control',
    slug: 'immigration',
    href: '/policies#immigration',
    policies: [
      { title: 'Net Negative Immigration', description: 'Reverse mass immigration and abolish the asylum system. Double annual departures of legal migrants. Ensure significantly more departures than arrivals.' },
      { title: 'Red List Introduction', description: 'Implement stricter security checks for nationals from designated Red List countries with annual security reviews based on crime statistics, extremism risk, and integration failure.' },
      { title: 'Block the Boriswave', description: 'Overhaul Indefinite Leave to Remain which grants free benefits and NHS access without contribution requirements. Prevent automatic citizenship pathways.' },
      { title: 'Fairer Spouse Visas', description: 'Simplify and fast-track applications for non-Red List country citizens. Require English fluency, UK commitment, and self-sufficiency proof.' },
      { title: 'Deport Rape Gang Collaborators', description: 'Mandate automatic deportation for non-British nationals covering up rape gang abuse. Strip dual nationals of citizenship when protecting offenders.' },
      { title: 'Abolish Indefinite Leave to Remain', description: 'Replace ILR with strict time-limited residency conditional on work, tax contribution, and good character. End the automatic pipeline to citizenship.' },
      { title: 'Deport All Illegal Migrants', description: 'Address the annual asylum system cost. Remove illegal migrants through comprehensive enforcement programmes.' },
      { title: 'Close Migrant Hotels', description: 'End taxpayer-funded hotel use for illegal migrants. Replace with secure detention or offshore holding facilities. Redirect funding to border policing and deportation enforcement.' },
      { title: 'Power to Local People', description: 'Require binding local referendums for migrant accommodation facility conversions. Mandate councils publish migrant numbers, origins, costs, and service impacts.' },
      { title: 'Count Every Illegal Migrant', description: 'Launch a full state investigation integrating Home Office, HMRC, DWP, NHS, councils, and law enforcement data for comprehensive enumeration.' },
    ],
  },
  {
    icon: Landmark,
    title: 'Economy & Taxation',
    slug: 'economy',
    href: '/policies#economy',
    policies: [
      { title: 'Scrap IR35', description: 'Remove IR35 which treats independent contractors like employees for tax purposes without providing employee rights, strangling freelancers, startups, and small businesses.' },
      { title: 'Abolish Inheritance Tax', description: 'End the tax that undermines the right to pass wealth to children and penalizes savers and investors, forcing heirs to sell family businesses, farms, or property.' },
      { title: 'Lowest Corporation Tax in Europe', description: 'Slash corporation tax to attract entrepreneurs and innovators. Introduce tax holidays for new small businesses and deductions for UK manufacturing, research, and training.' },
      { title: 'Tax Remittances', description: 'Impose a levy on remittances flowing abroad to discourage economic migration, encourage return migration, and keep wealth circulating domestically.' },
      { title: 'Social Benefits for British Citizens Only', description: 'Restrict Universal Credit, Child Benefit, and Housing Benefit to British citizens. Mandate British-first social housing allocation.' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Education',
    slug: 'education',
    href: '/policies#education',
    policies: [
      { title: 'End School Holiday Fines', description: 'Give families the freedom to take children on meaningful trips during term time without state fines, up to five school days annually.' },
      { title: 'Restore the University', description: 'Universities should be openly pro-British, proud of our history, culture, and people. Remove ideologically-driven courses from publicly funded institutions.' },
    ],
  },
  {
    icon: Users,
    title: 'Cultural Identity & Social Issues',
    slug: 'culture',
    href: '/policies#culture',
    policies: [
      { title: 'Ban the Burqa', description: 'Prohibit both burqa and niqab as fundamentally un-British. Prioritise the safety and dignity of women over multiculturalism.' },
      { title: 'Ban Sharia Courts', description: 'Prohibit parallel legal systems operating under religious law. Only British courts to handle divorce, custody, inheritance, and domestic abuse.' },
      { title: 'Ban Halal and Kosher Slaughter', description: 'End religious exemptions that override animal welfare standards in slaughter practices.' },
      { title: 'Sex is Biological', description: 'Biological sex is genetically determined, not socially constructed. Oppose allowing males in women-only spaces including bathrooms, prisons, and sports.' },
      { title: 'Restore Biological Reality', description: 'Full repeal of the Gender Recognition Act. Eliminate legal sex change documents. Reinstate sex-based definitions in legislation.' },
      { title: 'Boost the Birth Rate', description: 'Reduce taxes for working families. Front-loaded child benefits with marriage tax relief. Expand IVF access and promote pro-natalist policies.' },
    ],
  },
  {
    icon: Scale,
    title: 'Civil Liberties & Governance',
    slug: 'civil-liberties',
    href: '/policies#civil-liberties',
    policies: [
      { title: 'Repeal the Online Safety Act', description: 'Establish a clear right to free speech in British law preventing criminalisation of lawful expression. Protect investigative journalism, whistleblowing, and political debate.' },
      { title: 'End the Lockdown Legacy', description: 'Review and quash convictions for non-violent lockdown rule breaches. Require parliamentary supermajority and strict time limits to suspend basic freedoms.' },
      { title: 'Independent Inquiry into COVID-19 Vaccines', description: 'Establish a truly independent inquiry into vaccine safety, rollout, and long-term effects. Overhaul the Vaccine Damage Payment Scheme.' },
      { title: "An Englishman's Home Is His Castle", description: 'Grant law-abiding citizens the full legal right to use reasonable force, including lethal force, defending home, family, and property from illegal intruders.' },
      { title: 'No Digital ID, Ever', description: 'Reject digital ID as incompatible with British political traditions. Pass laws preventing its introduction.' },
      { title: 'Restore Free Speech', description: 'Repeal existing free speech-infringing laws. Establish new legislation unequivocally enshrining free speech rights.' },
    ],
  },
  {
    icon: Gavel,
    title: 'Law & Order / Criminal Justice',
    slug: 'law-order',
    href: '/policies#law-order',
    policies: [
      { title: 'Restore the Death Penalty', description: 'Execute those convicted of the most heinous crimes. Address the cost of life imprisonment exceeding \u00a355,000 per year.' },
      { title: 'Free Political Prisoners', description: 'Release individuals imprisoned for social media posts. Challenge sentencing disparities between political cases and serious crimes.' },
      { title: 'Abolish Non-Crime Hate Incidents', description: 'Remove all non-criminal activity recordings labelled as hate from police databases permanently. Redirect police focus to actual crime.' },
      { title: 'Mandate CCTV in Taxis', description: 'Install mandatory CCTV in all taxis and private hire vehicles to address documented use by criminal gangs for trafficking and exploitation.' },
      { title: 'Legalise Pepper Spray', description: 'Permit women to carry and use pepper spray for self-defence.' },
      { title: 'Ban Islamist Hate-Preaching', description: 'Shut down mosques preaching extreme doctrine. Proscribe hateful organisations. Deport foreign hate preachers.' },
      { title: 'Investigate Food Delivery Companies', description: 'Scrutinise Deliveroo, Just Eat, and Uber Eats for enabling illegal worker employment. Hold companies criminally liable.' },
    ],
  },
  {
    icon: TreePine,
    title: 'Environment & Infrastructure',
    slug: 'environment',
    href: '/policies#environment',
    policies: [
      { title: 'No More Hosepipe Bans', description: 'Build new reservoirs across water-stressed regions. Cut red tape for water infrastructure. Hold water firms legally accountable with strict leakage reduction targets.' },
      { title: 'Automate the Tube', description: 'Replace London Underground drivers with driverless train technology already operating in Paris, Singapore, Dubai, and the DLR. Cut costs and eliminate strikes.' },
    ],
  },
  {
    icon: Tv,
    title: 'Media & Institutions',
    slug: 'media',
    href: '/policies#media',
    policies: [
      { title: 'Defund the BBC', description: 'End the licence fee system that prosecutes nearly 1,000 people each week for non-payment. The BBC no longer represents national identity or traditional British cultural values.' },
    ],
  },
  {
    icon: Vote,
    title: 'Elections & Democracy',
    slug: 'elections',
    href: '/policies#elections',
    policies: [
      { title: 'Abolish Mass Postal Voting', description: 'Eliminate on-demand postal voting. Voting should occur in-person at polling stations under full supervision. Restrict postal votes to genuine cases only.' },
    ],
  },
  {
    icon: Store,
    title: 'Local Economy & Community',
    slug: 'local',
    href: '/policies#local',
    policies: [
      { title: 'Restore the British High Street', description: 'Establish a new multi-agency unit to investigate suspicious businesses. Target establishments with no real footfall, high turnover, or known links to organised crime. HMRC to conduct routine tax compliance audits.' },
    ],
  },
  {
    icon: Globe,
    title: 'Foreign Policy',
    slug: 'foreign',
    href: '/policies#foreign',
    policies: [
      { title: 'Scrap Foreign Aid', description: 'End all international development funding. Every proposed foreign aid project must be debated in Parliament case-by-case. Any aid must directly benefit British national interests.' },
    ],
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
  summary: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'England Spends up to \u00a380 million per year on Healthcare for Illegal Migrants',
    date: '2026-01-09',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/uk_spends_up_to_80_million_per_year_on_healthcare_for_illegal_migrants',
    summary: 'Research reveals that since 2018, English taxpayers have funded approximately \u00a3646.2 million in hospital and specialist medical care for undocumented migrants, averaging roughly \u00a380.8 million annually.',
  },
  {
    id: '2',
    title: 'Restoring the British Pub - Our Latest Policy Paper',
    date: '2026-01-07',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/restoring_the_british_pub_news',
    summary: 'Britain has lost between a quarter and a third of all pubs since 2000, with closures continuing at approximately one per day. Our policy paper proposes eight practical reforms addressing business rates, VAT burdens, and rising operational costs.',
  },
  {
    id: '3',
    title: 'Voting Intention November 2025',
    date: '2025-11-28',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/voting_intention_polling',
    summary: 'A poll of 1,000 British adults found that a party led by Rupert Lowe MP would attract 10% of the national vote share, with Reform UK at 25%, the Green Party at 18%, and Labour at 16%.',
  },
  {
    id: '4',
    title: 'Restore Britain launches the most comprehensive deportation policy ever produced in Britain',
    date: '2025-10-09',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/restore_britain_launches_most_comprehensive_deportation_policy_ever',
    summary: 'Our deportation strategy proposes legal reforms including a Great Clarification Act, repeal of the Equality Act and Human Rights Act, and withdrawal from the ECHR, targeting removal of all illegal migrants within three years.',
  },
  {
    id: '5',
    title: 'Overwhelming public support for mass deportations',
    date: '2025-09-23',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/overwhelming_public_support_for_mass_deportations',
    summary: 'Polling shows 52.7% of voters would be more likely to support their MP if they backed mass deportations. 54.8% of non-voters in the 2024 election indicated they would vote for an MP supporting this policy.',
  },
  {
    id: '6',
    title: 'Write to your MP - Draft Deportations Letter',
    date: '2025-09-23',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/write_mp_draft_deportations_letter',
    summary: 'A template email for constituents to send to their MP, urging support for a comprehensive national strategy to identify, detain, and deport individuals residing in the UK illegally.',
  },
  {
    id: '7',
    title: 'Restore Britain mass deportation petition hits 300,000 signatures in two days',
    date: '2025-09-17',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/restore_britain_mass_deportation_petition_hits_300_000_signatures',
    summary: 'Our petition advocating for offshore detention and mass deportation reached 300,000 signatures within 48 hours. Member polling showed 99.5% support, and 21 MPs have signed an Early Day Motion backing the strategy.',
  },
  {
    id: '8',
    title: 'Restore Britain Polling Rape Gangs',
    date: '2025-08-27',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/restore_britain_polling_rape_gangs',
    summary: 'Polling of 1,417 adults found 78% support automatically deporting foreign nationals convicted of organised child sexual exploitation, and 71.5% support revoking citizenship and deporting dual nationals convicted of such crimes.',
  },
  {
    id: '9',
    title: 'Restore Britain Polling Gaza',
    date: '2025-08-19',
    author: 'Rupert Lowe',
    href: 'https://www.restorebritain.org.uk/restore_britain_gaza_polling',
    summary: 'A poll of 1,049 adults found 48% preferred neighbouring countries provide care for injured Palestinian children rather than the UK, and 50.4% opposed allowing asylum claims from Gaza.',
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
