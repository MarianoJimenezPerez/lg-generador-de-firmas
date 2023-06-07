import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../reducers/userReducer";
import Template1 from "./Template1";
import Template from "./Template";

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
      {data && <Template data={data} />}
    </div>
  );
};

export default SignResult;
