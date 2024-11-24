import { Elysia, t } from "elysia";
import { prisma } from "../prisma"; // Prisma client

export const personalController = new Elysia({ prefix: "/personal" })

// Get personal type for a user
.get("/:userID", async ({ params, error }) => {
    const { userID } = params;

    // Check if the user exists
    const user = await prisma.user.findUnique({
        where: { UserID: userID },
    });

    if (!user) {
        return error(404, "User not found");
    }

    // Get all personal information for the user
    const personal = await prisma.userPersonal.findMany({
        where: { UserID: userID },
    });

    return personal;
}, {
    params: t.Object({
        userID: t.String(),
    }),
})

// Add personal information for a user
.post("/", async ({ body, error }) => {
    const { userID, personalID } = body;

    // Check if the user exists
    const user = await prisma.user.findUnique({
        where: { UserID: userID },
    });

    if (!user) {
        return error(404, "User not found");
    }

    // Create the new personal information
    const newPersonal = await prisma.userPersonal.create({
        data: {
            UserID: userID,
            PersonalID: personalID,
        },
    });

    return newPersonal;
}, {
    body: t.Object({
        userID: t.String(),
        personalID: t.Number(),
    }),
})