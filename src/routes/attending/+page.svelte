<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  // Update RSVP
</script>

<!-- Attending -->

<div class="grid grid-cols-1 gap-4 justify-items-center">
  <div class="card w-4/5 bg-base-100 shadow-xl">
    <div class="card-body p-0">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
        Attending the Wedding
      </h1>

      {#each data.body as attending}
        {#if attending.name}
          <div class="card w-full bg-primary text-primary-content">
            <div class="card-body relative">
              <!-- Delete Button -->
              <form class="form" method="POST" action="?/updateRSVP">
                <input type="hidden" name="id" value={attending.id} />

                <button
                  class="absolute top-4 right-4"
                  type="submit"
                  formaction="?/deleteRSVP">❌</button
                >

                <div class="form-control grid grid-cols-2">
                  <label class="label" for="name">Name:</label>
                  <p contenteditable="true">
                    {attending.name}
                  </p>
                </div>

                <div class=" form-control grid grid-cols-2">
                  <label class="label" for="guests"> Guests: </label>
                  <input
                    type="number"
                    value={attending.guests}
                    name="guests"
                    class="input justify-self-start"
                  />
                </div>

                <div class=" form-control grid grid-cols-2">
                  <label class="label" for="message">Message:</label>
                  <input
                    type="text"
                    value={attending.message}
                    name="message"
                    class="input input-ghost"
                  />
                </div>
              </form>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
