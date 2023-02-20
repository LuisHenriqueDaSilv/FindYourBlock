-- CreateTable
CREATE TABLE "carnial_blocks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "image_name" TEXT NOT NULL,
    "position_lng" TEXT NOT NULL,
    "position_lat" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "carnial_blocks_id_key" ON "carnial_blocks"("id");
