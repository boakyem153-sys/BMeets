import { faker } from '@faker-js/faker';
import { User, Match, Group, Post, IceBreaker } from '../types';

const countries = ['USA', 'Japan', 'Brazil', 'France', 'India', 'Australia', 'Nigeria', 'Mexico', 'Germany', 'South Korea'];
const languages = ['English', 'Spanish', 'French', 'Japanese', 'Portuguese', 'German', 'Hindi', 'Korean', 'Arabic', 'Chinese'];
const interests = ['Photography', 'Cooking', 'Hiking', 'Reading', 'Music', 'Gaming', 'Travel', 'Art', 'Sports', 'Technology', 'Dancing', 'Movies'];
const personalityTraits = ['Adventurous', 'Creative', 'Analytical', 'Empathetic', 'Humorous', 'Ambitious', 'Laid-back', 'Curious'];
const topics = ['Culture', 'Food', 'Travel', 'Technology', 'Art', 'Music', 'Sports', 'Books', 'Movies', 'Gaming'];

export const generateMockUser = (): User => {
  const country = faker.helpers.arrayElement(countries);
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 65 }),
    country,
    city: faker.location.city(),
    avatar: `https://i.pravatar.cc/150?u=${faker.string.uuid()}`,
    isOnline: faker.datatype.boolean(),
    isVerified: faker.datatype.boolean(),
    timezone: faker.location.timeZone(),
    languages: faker.helpers.arrayElements(languages, { min: 1, max: 3 }),
    interests: faker.helpers.arrayElements(interests, { min: 3, max: 6 }),
    personalityTraits: faker.helpers.arrayElements(personalityTraits, { min: 2, max: 4 }),
    bio: faker.lorem.sentences(2),
    culturalInfo: {
      traditions: [faker.lorem.words(2), faker.lorem.words(3)],
      favoriteFood: faker.lorem.words(2),
      musicGenres: faker.helpers.arrayElements(['Pop', 'Rock', 'Jazz', 'Classical', 'Folk', 'Electronic'], { min: 1, max: 3 })
    },
    videoIntroUrl: faker.datatype.boolean() ? faker.internet.url() : undefined
  };
};

export const generateMockMatches = (count: number = 10): Match[] => {
  return Array.from({ length: count }, () => {
    const user = generateMockUser();
    return {
      id: faker.string.uuid(),
      user,
      compatibility: faker.number.int({ min: 70, max: 98 }),
      sharedInterests: faker.helpers.arrayElements(interests, { min: 1, max: 4 }),
      timezoneDiff: faker.number.int({ min: 0, max: 12 }),
      matchReason: faker.helpers.arrayElement([
        'Shared love for photography',
        'Both interested in Japanese culture',
        'Similar personality traits',
        'Both speak multiple languages',
        'Common travel destinations'
      ])
    };
  });
};

export const generateMockGroups = (count: number = 15): Group[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    memberCount: faker.number.int({ min: 10, max: 5000 }),
    category: faker.helpers.arrayElement(['Culture', 'Language', 'Hobbies', 'Travel', 'Food']),
    image: `https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/6366f1/ffffff?text=${faker.lorem.word()}`,
    isJoined: faker.datatype.boolean()
  }));
};

export const generateMockPosts = (count: number = 20): Post[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    author: generateMockUser(),
    content: faker.lorem.paragraph(),
    images: faker.datatype.boolean() ? [`https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/6366f1/ffffff?text=Post`] : undefined,
    timestamp: faker.date.recent(),
    likes: faker.number.int({ min: 0, max: 200 }),
    comments: faker.number.int({ min: 0, max: 50 }),
    isLiked: faker.datatype.boolean(),
    topic: faker.helpers.arrayElement(topics)
  }));
};

export const iceBreakers: IceBreaker[] = [
  { id: '1', question: 'What\'s a tradition from your culture that you\'d love to share?', category: 'culture' },
  { id: '2', question: 'If you could visit any country tomorrow, where would you go?', category: 'interests' },
  { id: '3', question: 'What\'s the most unusual food you\'ve ever tried?', category: 'culture' },
  { id: '4', question: 'What\'s your favorite way to spend a weekend?', category: 'fun' },
  { id: '5', question: 'What\'s something you\'re currently learning or want to learn?', category: 'deep' },
  { id: '6', question: 'What music from your country should I definitely listen to?', category: 'culture' },
  { id: '7', question: 'What\'s the best advice someone from your culture has given you?', category: 'deep' },
  { id: '8', question: 'If you could teach me one phrase in your language, what would it be?', category: 'culture' }
];

export const commonPhrases = {
  'Spanish': [
    { phrase: 'Hola, ¿cómo estás?', translation: 'Hello, how are you?' },
    { phrase: 'Mucho gusto', translation: 'Nice to meet you' },
    { phrase: '¿De dónde eres?', translation: 'Where are you from?' }
  ],
  'French': [
    { phrase: 'Bonjour, comment allez-vous?', translation: 'Hello, how are you?' },
    { phrase: 'Enchanté(e)', translation: 'Nice to meet you' },
    { phrase: 'D\'où venez-vous?', translation: 'Where are you from?' }
  ],
  'Japanese': [
    { phrase: 'こんにちは', translation: 'Hello (Konnichiwa)' },
    { phrase: 'はじめまして', translation: 'Nice to meet you (Hajimemashite)' },
    { phrase: 'お元気ですか？', translation: 'How are you? (Ogenki desu ka?)' }
  ]
};
