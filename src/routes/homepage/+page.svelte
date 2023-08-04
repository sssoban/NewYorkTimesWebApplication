<script>
    import { onMount } from 'svelte';
    import "../style2.css"
    function navigateToMainPage() {
    window.location.href = '/';
    }
    function navigateToMoviePage() {
    window.location.href = '../moviepage';
    }
</script>

<main>
    <h1>CATEGORIES</h1>
    <div id="nytcontent">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img id="nytlogo" on:mousedown={navigateToMainPage} src="https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg" alt="nytlogo">
    </div>
    <div id="moviecontent">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img id="movielogo" on:mousedown={navigateToMoviePage} src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg" alt="movielogo">
    </div>

</main>