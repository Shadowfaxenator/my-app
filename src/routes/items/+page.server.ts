import type { PageServerLoad, Actions } from './$types';

import { redirect } from '@sveltejs/kit';

export const load = (async ({fetch,url}) => {
    //throw redirect(307,"/items/1")
    
}) satisfies PageLoad;


export const actions: Actions = {
    login: async (event) => {
     // console.log(event)
      // TODO log the user in
    }
  };