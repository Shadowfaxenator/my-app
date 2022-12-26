import type { Actions, PageLoad  } from './$types';
export const prerender = false;


type MyPesp = {
    post: string
}
export const load = (async ({fetch, params}) => {
    console.log("PAGE")
    const getResource1 = await fetch(`https://swapi.dev/api/people/${params.person}`)
    

    return {
        res1: getResource1.json(),
    
    };
}) satisfies PageLoad;