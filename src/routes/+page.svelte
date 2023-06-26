<script lang="ts">
  import {i, language, languages, switchLanguage} from '@inlang/sdk-js'
	import {Button} from 'components/ui/button';
</script>

{#each languages as lang}
 <Button variant='secondary' class="mx-2 border border-gray-300 shadow-md" on:click={()=>switchLanguage(lang)}>{lang}</Button>
 <!-- <button on:click={()=>switchLanguage(lang)}>{lang}</button>   -->
{/each}


<h1>{i('welcome')}</h1>
<p>{i("localization")}</p>