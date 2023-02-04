import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'

const prisma = new PrismaClient();

const salt = crypto.randomBytes(16).toString('hex');

interface UserEntry {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    mobile: string;
}

const handler: Handler = async (event, context) => {
    if (event.body) {
        const newUser = JSON.parse(event.body) as UserEntry;
        await prisma.benutzer.create({
            data: {
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                password: crypto.pbkdf2Sync(newUser.password, salt, 1000, 64, 'sha512').toString('hex'),
                salt: salt,
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