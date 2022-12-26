import type { PageServerLoad , Actions} from './$types';

type Note = {
    title: string
}
let notes: Note[] =[
    {title: "qwe1"},
    {title: "qwe2"}
]


export const load: PageServerLoad = (async () => {

    let value = await KV.get("to-do:123");
    return {notes,
    kv: value};
}) satisfies PageServerLoad;


export const actions: Actions = {

    default: async ({request}) =>{
       const d= await request.formData()
       console.log(d.getAll("title"))
       

    }
}