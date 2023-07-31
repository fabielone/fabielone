/*
  Warnings:

  - Added the required column `prospectId` to the `Installation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Installation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "appointmentId" TEXT NOT NULL,
    "installerId" TEXT,
    "prospectId" TEXT NOT NULL,
    CONSTRAINT "Installation_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Installation_installerId_fkey" FOREIGN KEY ("installerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Installation_prospectId_fkey" FOREIGN KEY ("prospectId") REFERENCES "Prospect" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Installation" ("address", "appointmentId", "createdAt", "id", "installerId", "updatedAt") SELECT "address", "appointmentId", "createdAt", "id", "installerId", "updatedAt" FROM "Installation";
DROP TABLE "Installation";
ALTER TABLE "new_Installation" RENAME TO "Installation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
