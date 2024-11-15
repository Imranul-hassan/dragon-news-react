import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value 
        const password = form.password.value   
        
        userLogin(email, password)
        .then(res =>{
            const user = res.user;
            console.log(user)
        
        })
        .catch((error)=>{
            alert(error.code)
        })
    }
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0">
            <h2 className=" font-semibold text-2xl text-center mt-2">Login your account</h2>
            <form  onSubmit={handleSubmit} className="card-body pt-3">
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
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mb-4 font-semibold">Dont’t Have An Account ? <Link to="/auth/register"> Register</Link></p>
            </div>
        </div>
    );
};

export default Login;