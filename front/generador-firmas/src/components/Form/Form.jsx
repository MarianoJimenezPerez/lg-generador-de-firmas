import React, { useRef, useContext, useState } from "react";
import { UserContext } from "../../reducers/userReducer";
import styles from "./Form.module.scss";
import axios from "axios";
import { useEffect } from "react";

const Form = () => {
  const inputValuesRef = useRef({});
  const [marcas, setMarcas] = useState([]);
  const config = {
    headers: {
      Authorization:
        "bearer 445e398bc502b7d7f993b22faf0c81ce704bf88337557aa125ed76fcf29631f4026073c36ba40663079b93e6405d44c53e89e99f2ba0f575b2a38acb9abf4aa4c3632a655dd622fc5e79481382c35af75c5eaa6a4dc35c7973d72771dd60840aceafbea3095e98f23f36999550f95f5384c8b7270a4f270aab82a3c7021159d8",
    },
  };
  const { state, dispatch } = useContext(UserContext);

  const [showInputs, setShowInputs] = useState(false);

  useEffect(() => {
    const getMarcas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/marcas",
          config
        );
        setMarcas(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMarcas();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    inputValuesRef.current[name] = value;
    const newValues = { ...inputValuesRef.current, [name]: value };

    let marcaSeleccionada = null;
    if (name === "marca") {
      setShowInputs(true);
      marcaSeleccionada = marcas.find(
        (marca) => marca.attributes.title === value
      );
    }

    dispatch({
      type: "CHANGE_DATA",
      payload: {
        data: {
          ...newValues,
          marca: marcaSeleccionada ? marcaSeleccionada : state.data.marca,
        },
      },
    });
  };

  return (
    <div className="form">
      <h2>Ingresá tus datos</h2>
      <form>
        <p>
          <select
            name="marca"
            id="marca"
            className="input"
            onChange={handleInputChange}
          >
            <option defaultValue={"Marca"} selected disabled>
              Marca
            </option>
            {marcas &&
              marcas.map((marca) => (
                <option value={marca.attributes.title} key={marca.id}>
                  {marca.attributes.title}
                </option>
              ))}
          </select>
        </p>
        {showInputs && (
          <>
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
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
