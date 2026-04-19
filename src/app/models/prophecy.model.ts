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
  importance: number; // 1–5, siendo 5 la más central a la fe cristiana
  oldTestament: BibleVerse;
  newTestament: BibleVerse | null;
  description: string;
}
