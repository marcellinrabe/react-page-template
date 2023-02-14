import { Form, Link } from "react-router-dom";
import { useEffect } from "react";


export default function Login() {

    useEffect(() => {
        document.title = "OPartage - Connexion";
    }, [])

    return (
        <div className="w-96 px-10 m-auto h-screen flex flex-col">
            <div className="py-8 text-slate-500 text-lg">
                <Link to="/">OPartage</Link>
            </div>
            <div>
                <div className="flex items-center">
                    <div className="w-full">
                        <Form action="post">
                            <div className="my-4">
                                <div className="mb-1">
                                    <label>Adresse email</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full border h-10 rounded-md p-2 text-sm"
                                        placeholder="rakoto.rabe@gmail.com"
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="mb-1">
                                    <label>Mot de passe</label>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className="w-full border h-10 rounded-md p-2 text-sm"
                                        placeholder="****"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    className="bg-slate-700 text-white w-full 
                            border h-10 rounded-md p-2 text-sm"
                                    type="submit"
                                >
                                    Envoyer
                                </button>
                            </div>
                            <div>
                                <div className="p-4 text-center">
                                    <span>Vous n'avez pas de compte ? </span>
                                    <span className="underline text-blue-400">
                                        <Link to="/register">S'inscrire</Link>
                                    </span>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
