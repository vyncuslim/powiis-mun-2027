import { TeamMember, Resource, Committee } from './types';

const teamNameFromImage = (imagePath: string) =>
  imagePath
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') ?? '';

export const SECRETARIAT: TeamMember[] = [
  {
    id: '1',
    name: teamNameFromImage('/team/vyncus-lim.jpeg'),
    position: 'Head of IT',
    quote: 'Every clause carries intention; every decision shapes consequence.',
    image: '/team/vyncus-lim.jpeg',
    photos: [
      '/team/vyncus-lim.jpeg',
      '/team/vyncus/dubai-sign.jpeg',
      '/team/vyncus/dubai-frame.png',
      '/team/vyncus/traditional-lane.png',
    ],
    category: 'Core',
    linkedin: 'https://www.linkedin.com/in/vyncus-lim-761300375/',
    instagram: 'https://www.instagram.com/vyncuslim',
    website: 'https://sleepsomno.com',
    bio: `Vyncus Lim is the Secretary General for POWIIS MUNC 2027. With a passion for diplomacy and technology, he leads the secretariat in organizing a conference that fosters international collaboration and critical thinking.`,
  },
  {
    id: '2',
    name: teamNameFromImage('/team/lim-zi-xuan.jpeg'),
    position: 'Deputy Secretary General',
    quote: 'Diplomacy is the path to peace.',
    image: '/team/lim-zi-xuan.jpeg',
    category: 'Core',
  },
  {
    id: '3',
    name: teamNameFromImage('/team/tan-zi-yi.jpeg'),
    position: 'USG of Academics',
    quote: 'Academic excellence is our priority.',
    image: '/team/tan-zi-yi.jpeg',
    category: 'Academics',
  },
  {
    id: '4',
    name: teamNameFromImage('/team/ng-zi-xuan.jpeg'),
    position: 'USG of Finance',
    quote: 'Fiscal responsibility ensures sustainability.',
    image: '/team/ng-zi-xuan.jpeg',
    category: 'Finance',
  },
  {
    id: '5',
    name: 'Lea',
    position: 'USG of Operations',
    quote: 'Efficiency is the foundation of success.',
    image: '/team/afzan.jpeg',
    category: 'Core',
  },
  {
    id: '6',
    name: teamNameFromImage('/team/lee-jia-en.jpeg'),
    position: 'USG of Logistics',
    quote: 'Smooth operations lead to great experiences.',
    image: '/team/lee-jia-en.jpeg',
    category: 'Logistics',
  },
  {
    id: '7',
    name: teamNameFromImage('/team/wong-xin-yi.jpeg'),
    position: 'USG of PR & Marketing',
    quote: 'Connecting the world through communication.',
    image: '/team/wong-xin-yi.jpeg',
    category: 'PR',
  },
  {
    id: '8',
    name: teamNameFromImage('/team/chew-mei-ling.jpeg'),
    position: 'USG of Delegate Affairs',
    quote: 'Empowering delegates to reach their potential.',
    image: '/team/chew-mei-ling.jpeg',
    category: 'Delegates',
  },
  {
    id: '9',
    name: teamNameFromImage('/team/tan-wei-ling.jpeg'),
    position: 'USG of IT',
    quote: 'Technology as a bridge for global understanding.',
    image: '/team/tan-wei-ling.jpeg',
    category: 'Core',
  },
  {
    id: '10',
    name: teamNameFromImage('/team/lim-sze-en.jpeg'),
    position: 'USG of Outreach',
    quote: 'Expanding our horizons, one connection at a time.',
    image: '/team/lim-sze-en.jpeg',
    category: 'PR',
  },
  {
    id: '11',
    name: teamNameFromImage('/team/ng-jia-yi.jpeg'),
    position: 'USG of Welfare',
    quote: 'Ensuring every delegate feels at home.',
    image: '/team/ng-jia-yi.jpeg',
    category: 'Delegates',
  },
  {
    id: '12',
    name: teamNameFromImage('/team/saisa.jpeg'),
    position: 'Secretariat Member',
    quote: 'Showing up with discipline and purpose.',
    image: '/team/saisa.jpeg',
    category: 'Core',
  },
  {
    id: '13',
    name: teamNameFromImage('/team/aron.png'),
    position: 'Secretariat Member',
    quote: 'Calm focus builds strong performance.',
    image: '/team/aron.png',
    category: 'Core',
  },
];

