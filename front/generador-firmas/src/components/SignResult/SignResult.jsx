import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../reducers/userReducer";
import {
  BsFillTelephoneFill,
  AiOutlineGlobal,
  FaMapMarkerAlt,
  AiFillLinkedin,
} from "react-icons/all";
import logo from "./../../assets/latamly_group_logo.png";
import web from "./../../assets/web.png";
import telephone from "./../../assets/telephone.png";
import marker from "./../../assets/marker.png";
import linkedin from "./../../assets/linkedin.png";

const SignResult = () => {
  const { state } = useContext(UserContext);
  const [data, setData] = useState(state.data);

  useEffect(() => {
    setData(state.data);
  }, [state.data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table
        className="sign__result"
        style={{
          width: "max-content",
          minWidth: "530px",
          textAlign: "left",
        }}
      >
        <tbody style={{ width: "100%" }}>
          <tr style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <td
              style={{
                width: "50%",
                borderRight: "1px solid #FF0000",
                fontSize: "24px",
                fontWeight: 600,
                paddingRight: "25px",
                paddingBottom: "3px",
              }}
            >
              {data.nombre} {data.apellido}
            </td>
            <td
              style={{
                paddingLeft: "25px",
                paddingBottom: "3px",
                width: "50%",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "17px",
              }}
            >
              {" "}
              <img
                src={telephone}
                style={{ objectFit: "contain", width: "18px" }}
              />
              {data.telefono}
            </td>
          </tr>
          <tr style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <td
              style={{
                width: "50%",
                borderRight: "1px solid #FF0000",
                fontSize: "23px",
                paddingRight: "25px",
                paddingBottom: "3px",
                fontWeight: 400,
              }}
            >
              {data.cargo}
            </td>
            <td
              style={{
                paddingLeft: "25px",
                paddingBottom: "3px",
                width: "50%",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "17px",
              }}
            >
              {" "}
              <img
                src={web}
                style={{ objectFit: "contain", width: "18px", height: "18px" }}
              />
              https://latamly.com
            </td>
          </tr>
          <tr style={{ display: "flex", width: "100%", alignItems: "center" }}>
            <td
              style={{
                width: "50%",
                borderRight: "1px solid #FF0000",
                fontSize: "24px",
                paddingRight: "25px",
                paddingBottom: "3px",
                fontWeight: 400,
              }}
            >
              {data.area}
            </td>
            <td
              style={{
                paddingLeft: "25px",
                paddingBottom: "3px",
                width: "50%",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "17px",
              }}
            >
              <img
                src={marker}
                style={{ objectFit: "contain", width: "18px", height: "18px" }}
              />
              {data.pais}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr
            style={{
              borderTop: "2px solid #E8E8E8",
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <td style={{ paddingTop: "15px" }}>
              <img
                src={linkedin}
                style={{ objectFit: "contain", width: "18px", height: "18px" }}
              />
            </td>
            <td style={{ paddingTop: "15px" }}>
              <img src={data.marca} style={{ width: "150px" }} />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SignResult;
