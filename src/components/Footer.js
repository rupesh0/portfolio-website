import { FOOTER_TEXTS } from "../textHelper/english";

function Footer() {
    const { copyright } = FOOTER_TEXTS;

    return (
        <footer
            style={{
                textAlign: "center",
                padding: "18px 0",
                background: "rgba(24, 28, 36, 0.98)",
                fontSize: "1rem",
                borderTop: "1px solid #23283b",
                marginTop: "32px",
            }}
        >
            <p>{copyright}</p>
        </footer>
    );
}

export default Footer;
