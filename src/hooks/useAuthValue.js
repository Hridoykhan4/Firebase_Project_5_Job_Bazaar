import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const useAuthValue = () => {
    const authInfo = useContext(AuthContext);
    return authInfo
};

export default useAuthValue;