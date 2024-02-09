const characters_url = "https://dattebayo-api.onrender.com/characters/";

export async function getCharacters() {
  const response = await fetch(characters_url);
  const data = await response.json();
  return data.characters;
}

export async function getCharacter(id: string) {
  try {
    const response = await fetch(characters_url + id);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
