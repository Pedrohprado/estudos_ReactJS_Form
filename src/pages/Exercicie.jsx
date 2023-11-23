import React from "react";

//NOTES: Criando uma estrutura de arrays com obj
// para facilitar a criação dos campos, utilizando .map()

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "CEP",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const Exercicie = () => {
  //NOTES: Utilizando o array de objs formFields no React.useState
  // para automatizar a criação, dos states iniciais, .reduce() auxilia na criação desses obj
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
  const [res, setResponse] = React.useState("");
  const [loading, setLoading] = React.useState(null);

  function noSub(event) {
    event.preventDefault();
    //NOTES: criação da async function para fazer o fetch(POST) na API com as informações do form
    async function fetchPost() {
      setLoading(true);
      try {
        const data = await fetch(
          "https://ranekapi.origamid.dev/json/api/usuario",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );
        setResponse(data);
        console.log(res);
        setLoading(false);
      } catch (erro) {
        console.log(erro);
      }
    }

    fetchPost();
  }

  //NOTES: a function "acompanha" o preenchimento dos campos do form, e salva essas info no form(useState)
  function handleChange(event) {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  }
  return (
    <div>
      {loading ? <p>Caregando....</p> : null}
      {res && res.ok && <p>Usuário criado</p>}
      <form
        onSubmit={noSub}
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}

        <button>enviar</button>
      </form>
    </div>
  );
};

export default Exercicie;

//NOTES: posso fazer a verificação nos slides da aula 0401
