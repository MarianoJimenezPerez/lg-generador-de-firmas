import React from "react";

const Template = ({ data }) => {
  return (
    <table
      style={{
        fontFamily: `${data?.marca?.attributes?.font}`,
        lineHeight: "15px",
        paddingTop: "5px",
        background: "transparent",
      }}
    >
      <tbody>
        <tr style={{ display: "flex" }}>
          <td
            width="90"
            style={{
              borderRight: `1px solid ${data?.marca?.attributes?.color}`,
              paddingRight: "20px",
              alignItems: "flex-start",
            }}
          >
            <table>
              <tbody>
                {data?.imageUrl && (
                  <tr>
                    <td
                      style={{
                        width: "90px",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={`http://localhost:1337${data?.imageUrl}`}
                        alt=""
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </td>
                  </tr>
                )}
                <tr>
                  <td>
                    <img
                      src={data?.marca?.attributes?.img}
                      style={{
                        width: "90px",
                        display: "block",
                        objectFit: "contain",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            width="300"
            style={{
              textAlign: "left",
              padding: "5px 15px",
              display: "block",
            }}
          >
            <table style={{ background: "transparent" }}>
              <tbody>
                <tr>
                  <td>
                    <h1
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        marginBottom: "0px",
                      }}
                    >
                      {data?.nombre} {data?.apellido}
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                        fontStyle: "normal",
                        marginTop: "8px",
                      }}
                    >
                      {data?.area}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "inherit",
                        fontStyle: "normal",
                        marginTop: "8px",
                      }}
                    >
                      {data?.cargo}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <table style={{ background: "transparent" }}>
              <tbody>
                {data?.telefono && (
                  <tr>
                    <td>
                      <a
                        href={`tel:${data?.telefono}`}
                        style={{
                          fontSize: "12px",
                          color: `${data?.marca?.attributes?.color}`,
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src={data?.marca?.attributes?.telephoneImg}
                          alt=""
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "5px",
                          }}
                        />
                        {data?.telefono}
                      </a>
                    </td>
                  </tr>
                )}
                {data?.marca?.attributes?.web && (
                  <tr>
                    <td>
                      {" "}
                      <a
                        style={{
                          fontSize: "12px",
                          textDecoration: "none",
                          color: `${data?.marca?.attributes?.color}`,
                        }}
                        href={data?.marca?.attributes?.web}
                      >
                        <img
                          src={data?.marca?.attributes?.webImg}
                          alt=""
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "5px",
                          }}
                        />
                        {data?.marca?.attributes?.web}
                      </a>
                    </td>
                  </tr>
                )}

                {data?.pais && (
                  <tr>
                    <td>
                      <p
                        style={{
                          fontSize: "12px",
                          color: `${data?.marca?.attributes?.color}`,
                        }}
                      >
                        <img
                          src={data?.marca?.attributes?.markerImg}
                          alt=""
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "5px",
                          }}
                        />
                        {data?.pais}
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div style={{ marginTop: "3px" }}></div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Template;
