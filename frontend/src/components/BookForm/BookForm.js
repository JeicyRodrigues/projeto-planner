import React, { useState, useEffect, forwardRef } from "react";
import styled from "styled-components";

const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;
  background: #FFF8F0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(93, 58, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: 'Special Elite', cursive; 
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #5D3A00;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #B0C4DE;
  font-size: 16px;

  &:focus {
    outline-color: #A0D6D1;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #B0C4DE;
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline-color: #A0D6D1;
  }
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #B0C4DE;
  font-size: 16px;

  &:focus {
    outline-color: #A0D6D1;
  }
`;

const BotaoSalvar = styled.button`
  background-color: #F4C2C2;
  color: #5D3A00;
  padding: 15px 0;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Special Elite', cursive;

  &:active {
    background-color: #A0D6D1;
  }
`;

const BotaoCancelar = styled.button`
  background-color: #B0C4DE;
  color: #5D3A00;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:active {
    background-color: #A0D6D1;
  }
`;

const BookForm = forwardRef(({ onSubmit, livroEditando, cancelarEdicao }, ref) => {
  const [form, setForm] = useState({
    nome: "",
    capaUrl: "",
    dataInicio: "",
    dataTermino: "",
    sinopse: "",
    categoria: "",
    personagens: "",
    opiniao: "",
    classificacao: "3",
    fraseFavorita: "",
  });

  useEffect(() => {
    if (livroEditando) {
      setForm(livroEditando);
    }
  }, [livroEditando]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (livroEditando) {
      onSubmit({ ...form, id: livroEditando.id });
    } else {
      onSubmit(form);
    }

    setForm({
      nome: "",
      capaUrl: "",
      dataInicio: "",
      dataTermino: "",
      sinopse: "",
      categoria: "",
      personagens: "",
      opiniao: "",
      classificacao: "3",
      fraseFavorita: "",
    });
  }

  return (
    <Form ref={ref} onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="nome">Nome do Livro</Label>
        <Input
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="capaUrl">URL da Capa</Label>
        <Input
          id="capaUrl"
          name="capaUrl"
          type="url"
          value={form.capaUrl}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="dataInicio">Data de Início</Label>
        <Input
          id="dataInicio"
          name="dataInicio"
          type="date"
          value={form.dataInicio}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="dataTermino">Data de Término</Label>
        <Input
          id="dataTermino"
          name="dataTermino"
          type="date"
          value={form.dataTermino}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="sinopse">Sinopse</Label>
        <TextArea
          id="sinopse"
          name="sinopse"
          value={form.sinopse}
          onChange={handleChange}
          rows={3}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="categoria">Categoria</Label>
        <Input
          id="categoria"
          name="categoria"
          type="text"
          value={form.categoria}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="personagens">Personagens Principais</Label>
        <Input
          id="personagens"
          name="personagens"
          type="text"
          value={form.personagens}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="opiniao">Opinião</Label>
        <TextArea
          id="opiniao"
          name="opiniao"
          value={form.opiniao}
          onChange={handleChange}
          rows={3}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="fraseFavorita">Frase Favorita</Label>
        <TextArea
          id="fraseFavorita"
          name="fraseFavorita"
          value={form.fraseFavorita}
          onChange={handleChange}
          rows={2}
        />
      </Field>

      <Field>
        <Label htmlFor="classificacao">Classificação</Label>
        <Select
          id="classificacao"
          name="classificacao"
          value={form.classificacao}
          onChange={handleChange}
          required
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n} estrela{n > 1 ? "s" : ""}
            </option>
          ))}
        </Select>
      </Field>

      <BotaoSalvar type="submit">
        {livroEditando ? "Atualizar Livro" : "Salvar Livro"}
      </BotaoSalvar>

      {livroEditando && (
        <BotaoCancelar type="button" onClick={cancelarEdicao}>
          Cancelar Edição
        </BotaoCancelar>
      )}
    </Form>
  );
});

export default BookForm;