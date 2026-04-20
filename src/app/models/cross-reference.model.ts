import { BibleVerse } from './prophecy.model';

export type ReferenceType = 'tipología' | 'cita directa' | 'alusión' | 'paralelo temático';

export interface CrossReference {
  id: number;
  title: string;
  type: ReferenceType;
  theme: string;
  importance: number; // 1–5
  verseA: BibleVerse; // verso que contiene la referencia (generalmente NT)
  verseB: BibleVerse; // verso referenciado (generalmente AT)
  description: string;
}
