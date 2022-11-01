# Social media


```
CREATE TABLE `social`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `coverPic` VARCHAR(255) NULL,
  `profilePic` VARCHAR(255) NULL,
  `city` VARCHAR(45) NULL,
  `website` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

```

```
CREATE TABLE `social`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(255) NULL,
  `img` VARCHAR(255) NULL,
  `userId` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `userId_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `userId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

```

```
ALTER TABLE `social`.`posts` 
DROP FOREIGN KEY `userId`;
ALTER TABLE `social`.`posts` 
ADD COLUMN `createdAt` DATETIME NULL AFTER `userId`,
CHANGE COLUMN `userId` `userId` INT NOT NULL ;
ALTER TABLE `social`.`posts` 
ADD CONSTRAINT `userId`
  FOREIGN KEY (`userId`)
  REFERENCES `social`.`users` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

```


```
CREATE TABLE `social`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `desc` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NULL,
  `userId` INT NOT NULL,
  `postId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `commentUserId_idx` (`userId` ASC) VISIBLE,
  INDEX `postId_idx` (`postId` ASC) VISIBLE,
  CONSTRAINT `commentUserId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `postId`
    FOREIGN KEY (`postId`)
    REFERENCES `social`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
```

```
CREATE TABLE `social`.`stories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `img` VARCHAR(255) NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `storiesUserId_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `storiesUserId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
```

```
CREATE TABLE `social`.`relationships` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `followerUserId` INT NOT NULL,
  `followedUserId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `followerUser_idx` (`followerUserId` ASC) VISIBLE,
  INDEX `followedUser_idx` (`followedUserId` ASC) VISIBLE,
  CONSTRAINT `followerUser`
    FOREIGN KEY (`followerUserId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `followedUser`
    FOREIGN KEY (`followedUserId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

```

```
CREATE TABLE `social`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `postId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `likeUserId_idx` (`userId` ASC) VISIBLE,
  INDEX `likePostId_idx` (`postId` ASC) VISIBLE,
  CONSTRAINT `likeUserId`
    FOREIGN KEY (`userId`)
    REFERENCES `social`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `likePostId`
    FOREIGN KEY (`postId`)
    REFERENCES `social`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

```