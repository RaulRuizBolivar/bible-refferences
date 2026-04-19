export type ProphecyCategory = 'mesiánica' | 'apocalíptica' | 'histórica';

export interface BibleVerse {
  reference: string;
  text: string;
}

export interface Prophecy {
  id: number;
  title: string;
  category: ProphecyCategory;
  theme: string;
  oldTestament: BibleVerse;
  newTestament: BibleVerse | null;
  description: string;
}
