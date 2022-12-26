<script lang="ts">
    import type { LayoutData } from './$types';
    import { navigating } from '$app/stores'
    import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/login" use:enhance>
    <input name="name" type="text">
<button>submit</button>
</form>


