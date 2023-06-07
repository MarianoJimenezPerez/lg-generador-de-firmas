import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../reducers/userReducer";
import useFetch from "../../hooks/useFetch";
import styles from "./Form.module.scss";
import { makeRequest } from "../../utils/makeRequest";

const Form = () => {
  const [inputValues, setInputValues] = useState({});
  const [showInputs, setShowInputs] = useState(false);
  const [positions, setPositions] = useState([]);
  const [fileInputDisabled, setFileInputDisabled] = useState(true);
  const [fileUpload, setFileUpload] = useState(null);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const { state, dispatch } = useContext(UserContext);

  const { data, error, loading } = useFetch("/marcas");

  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useFetch("/areas?populate=*");

  useEffect(() => {
    dispatch({
      type: "CHANGE_DATA",
      payload: {
        data: {
          ...inputValues,
          marca: marcaSeleccionada ? marcaSeleccionada : state.data.marca,
        },
      },
    });
  }, [inputValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    if (name === "marca") {
      setShowInputs(true);
      setMarcaSeleccionada(
        data.find((marca) => marca.attributes.title === value)
      );
    }
    if (name === "area") {
      const result = data2.find((el) => el.attributes.title === e.target.value);
      setPositions(result.attributes.positions.data);
      setShowInputs(true);
    }

    if (name === "image") {
      setFileInputDisabled(!e.target.checked);
    }
    if (name === "archivo") {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("files", file);
        makeRequest
          .post("/upload", formData)
          .then(async (response) => {
            if (response.status === 200) {
              const data = {
                name: response.data[0].name,
                url: response.data[0].url,
              };
              const imageUrl = data.url;
              setInputValues((prevInputValues) => ({
                ...prevInputValues,
                imageUrl: imageUrl,
              }));
              setFileUpload(response.data[0]);
              const res = await makeRequest.post("/employeds", { data });
              if (res.status === 500) {
                throw new Error("Internal Server Error");
              }
            } else {
              console.error("File upload failed:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
          });
      }
    }
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
                {data2 &&
                  data2.map((area2) => (
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
            <div className={`${styles.input_container} input`}>
              <p>
                <input
                  type="file"
                  id="archivo"
                  name="archivo"
                  style={{ display: "none" }}
                  disabled={fileInputDisabled}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <label
                  htmlFor="archivo"
                  style={
                    fileInputDisabled
                      ? {
                          color: "rgb(170, 170, 170)",
                          cursor: "no-drop",
                          padding: "0",
                        }
                      : { cursor: "pointer", padding: "0" }
                  }
                >
                  {fileUpload
                    ? fileUpload.name
                    : fileInputDisabled
                    ? "¿Deseas foto en tu firma?"
                    : "Selecciona tu foto de linkedin"}
                </label>
              </p>
              <p>
                <label htmlFor="image">
                  <input
                    type="checkbox"
                    name="image"
                    id="image"
                    onChange={handleInputChange}
                  />
                  <span></span>
                </label>
              </p>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
