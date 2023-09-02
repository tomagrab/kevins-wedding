import { createRSVP, db } from '$lib/Database/db';
import { fail, redirect } from '@sveltejs/kit';

// Form actions
export const actions = {
    makeRSVP: async ({ request }) => {
        // Get form data
        const formData = await request.formData();

        // Get input values
        const name = String(formData.get('name'));
        const email = String(formData.get('email'));
        const attending = Boolean(formData.get('attending'));
        const guests = Number(formData.get('guests'));
        const message = String(formData.get('message'));

        // Gather errors
        const errors: Record<string, unknown> = {};

        if (!name || typeof name !== 'string') {
            errors.name = 'Name is required.';
        }

        if (!email || typeof email !== 'string') {
            errors.email = 'Email is required.';
        }

        if (!attending || typeof attending !== 'boolean') {
            errors.attending = 'Please select if you are attending.';
        }

        if (!guests || typeof guests !== 'number') {
            errors.guests = 'Please select how many guests you are bringing.';
        }

        if (!message || typeof message !== 'string') {
            errors.message = 'Please enter a message.';
        }

        if (Object.keys(errors).length > 0) {
            const data = {
                data: Object.fromEntries(formData),
                errors,
            }
            return fail(400, data);
        }


        createRSVP({
            name,
            email,
            attending,
            guests,
            message,
        });

        throw redirect(303, './attending');

}};