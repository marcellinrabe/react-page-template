import { Link } from "react-router-dom";
import LogoImg from  "../../assets/img/logo.png";

export default function Navbar() {
    return (
        <div className="py-6">
            <div
                className="border-4 border-slate-400 rounded-full  mx-2 md:w-3/4
             md:m-auto p-2"
            >
                <nav className="flex justify-between items-center p-2">
                    <div className="text-slate-500 text-lg">
                        <Link to="/social-network-landing-page">
                            <img src={LogoImg} alt="logo" className="w-24 h-12 rounded-md  hover:scale-90 transition duration-300 ease-in-out" />
                        </Link>
                    </div>
                    <ul className="list-none flex">
                        <Link className="mx-2" to="/social-network-landing-page/login">
                            Connexion
                        </Link>
                        <Link className="mx-2" to="/social-network-landing-page/register">
                            S'inscrire
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
