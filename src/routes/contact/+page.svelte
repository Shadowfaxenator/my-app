<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from '$app/forms';
   
    export let data: PageData;
   
</script>

<a href="/">home</a>
<a href="/about">about</a>



{data.res1.name}

<form method="POST" action="?/login" use:enhance>
    <input name="name" type="text">
<button>submit</button>
</form>

