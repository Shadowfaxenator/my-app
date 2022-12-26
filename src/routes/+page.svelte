<script lang="ts">
	import type { PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { ItemsStore } from '../lib/store';
	export let data: PageData;
	const submitForm: SubmitFunction = ({ data: d, }) => {
    $ItemsStore.map(a=>{
      d.append("title",a.title)
    })
    
	
	};

	ItemsStore.subscribe((data) => {
		console.log(data);
	});
</script>

<div class="flex items-center flex-col gap-3 h-screen">
	<div class="flex flex-col">
		<ul>
			{#each data.notes as note}
				<li>
					{note.title}
				</li>
        {data.kv}
			{/each}
		</ul>
	</div>
	<div class="m-auto flex flex-col justify-center">
		<form class="flex flex-col gap-2" method="POST" use:enhance={submitForm}>
			<input name="title" type="text" class="input input-bordered" />
			<button class="btn btn-primary ">Button</button>
		</form>
	</div>
</div>
