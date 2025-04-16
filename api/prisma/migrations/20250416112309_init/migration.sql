-- CreateTable
CREATE TABLE `Aluno` (
    `ra` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Aluno_email_key`(`email`),
    PRIMARY KEY (`ra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `alunoRa` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(20) NOT NULL,
    `tipo` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Atividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `alunoRa` VARCHAR(191) NOT NULL,
    `dataInicio` DATETIME(3) NOT NULL,
    `dataEntrega` DATETIME(3) NULL,
    `nota` INTEGER NULL,
    `peso` FLOAT NOT NULL,
    `parcial` FLOAT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_alunoRa_fkey` FOREIGN KEY (`alunoRa`) REFERENCES `Aluno`(`ra`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Atividade` ADD CONSTRAINT `Atividade_alunoRa_fkey` FOREIGN KEY (`alunoRa`) REFERENCES `Aluno`(`ra`) ON DELETE RESTRICT ON UPDATE CASCADE;
