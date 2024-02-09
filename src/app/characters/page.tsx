import { Charactergrid } from "@/components/CharacterGrid";
import { getCharacters } from "@/lib/NarutoAPI";

export default async function Personajes() {
  const charactersList = await getCharacters();
  return <Charactergrid characterList={charactersList} />;
}
