import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div id="footer">
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <h1 className="font-bold">Contact</h1>
                    <ul className="text-sm">
                        <li className="my-2">
                            <span className="mr-2">
                                <FontAwesomeIcon
                                    icon={["fas", "location-dot"]}
                                />
                            </span>
                            <span>
                                {" "}
                                Amboditsiry, 101 Antananarivo Madagascar{" "}
                            </span>
                        </li>
                        <li className="my-2">
                            <span className="mr-2">
                                <FontAwesomeIcon icon={["fas", "phone"]} />
                            </span>
                            <span> +261 34 93 946 98</span>
                        </li>
                        <li className="my-2">
                            <span className="mr-2">
                                <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
                            </span>
                            <a
                                className="underline text-blue-500"
                                href="mailto:marcellinp20.aps1a@gmail.com"
                            >
                                marcellinp20.aps1a@gmail.com
                            </a>
                        </li>

                        <li className="my-2">
                            <a href="https://www.facebook.com/rabemarcellin"
                            target="_blank">
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={["fab", "facebook"]} />{" "}
                                </span>
                                <span>RABE Marcellin</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold">A propos</h1>
                    <ul className="text-sm">
                        <li className="my-2">
                            <span>Nous contacter</span>
                        </li>
                        <li className="my-2">
                            <span className="mr-2">
                                Politique de confidentialité
                            </span>
                        </li>
                        <li className="my-2">
                            <span>À propos de l'application</span>
                        </li>
                        <li className="my-2">
                            <span> Besoin d'aide ?</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-20 pb-4">
                <span>Copyright (©) 2023 - RABE Marcellin</span>
            </div>
        </div>
    );
}
