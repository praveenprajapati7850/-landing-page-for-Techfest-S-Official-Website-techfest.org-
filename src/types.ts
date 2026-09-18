export interface Competition {
  id: string;
  name: string;
  category: 'Robotics' | 'AI & Computing' | 'Aeromodelling' | 'Innovation & BioTech' | 'Design & Strategy';
  tagline: string;
  prizePool: string;
  teamSize: string;
  registrationStatus: 'Open' | 'Filling Fast' | 'Closing Soon';
  description: string;
  rulesSnippet: string[];
  venue: string;
  date: string;
  featured?: boolean;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  topic: string;
  bio: string;
  image: string;
  date: string;
  venue: string;
  badge: string;
}

export interface Workshop {
  id: string;
  title: string;
  instructor: string;
  affiliation: string;
  duration: string;
  seats: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  prerequisites: string[];
  takeaways: string[];
  date: string;
}

export interface Exhibition {
  id: string;
  title: string;
  origin: string;
  category: string;
  description: string;
  highlights: string[];
  location: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: 'Keynote' | 'Competition' | 'Workshop' | 'Exhibit' | 'Pronite & Show';
  venue: string;
  day: 1 | 2 | 3;
  speakerOrHost?: string;
}

export interface PassOption {
  id: string;
  title: string;
  price: string;
  eligibility: string;
  benefits: string[];
  isPopular?: boolean;
}
