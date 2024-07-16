import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const Comp = props.Comp; //You can't write comp always first letter is big because Component name always start with big letter
  const navigate = useNavigate();

  useEffect(() => {
    let islogin = localStorage.getItem("name");
    if (islogin == 'true') {
      navigate("/secret");
    }
    else{
        navigate("/");
    }
  },[]);

  return (
    <div>
      <Comp />
    </div>
  );
}
