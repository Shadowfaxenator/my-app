export const prerender = false;
import type { PageLoad} from './$types';
type MyPesp = {
    post: string
}


  

export const load = (async ({fetch,url}) => {
    console.log("LAYOUT")
    const getResource1 = await fetch("https://swapi.dev/api/people")
    

    return {
        res1: getResource1.json(),
        url: url.hostname.toString()
    };
}) satisfies PageLoad;

