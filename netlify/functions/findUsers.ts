import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const users = await prisma.benutzer.findMany({
    select: {
      email: true,
      firstname: true,
      lastname: true,
      mobile: true,
    },
  });

  if (!users) return { statusCode: 404, body: "No users found" };

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};

export { handler };
