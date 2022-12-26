<script lang="ts">
    import type { PageData } from './$types';
    import {navigating} from '$app/stores'

    export let data: PageData;
</script>

<ul>
    {#each data.res1.results as person, i }
    <li><a href={`/items/${i+1}`}>{person.name}</a></li>

    {/each}
</ul>



{#if $navigating}
<div>loading...</div>
{:else}
<slot></slot>
{/if}





