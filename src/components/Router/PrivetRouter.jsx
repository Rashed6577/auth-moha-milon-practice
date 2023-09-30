import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

const PrivetRouter = ({ children }) => {

    const { user, loader } = useContext(AuthContext);


    if(loader){
        return <div className="flex justify-center items-center h-[200px]"><span className="loading loading-spinner loading-lg"></span></div> 
    }

    if (user) {
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRouter;

PrivetRouter.propTypes = {
    children: PropTypes.node
}