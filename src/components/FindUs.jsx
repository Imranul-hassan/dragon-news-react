import { FaFacebook, FaGithub } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div className="my-4">
             <h2  className="font-semibold">Find Us on</h2>
             <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaGithub></FaGithub>Github </button>
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
            </div>
        </div>
    );
};

export default FindUs;