import React from "react";

const Template1 = ({ data }) => {
  return (
    <table
      cellpadding="0"
      cellspacing="0"
      style={{
        verticalAlign: "-webkit-baseline-middle",
        fontSize: "large",
        fontFamily: `${data?.marca?.attributes?.font}`,
      }}
    >
      <tbody>
        <tr>
          <td style={{ verticalAlign: "middle" }}>
            <table
              cellpadding="0"
              cellspacing="0"
              style={{
                verticalAlign: "-webkit-baseline-middle",
                fontSize: "large",
                fontFamily: `${data?.marca?.attributes?.font}`,
              }}
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <h2
                      color={data?.marca?.attributes?.color}
                      style={{
                        margin: "0px",
                        fontSize: "20px",
                        color: "inherit",
                        fontWeight: "600",
                      }}
                    >
                      <span>{data.nombre}</span>
                      <span>&nbsp;</span>
                      <span>{data.apellido}</span>
                    </h2>
                    <p
                      color={data?.marca?.attributes?.color}
                      font-size="large"
                      style={{
                        margin: "0px",
                        color: "inherit",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      <span>{data.cargo}</span>
                    </p>
                    <p
                      color={data?.marca?.attributes?.color}
                      font-size="large"
                      style={{
                        margin: "0px",
                        fontWeight: "500",
                        color: "inherit",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      <span>{data.area}</span>
                    </p>
                  </td>
                  <td width="15">
                    <div></div>
                  </td>
                  <td
                    color={data?.marca?.attributes?.color}
                    direction="vertical"
                    width="1"
                    height="auto"
                    style={{
                      width: "1px",
                      borderBottom: "none",
                      borderLeft: `1px solid ${data?.marca?.attributes?.color}`,
                    }}
                  ></td>
                  <td width="15">
                    <div></div>
                  </td>
                  <td>
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      style={{
                        verticalAlign: "-webkit-baseline-middle",
                        fontSize: "large",
                        fontFamily: `${data?.marca?.attributes?.font}`,
                      }}
                    >
                      <tbody>
                        <tr height="25" style={{ verticalAlign: "middle" }}>
                          <td width="30" style={{ verticalAlign: "middle" }}>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style={{
                                verticalAlign: "-webkit-baseline-middle",
                                fontSize: "large",
                                fontFamily: `${data?.marca?.attributes?.font}`,
                              }}
                            >
                              <tbody>
                                {data.telefono && (
                                  <tr>
                                    <td style={{ verticalAlign: "bottom" }}>
                                      <span
                                        width="11"
                                        style={{
                                          display: "inline-block",
                                        }}
                                      >
                                        <img
                                          src={
                                            data?.marca?.attributes
                                              ?.telephoneImg
                                          }
                                          alt="mobilePhone"
                                          width="13"
                                          style={{
                                            display: "inline-block",
                                          }}
                                        />
                                      </span>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </td>
                          <td
                            style={{
                              padding: "0px",
                              color: `${data?.marca?.attributes?.color}`,
                              verticalAlign: "middle",
                              textAlign: "left",
                            }}
                          >
                            <a
                              href={`tel:${data.telefono}`}
                              color={data?.marca?.attributes?.color}
                              style={{
                                textDecoration: "none",
                                color: `${data?.marca?.attributes?.color}`,
                                fontSize: "12px",
                              }}
                            >
                              <span>{data.telefono}</span>
                            </a>
                          </td>
                        </tr>
                        <tr height="25" style={{ verticalAlign: "middle" }}>
                          <td
                            width="30"
                            style={{
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style={{
                                verticalAlign: "-webkit-baseline-middle",
                                fontSize: "large",
                                fontFamily: `${data?.marca?.attributes?.font}`,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "bottom" }}>
                                    <span
                                      color={data?.marca?.attributes?.color}
                                      width="11"
                                      style={{
                                        display: "inline-block",
                                      }}
                                    >
                                      <img
                                        src={data?.marca?.attributes?.webImg}
                                        alt="website"
                                        width="13"
                                        style={{
                                          display: "block",
                                        }}
                                      />
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            style={{
                              padding: "0px",
                              verticalAlign: "middle",
                              textAlign: "left",
                            }}
                          >
                            <a
                              href={data?.marca?.attributes?.web}
                              color={data?.marca?.attributes?.color}
                              style={{
                                textDecoration: "none",
                                color: `${data?.marca?.attributes?.color}`,
                                fontSize: "12px",
                                textAlign: "left",
                              }}
                            >
                              <span>{data?.marca?.attributes?.web}</span>
                            </a>
                          </td>
                        </tr>
                        {data.pais && (
                          <tr height="25" style={{ verticalAlign: "middle" }}>
                            <td width="30" style={{ verticalAlign: "middle" }}>
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                style={{
                                  verticalAlign: "-webkit-baseline-middle",
                                  fontSize: "large",
                                  fontFamily: `${data?.marca?.attributes?.font}`,
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ verticalAlign: "bottom" }}>
                                      <span
                                        width="11"
                                        style={{
                                          display: "inline-block",
                                        }}
                                      >
                                        <img
                                          src={
                                            data?.marca?.attributes?.markerImg
                                          }
                                          alt="address"
                                          width="13"
                                          style={{
                                            display: "block",
                                          }}
                                        />
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>

                            <td
                              style={{
                                padding: "0px",
                                textAlign: "left",
                                verticalAlign: "middle",
                              }}
                            >
                              <span
                                color={data?.marca?.attributes?.color}
                                style={{
                                  fontSize: "12px",
                                  color: `${data?.marca?.attributes?.color}`,
                                  verticalAlign: "middle",
                                  textAlign: "left",
                                }}
                              >
                                <span>{data.pais}</span>
                              </span>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="30"></td>
        </tr>
        <tr>
          <td
            color={data?.marca?.attributes?.color}
            direction="horizontal"
            width="auto"
            height="1"
            style={{
              width: "100%",
              borderBottom: `1px solid ${data?.marca?.attributes?.color}`,
              borderLeft: "none",
              display: "block",
            }}
          ></td>
        </tr>
        <tr>
          <td height="30"></td>
        </tr>
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              style={{
                width: "100%",
                verticalAlign: "-webkit-baseline-middle",
                fontSize: "large",
                fontFamily: `${data?.marca?.attributes?.font}`,
              }}
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "left", verticalAlign: "top" }}>
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      style={{
                        display: "flex",
                        verticalAlign: " -webkit-baseline-middle",
                        fontSize: "large",
                        fontFamily: `${data?.marca?.attributes?.font}`,
                        width: "100%",
                      }}
                    >
                      <tbody style={{ width: "100%" }}>
                        <tr
                          style={{
                            textAlign: "left",
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <td>
                            <a
                              href="//dsa"
                              color={data?.marca?.attributes?.color}
                              style={{
                                display: "inline-block",
                                padding: "0px",
                                backgroundColor: `${data?.marca?.attributes?.color}`,
                              }}
                            >
                              <img
                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                alt="linkedin"
                                color={data?.marca?.attributes?.color}
                                height="24"
                                style={{
                                  backgroundColor: `${data?.marca?.attributes?.color}`,
                                  maxWidth: "135px",
                                  display: "block",
                                }}
                              />
                            </a>
                          </td>
                          <td>
                            <img src={data?.marca?.attributes?.img} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="30"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Template1;
