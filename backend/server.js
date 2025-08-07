import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
