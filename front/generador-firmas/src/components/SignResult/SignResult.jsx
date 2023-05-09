import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../reducers/userReducer";
import {
  BsFillTelephoneFill,
  AiOutlineGlobal,
  FaMapMarkerAlt,
  AiFillLinkedin,
} from "react-icons/all";
import logo from "./../../assets/latamly_group_logo.png";

const SignResult = () => {
  const { state } = useContext(UserContext);
  const [data, setData] = useState(state.data);

  useEffect(() => {
    setData(state.data);
  }, [state.data]);

  const handleCopy = () => {
    const sign = document.querySelector(".sign__result").outerHTML;
    const temp = document.createElement("div");
    temp.innerHTML = sign;
    document.body.appendChild(temp);
    const range = document.createRange();
    range.selectNodeContents(temp);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(temp);
  };

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
                gap: "8px",
                fontSize: "17px",
              }}
            >
              {" "}
              <BsFillTelephoneFill style={{ color: "#FF0000" }} />
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
                gap: "8px",
                fontSize: "17px",
              }}
            >
              {" "}
              <AiOutlineGlobal style={{ color: "#FF0000" }} />
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
                gap: "8px",
                fontSize: "17px",
              }}
            >
              <FaMapMarkerAlt style={{ color: "#FF0000" }} />
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
              <AiFillLinkedin style={{ color: "#000000", fontSize: "22px" }} />
            </td>
            <td style={{ paddingTop: "15px" }}>
              <img src={logo} style={{ width: "150px" }} />
            </td>
          </tr>
        </tfoot>
      </table>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default SignResult;
