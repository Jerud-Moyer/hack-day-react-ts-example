import { Character } from '../types/types';
const url = process.env.REACT_APP_API_URL as string;


export const getCharacters = async(): Promise<Character[]> => {
  const res = await fetch(url);
  const json = await res.json();

  if(!res.ok) throw new Error('ERROR! NOMAD CANNOT COMPUTE');

  return json;
}

export const getCharacterById = async(id: string):
  Promise<Character> => {
    const res = await fetch(`${url}/${id}`);
    const json = await res.json();

    if(!res.ok) throw new Error('ERROR! ERRRRRRRRRORRR!');
    
    return json;
}

export const getCharactersByName = async(name: string):
  Promise<Character[]> => {
    const res = await fetch(`${url}/name/${name}`);
    const json = await res.json();

    if(!res.ok) throw new Error('ERROR');

    return json;
}
