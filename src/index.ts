import 'dotenv/config';
import express from 'express';
import { handleError } from './config/error.handler.js';
import { JogoRepository } from './database/jogo.repository.js';
import { PersonagemRepository } from './database/personagem.repository.js';

const app = express();
app.use(express.json());

const jogoRepository = new JogoRepository();
const personagemRepository = new PersonagemRepository();

app.get("/jogos", async (req, res): Promise<any> => {
    try {
        const result = await jogoRepository.list();
        return res.status(200).send({
            ok: true,
            message: "Jogos listados com sucesso.",
            data: result
        })
    } catch (error) {
        return handleError(error, res);
    }
});

app.post("/jogos", async (req, res): Promise<any> => {
    try {
        const { nome, genero, tamanho, preco, dtLancamento, multiplayer } = req.body;

        if (!nome || !genero || !tamanho || !preco || !dtLancamento) {
            return res.status(400).send({
                ok: false,
                message: "Campos não foram informados"
            });
        }

        const result = await jogoRepository.create({
            nome,
            genero,
            tamanho,
            preco,
            dtLancamento: new Date(dtLancamento)
        });

        return res.status(201).send({
            ok: true,
            message: "Jogo criado com sucesso",
            data: result
        });
    } catch (error) {
        return handleError(error, res);
    }
});

app.put("/jogos/:idJogo", async (req, res): Promise<any> => {
    try {
        const { idJogo } = req.params;
        const { nome, preco } = req.body;

        if (!nome && !preco) {
            return res.status(400).send({
                ok: false,
                message: "Informe pelo menos um campo"
            });
        }

        const result = await jogoRepository.update(idJogo, req.body);
        return res.status(200).send({
            ok: true,
            message: "Jogo atualizado com sucesso",
            data: result
        });
    } catch (error) {
        return handleError(error, res);
    }
});

app.delete("/jogos/:idJogo", async (req, res): Promise<any> => {
    try {
        const { idJogo } = req.params;

        const result = await jogoRepository.delete(idJogo);
        return res.status(200).send({
            ok: true,
            message: "Jogo deletado com sucesso",
            data: result
        });

    } catch (error) {
        return handleError(error, res);
    }
});

app.get("/jogos/:idJogo/personagens", async (req, res): Promise<any> => {
    try {
        const { idJogo } = req.params;

        const result = await personagemRepository.list(idJogo);
        return res.status(200).send({
            ok: true,
            message: "Personagens listados com sucesso",
            data: result
        });
    } catch (error) {
        return handleError(error, res);
    }
});

app.post("/jogos/:idJogo/personagens", async (req, res): Promise<any> => {
    try {
        const { nome, idade, forca, inteligencia, habilidades } = req.body;
        const { idJogo } = req.params;

        if (!nome || !idade || !forca || !inteligencia || !habilidades) {
            return res.status(400).send({
                ok: false,
                message: "Campos não foram informados"
            });
        }

        const result = await personagemRepository.create({
            nome,
            idade,
            inteligencia,
            habilidades,
            forca,
            idJogo
        });

        return res.status(201).send({
            ok: true,
            message: "Personagem criado com sucesso",
            data: result
        });
    } catch (error) {
        return handleError(error, res);
    }
});

app.put("/jogos/:idJogo/personagens/:idPersonagem", async (req, res): Promise<any> => {
    try {
        const { nome, idade } = req.body;
        const { idJogo, idPersonagem } = req.params;

        if (!nome && !idade) {
            return res.status(400).send({
                ok: false,
                message: "Informe pelo menos um campo"
            });
        }

        const result = await personagemRepository.update(
            idPersonagem,
            idJogo,
            req.body
        );

        return res.status(200).send({
            ok: true,
            message: "Personagem atualizado com sucesso",
            data: result
        });

    } catch (error) {
        return handleError(error, res);
    }
});

app.delete("/jogos/:idJogo/personagens/:idPersonagem", async (req, res): Promise<any> => {
  try {
    const { idJogo, idPersonagem } = req.params;

    const result = await personagemRepository.delete(
      idPersonagem,
      idJogo
    );

    return res.status(200).send({
      ok: true,
      message: "Personagem deletado com sucesso",
      data: result
    });

  } catch (error) {
    return handleError(error, res);
  }
});

app.listen(3000, () => {
    console.log("API executando na porta 3000");
})
