import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()

async function main() {
    const RSVP = await db.rSVP.create({
        data: {
            name: 'John Doe',
            email: 'john@doe.com',
            attending: true,
            guests: 3,
            message: 'This is a test message',
        },
    })
    console.log({ RSVP })
}

// Create a new RSVP
export async function createRSVP(data: any) {
    const RSVP = await db.rSVP.create({
        data: {
            name: data.name,
            email: data.email,
            attending: data.attending,
            guests: data.guests,
            message: data.message,
        },
    })
    return RSVP
}

// Get all RSVPs
export async function getRSVPs() {
    const RSVPs = await db.rSVP.findMany()
    return RSVPs
}

// Get a single RSVP
export async function getRSVP(id: number) {
    const RSVP = await db.rSVP.findUnique({
        where: {
            id: id,
        },
    })
    return RSVP
}

// Update an RSVP
export async function updateRSVP(id: number, data: any) {
    const RSVP = await db.rSVP.update({
        where: {
            id: id,
        },
        data: {
            name: data.name,
            email: data.email,
            attending: data.attending,
            guests: data.guests,
            message: data.message,
        },
    })
    return RSVP
}

// Delete an RSVP
export async function deleteRSVP(id: number) {
    const RSVP = await db.rSVP.delete({
        where: {
            id: id,
        },
    })
    return RSVP
}




main().then(async () => {
    await db.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
})