import React from 'react';

const colorArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const CheckBox = () => {
  const [color, setColor] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setColor([...color, target.value]);
    } else {
      setColor(color.filter((cor) => cor !== target.value));
    }
  }

  console.log(color);

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100px',
        margin: '200px',
      }}
    >
      {colorArray.map((c) => (
        <label key={c}>
          <input
            type='checkbox'
            value={c}
            checked={color.includes(c)}
            onChange={handleChange}
          />
          {c}
        </label>
      ))}
    </form>
  );

  // <div style={{ margin: "200px" }}>
  //   <form
  //     style={{ display: "flex", flexDirection: "column", height: "100px" }}
  //   >
  //     <label>
  //       <input
  //         type="checkbox"
  //         value="azul"
  //         checked={color.includes("azul")}
  //         onChange={handleChange}
  //       />
  //       Azul
  //     </label>
  //     <label>
  //       <input
  //         type="checkbox"
  //         value="vermelho"
  //         checked={color.includes("vermelho")}
  //         onChange={handleChange}
  //       />
  //       Vermelho
  //     </label>
  //   </form>
  // </div>
};

export default CheckBox;
