import { Link } from "react-router-dom";
import { useEffect } from "react";

// assets
import { PreviewDesktopImg, PreviewMobileImg, StarImg } from "../assets";

// Components
import Footer from "../components/layouts/Footer";
import Linebreak from "../components/Linebreak";

export default function Landing() {

    useEffect(() => {
        document.title = "OPartage - Acceuil";
        
    }, [])

    return (
        <div className="container m-auto px-8">
            <div className="my-20">
                <h1 className="text-7xl font-bold font-title -tracking-tigh text-slate-400 text-center">
                    Avec le moins de dispute
                </h1>
                <p className="w-2/3 mx-auto my-6 text-lg">
                    OPartage est un réseau social fait pour partager des idées
                    et cultures, non pas pour se battre à convaincre les autres
                    que la sienne est la bonne
                </p>
                <div className="text-center my-10 text-base">
                    <Link
                        to="/login"
                        className="m-2 bg-slate-600 relative
                         p-2 after:content-[' '] after:absolute after:w-full
                        after:top-0 after:left-0 after:h-full after:translate-x-1
                        after:translate-y-1 after:bg-slate-400 after:z-[-1]
                        after:transition-transform after:duration-500
                        after:hover:translate-x-0 after:hover:translate-y-0 text-white"
                    >
                        Se connecter
                    </Link>
                    <Link
                        to="/register"
                        className="m-2 bg-slate-600 relative
                         p-2 after:content-[' '] after:absolute after:w-full
                        after:top-0 after:left-0 after:h-full after:translate-x-1
                        after:translate-y-1 after:bg-slate-400 after:z-[-1]
                        after:transition-transform after:duration-500
                        after:hover:translate-x-0 after:hover:translate-y-0 text-white"
                    >
                        S'inscrire
                    </Link>
                </div>
            </div>
            <Linebreak />
            <div className="grid grid-cols-2 gap-20 items-center justify-between mx-12 text-lg">
                <div className="p-12">
                    <div className="relative">
                        <h1 className="text-5xl font-title font-extrabold text-justify">
                            Contenu riche en style
                        </h1>
                        <p className="my-6">
                            OPartage utilise un éditeur de texte riche en
                            fonctionnalité pour vous permettre de styliser le
                            contenu de votre publication. En plus des contenus
                            mutlimedias tels que des images, vidéos...
                        </p>
                        <div className="absolute translate-x-2/3">
                            <div className="w-10 h-100">
                                <img src={StarImg} alt="etoile" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-12">
                    <div className="shadow-xl">
                        <img src={PreviewMobileImg} alt="mobile view" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-20 items-center justify-between my-12 text-lg">
                <div className="p-12">
                    <div className="shadow-xl">
                        <img src={PreviewDesktopImg} alt="mobile view" />
                    </div>
                </div>
                <div className="p-12">
                    <div className="relative">
                        <h1 className="text-5xl font-title font-extrabold text-justify">
                            Le tout et rien
                        </h1>
                        <p className="my-6">
                            Un utilisateur n'est autorise à ne faire qu'une
                            commentaire sur une publication. Adieu l'occasion
                            des petites querelles
                        </p>
                        <div className="absolute right-0 -translate-x-16">
                            <div className="w-10 h-100">
                                <img src={StarImg} alt="etoile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Linebreak />
            <Footer />
        </div>
    );
}
