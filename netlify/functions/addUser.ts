import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface UserEntry {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    mobile: string;
}

const handler: Handler = async (event, context) => {
    if (event.body) {
        const newUser = JSON.parse(event.body) as UserEntry;
        await prisma.user.create({
            data: {
                id: BigInt(newUser.id),
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                password: newUser.password,
                mobile: newUser.mobile
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(newUser)
        };
    }

    return {
        statusCode: 500
    };
}


export { handler }