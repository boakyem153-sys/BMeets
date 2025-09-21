export interface User {
  id: string;
  name: string;
  age: number;
  country: string;
  city: string;
  avatar: string;
  isOnline: boolean;
  isVerified: boolean;
  timezone: string;
  languages: string[];
  interests: string[];
  personalityTraits: string[];
  bio: string;
  culturalInfo: {
    traditions: string[];
    favoriteFood: string;
    musicGenres: string[];
  };
  videoIntroUrl?: string;
}

export interface Match {
  id: string;
  user: User;
  compatibility: number;
  sharedInterests: string[];
  timezoneDiff: number;
  matchReason: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isTranslated?: boolean;
  originalLanguage?: string;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: string;
  image: string;
  isJoined: boolean;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  images?: string[];
  timestamp: Date;
  likes: number;
  comments: number;
  isLiked: boolean;
  topic: string;
}

export interface IceBreaker {
  id: string;
  question: string;
  category: 'culture' | 'interests' | 'fun' | 'deep';
}
