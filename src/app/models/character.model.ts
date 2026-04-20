export type CharacterTestament = 'AT' | 'NT';
export type CharacterRole = 'patriarca' | 'rey' | 'profeta' | 'sacerdote' | 'mesías' | 'precursor' | 'apóstol';
export type ConnectionType = 'tipo' | 'cumplimiento' | 'genealogía' | 'contemporáneo' | 'tipológico';

export interface CharacterConnection {
  targetId: string;
  type: ConnectionType;
  label: string;
  strength: number; // 1–5
}

export interface BibleCharacter {
  id: string;
  name: string;
  testament: CharacterTestament;
  role: CharacterRole;
  period: string;
  color: string;
  description: string;
  connections: CharacterConnection[];
  prophecyIds: number[];
  referenceIds: number[];
}

export interface NetworkNode extends BibleCharacter {
  x: number;
  y: number;
  r: number;
}

export interface NetworkEdge {
  source: string;
  target: string;
  type: ConnectionType;
  label: string;
  strength: number;
}
