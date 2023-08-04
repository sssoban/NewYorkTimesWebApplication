<script>
    import "../routes/style.css"
    import { onMount } from 'svelte';
    export let data;
    const { news } = data;
    function navigateToMainPage() {
    window.location.href = '../homepage';
  }
  </script>

<main>
    <h1>The New York Times</h1>
      {#each news as newx}
      <div id="content">
        {#each newx.multimedia as media}
          {#if media.format === "threeByTwoSmallAt2X"}
          <a href="{newx.url}" target="_blank"> <img src="{media.url}" alt="{media.caption}" />
          </a>
          <h2>{newx.title}</h2>
          <p id = "abstract">{newx.abstract}</p>
          <p id = "credits">{newx.byline}</p>
          {/if}
        {/each}
      </div>
      {/each}

</main>
<button id="back-to-main-button" on:click={navigateToMainPage}>Home Page</button>

  