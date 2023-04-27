import React from "react";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className="form">
      <h2>Ingresá tus datos</h2>
      <form>
        <p>
          <input
            className="input"
            type="text"
            id="nombre"
            name="usernombre"
            placeholder="Nombre"
          />{" "}
        </p>
        <p>
          <input
          className="input"
            type="text"
            id="apellido"
            name="userapellido"
            placeholder="Apellido"
          />
        </p>
        <p>
          <select name="area" id="area" className="input">
            <option selected disabled>
              Área
            </option>
            <option value="marketing">Marketing</option>
            <option value="planificacion-estrategica">
              Planificación estratégica
            </option>
          </select>
        </p>
        <p>
          <select name="cargo" id="cargo" className="input">
            <option selected disabled>
              Cargo
            </option>
            <option value="uno">Uno</option>
            <option value="dos">Dos</option>
          </select>
        </p>
        <p>
          <input
          className="input"
            type="number"
            id="telefono"
            name="usertelefono"
            placeholder="Teléfono"
          />
        </p>
        <p>
          <input type="text" placeholder="País o región" className="input" />
        </p>
        <p>
          <select name="marca" id="marca" className="input">
            <option selected disabled>
              Marca
            </option>
            <option value="redragon">Redragon</option>
            <option value="haxly">Haxly</option>
          </select>
        </p>
      </form>
    </div>
  );
};

export default Form;
