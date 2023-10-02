<script>
    export let src
    export let onclick
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img class="w-full h-full" {src} alt="floppa" on:click="{onclick}"/>