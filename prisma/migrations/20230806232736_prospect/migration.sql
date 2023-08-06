/*
  Warnings:

  - You are about to drop the column `crossStreets` on the `Prospect` table. All the data in the column will be lost.
  - You are about to drop the column `houseDescription` on the `Prospect` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Prospect" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT,
    "status" TEXT NOT NULL DEFAULT 'nuevo',
    "callAttempts" INTEGER NOT NULL DEFAULT 0,
    "lastCallDate" DATETIME,
    "callLaterDate" DATETIME,
    "appointmentDate" DATETIME,
    "address" TEXT,
    "indicaciones" TEXT,
    "notas_p" TEXT,
    "salesChannel" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    "assignedToId" TEXT,
    "installedById" TEXT,
    CONSTRAINT "Prospect_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Prospect_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Prospect_installedById_fkey" FOREIGN KEY ("installedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Prospect" ("address", "appointmentDate", "assignedToId", "callAttempts", "callLaterDate", "createdAt", "email", "firstName", "id", "installedById", "lastCallDate", "lastName", "phoneNumber", "salesChannel", "status", "updatedAt", "userId") SELECT "address", "appointmentDate", "assignedToId", "callAttempts", "callLaterDate", "createdAt", "email", "firstName", "id", "installedById", "lastCallDate", "lastName", "phoneNumber", "salesChannel", "status", "updatedAt", "userId" FROM "Prospect";
DROP TABLE "Prospect";
ALTER TABLE "new_Prospect" RENAME TO "Prospect";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
