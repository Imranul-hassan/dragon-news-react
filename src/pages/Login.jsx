import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0">
            <h2 className=" font-semibold text-2xl text-center mt-2">Login your account</h2>
            <form className="card-body pt-3">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mb-4 font-semibold">Dont’t Have An Account ? <Link to="/auth/register"> Register</Link></p>
            </div>
        </div>
    );
};

export default Login;