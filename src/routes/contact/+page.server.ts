export const prerender = false;

import type { PageLoad, Actions} from './$types';
type MyPesp = {
    post: string
}
export const load = (async ({fetch}:any ) => {
   const id =  Math.floor( Math.random()*10)
   console.log(id)
    const getResource1 = await fetch(`https://swapi.dev/api/people/${id}`)
    

    return {
        res1: getResource1.json(),
    
    };
}) satisfies PageLoad;

export const actions: Actions = {
    login: async (event) => {
      console.log(event)
      // TODO log the user in
    }
  };