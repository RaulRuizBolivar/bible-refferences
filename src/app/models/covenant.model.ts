import { BibleVerse } from './prophecy.model';

export interface Covenant {
  id: number;
  name: string;
  mediator: string;
  parties: string;
  period: string;
  sign: string;
  promise: string;
  condition: string | null;
  color: string;
  importance: number;
  oldTestament: BibleVerse;
  newTestament: BibleVerse | null;
  description: string;
  previousCovenantId: number | null;
  fulfillmentNotes: string;
}
