import { FOOTER_TEXTS } from "../dataModeling/i18n";
import "./Footer.css";

function Footer() {
    const { copyright } = FOOTER_TEXTS;

    return (
        <footer>
            <p>{copyright}</p>
        </footer>
    );
}

export default Footer;
