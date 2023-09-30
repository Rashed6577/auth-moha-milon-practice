import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {singIn, createGoogleUser} = useContext(AuthContext);
    const Navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        singIn(email, password)
        .then(res => {
            console.log(res.user);
            e.target.reset();
            Navigate("/");
        })
        .catch(error => console.error(error))
    }

    const handelGoogle = () => {
        createGoogleUser()
        .then(res => console.log(res.user))
        .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div onClick={handelGoogle} className="form-control mt-6">
                                <FcGoogle className="w-10 h-10"></FcGoogle>
                            </div>
                        <p>New to here? Please <Link to="/registration">
                            <button className="btn btn-link normal-case px-0">Register</button>
                        </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;