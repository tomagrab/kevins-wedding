<!--
The following code is a Svelte component that displays an RSVP form for a wedding event. The component imports a function called "enhance" from "$app/forms" to handle form submission. The component receives a "form" prop that contains the form data and errors.

The form contains the following fields:
- Name (text input)
- Email (text input)
- Attending (select input with "Yes" and "No" options)
- Guests (number input)
- Message (textarea input)

If there are errors in any of the fields, they will be displayed below the corresponding input field.

The form is submitted via POST method to the URL "?/createRSVP" when the "RSVP" button is clicked.
-->
<script lang="ts">
  import { enhance } from "$app/forms";

  export let form;
</script>

<!-- RSVP Page -->

<div class="card w-4/5 bg-base-100 shadow-xl mx-auto p-4">
  <div class="card-body p-4 pt-0">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">RSVP</h1>

    <form
      class="rsvp-form form flex flex-col items-center gap-4"
      method="POST"
      action="?/makeRSVP"
      use:enhance
    >
      <div class=" form-control flex flex-col items-center">
        <label class=" label label-text mb-2" for="name">Name</label>
        <input
          class="input input-primary input-bordered"
          type="text"
          id="name"
          name="name"
          value={form?.data?.name.toString() ?? ""}
          placeholder="Your name.."
        />

        {#if form?.errors?.name}
          <p class="text-red-500">{form.errors.name}</p>
        {/if}
      </div>

      <div class=" form-control flex flex-col items-center">
        <label class=" label label-text mb-2" for="email">Email</label>
        <input
          class="input input-primary input-bordered"
          type="text"
          id="email"
          name="email"
          value={form?.data?.email.toString() ?? ""}
          placeholder="Your email.."
        />

        {#if form?.errors?.email}
          <p class="text-red-500">{form.errors.email}</p>
        {/if}
      </div>

      <div class="form-control flex flex-col items-center">
        <label class=" label label-text mb-2" for="guests">Attending</label>
        <select
          class="input input-primary input-bordered"
          id="attending"
          name="attending"
          value={form?.data?.attending.toString() ?? "yes"}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="form-control flex flex-col items-center">
        <label class=" label label-text mb-2" for="guests">Guests</label>
        <input
          class="input input-primary input-bordered"
          type="number"
          id="guests"
          name="guests"
          value={form?.data?.guests.toString() ?? ""}
          placeholder="Number of guests.."
        />

        {#if form?.errors?.guests}
          <p class="text-red-500">{form.errors.guests}</p>
        {/if}
      </div>

      <div class="form-control flex flex-col items-center">
        <label class=" label label-text mb-2" for="message">Message</label>
        <textarea
          class="input input-primary input-bordered"
          id="message"
          name="message"
          value={form?.data?.message.toString() ?? ""}
          placeholder="Write something.."
          style="height:200px"
        />

        {#if form?.errors?.message}
          <p class="text-red-500">{form.errors.message}</p>
        {/if}
      </div>

      <button class="btn btn-primary" type="submit">RSVP</button>
    </form>
  </div>
</div>
