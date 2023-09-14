import type { User, Prospect } from "@prisma/client";

import { prisma } from "~/db.server";

// get prospect by id
export function getProspect({ id }: Pick<Prospect, "id">) {
  return prisma.prospect.findFirst({
    where: { id },
  });
}
// get all prospects that have not been scheduled
export function getProspectListItems() {
  return prisma.prospect.findMany({
    where: {
      OR: [{ status: "nuevo" }, { status: "llamada_agendada" }],
      // status: "nuevo"|| "llamada_agendada", // Exclude prospects with status "not_interested"
      // appointment: null, // Exclude prospects with an appointment
      // installation: { every:{} }, // Exclude prospects with an installation
    },
    //select: { id: true, appointment: false },
    orderBy: { updatedAt: "desc" },
  });
}

// get all prospects
export function getAllProspects() {
  return prisma.prospect.findMany({
    orderBy: { updatedAt: "desc" },
  });
}

// create prospect
export function createProspect({
  firstName,
  lastName,
  phoneNumber,
  userId,
  lada,
}: Pick<Prospect, "firstName" | "lastName" | "phoneNumber" | "lada"> & {
  userId: User["id"];
}) {
  return prisma.prospect.create({
    data: {
      firstName,
      lastName,
      lada,
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

export function updateProspect({
  id,
  firstName,
  lastName,
  lada,
  phoneNumber,
  status,
  callLaterDate,
  appointmentDate,
  address,
  indicaciones,
  notas_p,
}: Pick<
  Prospect,
  | "id"
  | "firstName"
  | "lastName"
  | "lada"
  | "phoneNumber"
  | "status"
  | "callLaterDate"
  | "appointmentDate"
  | "address"
  | "indicaciones"
  | "notas_p"
>) {
  return prisma.prospect.update({
    where: { id },
    data: {
      firstName,
      lastName,
      lada,
      phoneNumber,
      status,
      callLaterDate,
      appointmentDate,
      address,
      indicaciones,
      notas_p,
    },
  });
}

// get number of prospects that are nuevo or llamada_agendada
export function getProspectCount() {
  return prisma.prospect.count({
    where: {
      OR: [{ status: "nuevo" }, { status: "llamada_agendada" }],
    },
  });
}

//increment prospect call attemps and last call date
export function incrementProspectCallCount({ id }: Pick<Prospect, "id">) {
  return prisma.prospect.update({
    where: { id },
    data: {
      callAttempts: { increment: 1 },
      lastCallDate: new Date(),
    },
  });
}
