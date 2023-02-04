import { Handler } from "@netlify/functions";
import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

interface LoginEntry {
  email: string;
  password: string;
}

const handler: Handler = async (event, context) => {
  if (event.body) {
    const loginData = JSON.parse(event.body) as LoginEntry;

    try {
      const user = await prisma.benutzer.findUniqueOrThrow({
        where: {
          email: loginData.email,
        },
      });

      const inputHash = crypto
        .pbkdf2Sync(loginData.password, user.salt, 1000, 64, "sha512")
        .toString("hex");
      if (inputHash !== user.password) {
        return {
          statusCode: 401,
          body: "Benutzername oder Passwort falsch",
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(true),
        };
      }
    } catch (error) {
      return {
        statusCode: 401,
        body: "Benutzername oder Passwort falsch",
      };
    }
  }

  return {
    statusCode: 500,
  };
};

export { handler };
