export interface TeamMember {
  id: string;
  name: string;
  position: string;
  quote: string;
  image: string;
  category: 'Core' | 'Academics' | 'Marketing' | 'Conference' | 'IT' | 'Finance' | 'Logistics' | 'PR' | 'Delegates';
  linkedin?: string;
  instagram?: string;
  website?: string;
  bio?: string;
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
