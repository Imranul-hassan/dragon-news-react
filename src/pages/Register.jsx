import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext)
    const handleSubmit = (e)=>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        createNewUser(email, password)
        .then(res =>{
            const user = res.user;
            setUser(user)
            console.log(user)
        })
        .catch(error =>{
            const message = error.message;
            console.log(message);
        })
    }
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className=" font-semibold text-2xl text-center mt-2">Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        
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