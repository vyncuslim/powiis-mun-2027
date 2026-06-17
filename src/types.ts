export type TeamDepartment =
  | 'Core'
  | 'Conference'
  | 'Academics'
  | 'Finance'
  | 'PR'
  | 'IT'
  | 'Marketing'
  | 'Logistics'
  | 'Delegates';

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  quote: string;
  image: string;
  photos?: string[];
  category: TeamDepartment;
  linkedin?: string;
  instagram?: string;
  website?: string;
  bio?: string;
}

export interface TeamSection {
  id: string;
  title: string;
  categories: TeamDepartment[];
  columns?: 2 | 3 | 4;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface Committee {
  id: string;
  name: string;
  topic: string;
  image: string;
  chairs?: string[];
  description?: string;
}
