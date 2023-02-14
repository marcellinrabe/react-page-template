import { Form, Link } from "react-router-dom";
import { useEffect } from "react";


export default function Register() {

    useEffect(() => {
        document.title = "OPartage - Inscription";
    }, [])

    return (
        <div className="w-96 m-auto h-screen flex flex-col">
            <div className="py-8 text-slate-500 text-lg">
                <Link to="/">OPartage</Link>
            </div>
            <div>
                <div className="flex items-center">
                    <div className="w-full">
                        <Form action="post">
                            <div className="my-4">
                                <div className="mb-1">
                                    <label>Nom complet</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full border h-10 rounded-md p-2 text-sm"
                                        placeholder="RAKOTO Rabe"
                                    />
                                </div>
                            </div>
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
                                <div className="flex items-center my-2 p-2 text-sm">
                                    <span className="mr-4">
                                        <input
                                            id="accept-condition"
                                            type="checkbox"
                                        />
                                    </span>
                                    <label htmlFor="accept-condition">
                                        J'accepte les conditions d'utilisation
                                    </label>
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
                                    <span>J'ai déjà un compte | </span>

                                    <span className="underline text-blue-400">
                                        <Link to="/login">Se connecter</Link>
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
