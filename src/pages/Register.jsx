import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className=" font-semibold text-2xl text-center mt-2">Register your account</h2>
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo url" className="input input-bordered" required />
                </div>
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
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mb-4 font-semibold">Already Have An Account ? <Link to="/auth/login"> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;