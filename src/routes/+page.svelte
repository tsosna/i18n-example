<script lang="ts">
	import { i, languages, switchLanguage } from '@inlang/sdk-js'
	import { Button } from 'components/ui/button'
  import { Mail } from 'lucide-svelte'
</script>

{#each languages as lang}
	<Button
		variant="secondary"
		class="mx-2 border border-gray-300 shadow-md text-xl gap-2"
		on:click={() => switchLanguage(lang)}
		><Mail class='p-0.5'/>{lang}</Button
	>
	<!-- <button on:click={()=>switchLanguage(lang)}>{lang}</button>   -->
{/each}

<h1>{i('welcome')}</h1>
<p>{i('localization')}</p>
