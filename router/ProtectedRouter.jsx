import React from "react";
import { Navigate} from "react-router-dom";

const ProtectedRouter = ({ children }) => {
    let user = localStorage.getItem("token");
    if (!user) return <Navigate to={"/"} />;
    return children;  
};

export default ProtectedRouter;