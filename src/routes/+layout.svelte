<script lang="ts">
  import Footer from "$lib/Components/Footer/Footer.svelte";
  import Navbar from "$lib/Components/Navbar/Navbar.svelte";
  import "../app.scss";
</script>

<svelte:head>
  <title>K+S</title>
</svelte:head>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col min-h-screen">
    <!-- Page content here -->
    <Navbar />
    <div class="flex-grow py-4">
      <slot />
    </div>
    <Footer />
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/">Home</a></li>
      <li><a href="/rsvp">RSVP</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </div>
</div>
