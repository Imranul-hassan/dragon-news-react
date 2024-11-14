import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2  className="font-semibold">Login With</h2>
            <div className="flex flex-col gap-3 mt-4">
                <button className="btn"><FaGoogle />Login with Google</button>
                <button className="btn"><FaGithub />Login with Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;