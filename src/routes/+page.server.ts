import type { PageServerLoad , Actions} from './$types';
import {env} from '$env/dynamic/private'
type Note = {
    title: string
}
let notes: Note[] =[
    {title: "qwe1"},
    {title: "qwe2"}
]


export const load: PageServerLoad = (async ({context}) => {

    let value = await env.KV.get("my");
    return {notes,
    kv: value};
}) satisfies PageServerLoad;


export const actions: Actions = {

    default: async ({request}) =>{
       const d= await request.formData()
       console.log(d.getAll("title"))
       

    }
}