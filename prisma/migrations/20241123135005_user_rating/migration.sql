-- CreateTable
CREATE TABLE `UserRating` (
    `UserRatingID` INTEGER NOT NULL AUTO_INCREMENT,
    `RatedByID` VARCHAR(191) NOT NULL,
    `RatedUserID` VARCHAR(191) NOT NULL,
    `RatingValue` INTEGER NOT NULL,
    `Comment` VARCHAR(191) NULL,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`UserRatingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserRating` ADD CONSTRAINT `UserRating_RatedByID_fkey` FOREIGN KEY (`RatedByID`) REFERENCES `User`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRating` ADD CONSTRAINT `UserRating_RatedUserID_fkey` FOREIGN KEY (`RatedUserID`) REFERENCES `User`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;