export const RESOURCES: Resource[] = [
  {
    id: 'r1',
    title: 'Study Guide',
    description: 'Comprehensive guide for your committee topics.',
    link: '#',
  },
  {
    id: 'r2',
    title: 'Rules of Procedure',
    description: 'The formal rules for debate and resolution.',
    link: '#',
  },
  {
    id: 'r3',
    title: 'Country Matrix',
    description: 'List of available countries for each committee.',
    link: '#',
  },
  {
    id: 'r4',
    title: 'Delegate Handbook',
    description: 'Everything you need to know for the conference day.',
    link: '#',
  },
  {
    id: 'r5',
    title: 'Position Paper Guide',
    description: 'Learn how to write a compelling position paper.',
    link: '#',
  },
  {
    id: 'r6',
    title: 'Resolution Writing',
    description: 'A guide to drafting and submitting resolutions.',
    link: '#',
  },
];

export const COMMITTEES: Committee[] = [
  {
    id: 'c1',
    name: 'UNSC',
    topic: 'The Situation in the South China Sea',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=400&auto=format&fit=crop',
    chairs: ['Vyncus Lim', 'Lim Zi Xuan'],
    description: 'The United Nations Security Council (UNSC) is one of the six principal organs of the United Nations, charged with ensuring international peace and security.'
  },
  {
    id: 'c2',
    name: 'ECOSOC',
    topic: 'Addressing the Global Debt Crisis in Developing Nations',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&h=400&auto=format&fit=crop',
    chairs: ['Tan Zi Yi', 'Ng Zi Xuan'],
    description: 'The Economic and Social Council (ECOSOC) is the principal body for coordination, policy review, policy dialogue and recommendations on economic, social and environmental issues.'
  },
  {
    id: 'c3',
    name: 'UNHRC',
    topic: 'Protecting the Rights of Refugees and Internally Displaced Persons',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&h=400&auto=format&fit=crop',
    chairs: ['Afzan', 'Lim Zi Xuan'],
    description: 'The United Nations Human Rights Council (UNHRC) is a United Nations body whose mission is to promote and protect human rights around the world.'
  },
  {
    id: 'c4',
    name: 'UNODC',
    topic: 'Combating Transnational Organized Crime and Illicit Drug Trafficking',
    image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=800&h=400&auto=format&fit=crop',
    chairs: ['Vyncus Lim', 'Tan Zi Yi'],
    description: 'The United Nations Office on Drugs and Crime (UNODC) is a global leader in the fight against illicit drugs and international crime.'
  },
  {
    id: 'c5',
    name: 'IPC',
    topic: 'International Press Corps (Reporting on the Conference)',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&h=400&auto=format&fit=crop',
    chairs: ['Ng Zi Xuan', 'Afzan'],
    description: 'The International Press Corps (IPC) is responsible for documenting and reporting on the proceedings of the conference.'
  },
];

export const GALLERY = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
];

export const SCHEDULE = [
  {
    day: 'Day 1',
    date: 'Jan 15, 2027',
    events: [
      { time: '08:30 - 09:30', title: 'Registration & Breakfast' },
      { time: '09:30 - 10:30', title: 'Opening Ceremony' },
      { time: '10:30 - 12:30', title: 'Committee Session I' },
      { time: '12:30 - 13:30', title: 'Lunch Break' },
      { time: '13:30 - 15:30', title: 'Committee Session II' },
      { time: '15:30 - 16:00', title: 'Tea Break' },
      { time: '16:00 - 17:30', title: 'Committee Session III' },
    ]
  },
  {
    day: 'Day 2',
    date: 'Jan 16, 2027',
    events: [
      { time: '09:00 - 11:00', title: 'Committee Session IV' },
      { time: '11:00 - 11:30', title: 'Tea Break' },
      { time: '11:30 - 13:00', title: 'Committee Session V' },
      { time: '13:00 - 14:00', title: 'Lunch Break' },
      { time: '14:00 - 16:00', title: 'Committee Session VI' },
      { time: '16:00 - 18:00', title: 'Social Event' },
    ]
  },
  {
    day: 'Day 3',
    date: 'Jan 17, 2027',
    events: [
      { time: '09:00 - 11:00', title: 'Committee Session VII' },
      { time: '11:00 - 11:30', title: 'Tea Break' },
      { time: '11:30 - 13:00', title: 'Committee Session VIII' },
      { time: '13:00 - 14:00', title: 'Lunch Break' },
      { time: '14:00 - 16:00', title: 'Closing Ceremony' },
    ]
  }
];
