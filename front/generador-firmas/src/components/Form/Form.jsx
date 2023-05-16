import React, { useRef, useContext, useState } from "react";
import { UserContext } from "../../reducers/userReducer";
import useFetch from "../../hooks/useFetch";
import styles from "./Form.module.scss";

const Form = () => {
  const inputValuesRef = useRef({});
  const [showInputs, setShowInputs] = useState(false);
  const [positions, setPositions] = useState([]);

  const { state, dispatch } = useContext(UserContext);

  const { data, error, loading } = useFetch("/marcas");

  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useFetch("/areas?populate=*");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    inputValuesRef.current[name] = value;
    const newValues = { ...inputValuesRef.current, [name]: value };

    let marcaSeleccionada = null;
    if (name === "marca") {
      setShowInputs(true);
      marcaSeleccionada = data.find(
        (marca) => marca.attributes.title === value
      );
    }
    if (name === "area") {
      const result = data2.find((el) => el.attributes.title === e.target.value);
      setPositions(result.attributes.positions.data);
      setShowInputs(true);
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
            {data &&
              data.map((marca) => (
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
                {data2.map((area2) => (
                  <option value={area2.attributes.title} key={area2.id}>
                    {area2.attributes.title}
                  </option>
                ))}
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
                {positions &&
                  positions.map((position) => {
                    return (
                      <option
                        value={position.attributes.title}
                        key={position.id}
                      >
                        {position.attributes.title}
                      </option>
                    );
                  })}
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
