import { writable, Writable } from 'svelte/store';
import type { Pokemon } from 'constants/types';

interface IsStoreState {
  isFetching: boolean;
  data: Pokemon | undefined[];
}

const defaultState: IsStoreState = {
  isFetching: false,
  data: [],
};

function createPokemon() {
  const { subscribe, update }: Writable<IsStoreState> = writable(defaultState);

  const setFetching = (state = false) =>
    update((datas) => {
      return { ...datas, isFetching: state };
    });

  const setData = (d = []) =>
    update((datas) => {
      return { ...datas, data: d };
    });

  return {
    subscribe,
    fetch: async (): Promise<void> => {
      setFetching(true);

      const list = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2')
        .then((response) => response.json())
        .then(({ results = [] }) => {
          return results;
        });

      setData(list);
      setFetching(false);
    },
  };
}

export const usePokemon = createPokemon();
