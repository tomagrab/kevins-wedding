import { db } from '$lib/Database/db';
import { redirect } from '@sveltejs/kit';

export const load = (async () => {
    const response = await db.rSVP.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            attending: true,
            guests: true,
            message: true,
        },
    });
    
    return {
        body: response,
    }
})

export const actions = {
    updateRSVP: async ({ request }) => {
        const formData = await request.formData();

        const id = Number(formData.get('id'));
        const name = String(formData.get('name'));
        const attending = Boolean(formData.get('attending'))
        const guests = Number(formData.get('guests'));
        const message = String(formData.get('message'));

        await db.rSVP.update({
            where: {
                id,
            },
            data: {
                name,
                attending,
                guests,
                message,
            },
        });

        throw redirect(303, '/attending');
    },
    deleteRSVP: async ({ request }) => {
        const formData = await request.formData();

        const id = Number(formData.get('id'));

        await db.rSVP.delete({
            where: {
                id,
            },
        });

        throw redirect(303, '/attending');
    }
    
}