-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `Gallery_sectionId_fkey`;

-- AddForeignKey
ALTER TABLE `Gallery` ADD CONSTRAINT `Gallery_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `SectionData`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
