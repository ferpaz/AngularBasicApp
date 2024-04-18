export interface Character {
  id: string;
  name: string;
  power: number;
  selected: boolean;
}

export function emptyCharacter(): Character {
  return {
    id: '',
    name: '',
    power: 0,
    selected: false
  };
}
