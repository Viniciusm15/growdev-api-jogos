-- CreateTable
CREATE TABLE "jogo" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "genero" VARCHAR(20) NOT NULL,
    "preco" DECIMAL(65,30) NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "dt_lancamento" DATE NOT NULL,
    "multiplayer" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "jogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personagem" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "idade" SMALLINT NOT NULL,
    "forca" SMALLINT NOT NULL,
    "inteligencia" SMALLINT NOT NULL,
    "habilidades" TEXT NOT NULL,
    "id_jogo" UUID NOT NULL,

    CONSTRAINT "personagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personagem" ADD CONSTRAINT "personagem_id_jogo_fkey" FOREIGN KEY ("id_jogo") REFERENCES "jogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
