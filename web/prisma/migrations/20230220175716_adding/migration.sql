-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carnial_blocks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "position_lng" TEXT NOT NULL,
    "position_lat" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_carnial_blocks" ("description", "id", "image_name", "name", "position_lat", "position_lng", "state") SELECT "description", "id", "image_name", "name", "position_lat", "position_lng", "state" FROM "carnial_blocks";
DROP TABLE "carnial_blocks";
ALTER TABLE "new_carnial_blocks" RENAME TO "carnial_blocks";
CREATE UNIQUE INDEX "carnial_blocks_id_key" ON "carnial_blocks"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
