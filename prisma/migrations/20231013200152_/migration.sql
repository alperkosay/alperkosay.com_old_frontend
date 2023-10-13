/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Post`;

-- CreateTable
CREATE TABLE `SectionData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `section` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `content` MEDIUMTEXT NULL,
    `firstLinkHref` VARCHAR(191) NULL,
    `firstLinkText` VARCHAR(191) NULL,
    `secondLinkHref` VARCHAR(191) NULL,
    `secondLinkText` VARCHAR(191) NULL,

    UNIQUE INDEX `SectionData_section_key`(`section`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sectionId` INTEGER NOT NULL,
    `linkHref` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Gallery` ADD CONSTRAINT `Gallery_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `SectionData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
