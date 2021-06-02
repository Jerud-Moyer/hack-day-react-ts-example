import { useEffect, useState } from "react";
import { ListCharacter, Character} from '../types/types';
import { useParams } from "react-router";
import { getCharacterById, getCharacters, getCharactersByName } from "../services/trek-api";


export const useCharacters = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<ListCharacter[]>([])


  useEffect(() => {
    getCharacters()
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false))

}, []);

  return {
    loading,
    characters
  }

};

export const useSingleCharacter = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    getCharacterById(id)
      .then(fetchedCharacter => setCharacter(fetchedCharacter))
      .finally(() => setLoading(false));
  }, [id])

  return {
    loading,
    character
  };
};

export const useNamedCharacters = (name: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ListCharacter[]>([])

  useEffect(() => {
    setLoading(true)
    getCharactersByName(name)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, [name]);

  return {
    loading,
    characters
  };

};
