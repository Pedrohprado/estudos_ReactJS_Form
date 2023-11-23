import React from "react";

const TestFormObj = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleChange(event) {
    const { id, value } = event.target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>enviar</button>
      </form>
    </div>
  );
};

export default TestFormObj;
