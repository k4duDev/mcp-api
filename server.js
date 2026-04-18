import express from "express";
import cors from "cors";
import supabase from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

/* TESTE */
app.get("/", (req, res) => {
    res.send("API online🚀");
});

/* CRIAR AGENDAMENTO */
app.post("/agendar", async (req, res) => {
    const { nome, telefone, servico, data, hora } = req.body;

    const { error } = await supabase
        .from("agendamentos")
        .insert([{ nome, telefone, servico, data, hora }]);

    if (error) {
        return res.status(500).json({ erro: error.message })
    }

    res.json({ sucesso: true });
});

/* LISTAR */
app.get("/agendamentos", async (req, res) => {
    const { data, error } = await supabase
        .from("agendamentos")
        .select("*")
        .order("data", { ascending: true });

    if (error) {
        return res.status(500).json({ erro: error.message })
    }

    res.json({ data });
})

/* CANCELAR AGENDAMENTO */
app.delete("/cancelar", async (req, res) => {
  const { telefone, data, hora } = req.body;

  const { error } = await supabase
    .from("agendamentos")
    .delete()
    .eq("telefone", telefone)
    .eq("data", data)
    .eq("hora", hora);

  if (error) {
    return res.status(500).json({ erro: error.message });
  }

  res.json({ sucesso: true });
});

/* START */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta" + PORT);
});