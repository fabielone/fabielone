import type { User, Prospect } from "@prisma/client";

import { prisma } from "~/db.server";

// get prospect by id 
export function getProspect({
  id,
}: Pick<Prospect, "id"> 
) {
  return prisma.prospect.findFirst({
    select: { id: true,},
    where: { id },
  });
}
// get all prospects that have not been scheduled
export function getProspectListItems() {
  return prisma.prospect.findMany({
    where: {
      status: { not: 'not_interested' }, // Exclude prospects with status "not_interested"
      appointment: null, // Exclude prospects with an appointment
      installation: { every:{} }, // Exclude prospects with an installation
    },
    //select: { id: true, appointment: false },
    orderBy: { updatedAt: 'desc' },
  });
}

// create prospect 
export function createProspect({
  firstName,
  lastName,
  phoneNumber,
  userId,
}: Pick<Prospect, "firstName" | "lastName" |  "phoneNumber" > & {
  userId: User["id"];
}) {
  return prisma.prospect.create({
    data: {
      firstName,
      lastName,
      phoneNumber,
      
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}


// delete prospect

// get all prospects that belong to a user

// update prospect 

