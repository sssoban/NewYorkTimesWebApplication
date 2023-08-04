<script>
    import "../moviepage/style3.css"
    import { onMount } from 'svelte';
    export let data;
    const { movies } = data;
    function navigateToMainPage() {
    window.location.href = '../homepage';
  }
  </script>

<main>
    <h1>MOVIES</h1>
      {#each movies as moviesx}
      <div id="content">
        <a href="{moviesx.link.url}"> <img src="{moviesx.multimedia.src}" alt="" /></a>
        <h2>{moviesx.display_title}</h2>
        <p>{moviesx.summary_short}</p>
        <p id="tag">-by {moviesx.byline}</p>
      </div>
      {/each}

</main>
<button id="back-to-main-button" on:click={navigateToMainPage}>Home Page</button>

  