import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler: Handler = async (event, context) => {
    if (event.body) {
        const users = await prisma.benutzer.findMany({
            select: {
                email: true,
                firstname: true,
                lastname: true,
                mobile: true
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(users)
        };
    }

    return {
        statusCode: 500
    };
}


export { handler }