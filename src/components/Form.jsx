import React from "react";

function Form() {
  return (
    <div className="formcontainer">
      <h2>Dejanos tus datos</h2>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Nombre completo" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="number" placeholder="Número de teléfono" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
          <input
            type="checkbox"
            id="billboard"
            name="source"
            value="billboard"
          />
          <div>
            <button type="submit">Quiero empezar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
