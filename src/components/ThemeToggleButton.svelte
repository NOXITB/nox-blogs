<script>
  let isDarkTheme = false;

  function toggleTheme() {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }
</script>

<button class="theme-toggle-button" on:click={toggleTheme}>
  {isDarkTheme ? "Light Theme" : "Dark Theme"}
</button>

<style>
  .theme-toggle-button {
    background-color: var(--black);
    color: var(--white);
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
  }
</style>
