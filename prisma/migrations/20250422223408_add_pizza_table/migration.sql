-- CreateTable
CREATE TABLE "Pizza" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "ingredients" TEXT[],
    "available" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("id")
);
