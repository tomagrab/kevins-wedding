<script lang="ts">
</script>

<!-- RSVP Page -->

<div class="card w-4/5 bg-base-100 shadow-xl mx-auto p-4">
  <div class="card-body p-0">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">RSVP</h1>

    <form class="rsvp-form form flex flex-col items-center gap-4 shadow-xl">
      <div class=" form-control flex flex-col items-center">
        <label class=" label label-text" for="name">Name</label>
        <input
          class="input input-primary input-bordered"
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
        />
      </div>

      <div class=" form-control flex flex-col items-center">
        <label for="email">Email</label>
        <input
          class="input input-primary input-bordered"
          type="text"
          id="email"
          name="email"
          placeholder="Your email.."
        />
      </div>

      <div class="form-control flex flex-col items-center">
        <label for="guests">Guests</label>
        <input
          class="input input-primary input-bordered"
          type="number"
          id="guests"
          name="guests"
          placeholder="Number of guests.."
        />
      </div>

      <div class="form-control flex flex-col items-center">
        <label for="message">Message</label>
        <textarea
          class="input input-primary input-bordered"
          id="message"
          name="message"
          placeholder="Write something.."
          style="height:200px"
        />
      </div>

      <button class="btn btn-primary" type="submit">RSVP</button>
    </form>
  </div>
</div>
