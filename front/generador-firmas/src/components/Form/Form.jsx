import React, { useRef, useContext } from "react";
import { UserContext } from "../../reducers/userReducer";
import styles from "./Form.module.scss";

const Form = () => {
  const inputValuesRef = useRef({});

  const { state, dispatch } = useContext(UserContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    inputValuesRef.current[name] = value;
    const newValues = { ...inputValuesRef.current, [name]: value };

    dispatch({
      type: "CHANGE_DATA",
      payload: {
        data: newValues,
      },
    });
  };

  return (
    <div className="form">
      <h2>Ingresá tus datos</h2>
      <form>
        <p>
          <input
            className="input"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            onChange={handleInputChange}
          />{" "}
        </p>
        <p>
          <input
            className="input"
            type="text"
            id="apellido"
            name="apellido"
            placeholder="Apellido"
            onChange={handleInputChange}
          />
        </p>
        <p>
          <select
            name="area"
            id="area"
            className="input"
            onChange={handleInputChange}
          >
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
          <select
            name="cargo"
            id="cargo"
            className="input"
            onChange={handleInputChange}
          >
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
            name="telefono"
            placeholder="Teléfono"
            onChange={handleInputChange}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="País o región"
            name="pais"
            className="input"
            onChange={handleInputChange}
          />
        </p>
        <p>
          <select
            name="marca"
            id="marca"
            className="input"
            onChange={handleInputChange}
          >
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
