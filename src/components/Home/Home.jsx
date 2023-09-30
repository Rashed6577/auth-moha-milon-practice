import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {


    const authInfo = useContext(AuthContext);

    return (
        <div>
            <h2 className='text-3xl'>This is Home for: {authInfo.name}</h2>
        </div>
    );
};

export default Home;