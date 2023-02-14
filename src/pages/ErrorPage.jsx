import { useRouteError, Link } from "react-router-dom";

export default function RouteNotMatch() {
    const error = useRouteError();

    if (error.status == "300") {
        console.error(error);
    }

    return (
        <>
            <div id="error-page">
                <div className="container flex h-screen w-screen justify-center items-center">
                    <div className="w-1/2">
                        <div className="flex items-center justify-center h-full">
                            <div>
                                <div className="my-4">
                                    <h1>Oops!</h1>
                                    <p>Une erreur s'est produite </p>
                                    <p>
                                        { !error.status && `${error.status} ${error.statusText}`}
                                    </p>
                                </div>
                                <div>
                                    <Link
                                        to="/"
                                        className="bg-slate-600 relative
                        font-bold p-2 after:content-[' '] after:absolute after:w-full
                        after:top-0 after:left-0 after:h-full after:translate-x-1
                        after:translate-y-1 after:bg-slate-400 after:z-[-1]
                        after:transition-transform after:duration-500
                        after:hover:translate-x-0 after:hover:translate-y-0 text-white"
                                    >
                                        retour à l'acceuil
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-center justify-center">
                            <img
                                className="w-2/3"
                                src="https://svgshare.com/i/Ye7.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
