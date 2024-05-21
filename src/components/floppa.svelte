<script>
  export let src, onclick;
  const onError = () => {
    const image = document.querySelector("img");
    console.log("ORIGINAL GIF IS BROKEN - BACKUP GIF");
    console.log("in settings you can change the gif link to a new one");
    image.src =
      "https://preview.redd.it/686zzvj6y5x91.gif?width=498&auto=webp&s=b9b90bf0c6da942b1125139efb8770e9c09dc74b";
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
  class="w-full h-full"
  {src}
  alt="floppa"
  on:error={onError}
  on:click={onclick}
/>
