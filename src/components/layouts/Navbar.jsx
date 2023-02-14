import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="py-6">
            <div
                className="border-4 border-slate-400 rounded-full  mx-2 md:w-3/4
             md:m-auto p-2"
            >
                <nav className="flex justify-between p-2">
                    <div className="text-slate-500 text-lg">
                        <Link to="/">OPartage</Link>
                    </div>
                    <ul className="list-none flex">
                        <Link className="mx-2" to="/login">
                            Connexion
                        </Link>
                        <Link className="mx-2" to="/register">
                            S'inscrire
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
