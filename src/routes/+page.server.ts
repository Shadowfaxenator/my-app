import type { PageServerLoad , Actions} from './$types';

type Note = {
    title: string
}
let notes: Note[] =[
    {title: "qwe1"},
    {title: "qwe2"}
]


export const load: PageServerLoad = (async () => {
    return {notes};
}) satisfies PageServerLoad;


export const actions: Actions = {

    default: async ({request}) =>{
       const d= await request.formData()
       console.log(d.getAll("title"))
       

    }
}