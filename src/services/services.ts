const _apiBase = 'https://rickandmortyapi.com/api/';

const getResources = async (url: string) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};

export const getAllCharacters = async () => {
  return await getResources(`${_apiBase}character`);
};

export const getCharacter = async (id: number | number[] | null) => {
  return await getResources(`${_apiBase}character/${id}`);
};

export default getResources;
