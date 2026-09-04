import { useState } from "react";
import "./ContactSection.css";
import { CONTACT_TEXTS } from "../dataModeling/i18n";

function ContactSection() {
    const {
        heading,
        subheading,
        location,
        phone,
        rawPhone,
        email,
        githubUrl,
        linkedinUrl,
        trailblazerUrl,
        resumeUrl,
        formHeading,
        formName,
        formEmail,
        formSubject,
        formMessage,
        formSubmit,
        copyEmailToast,
        copyPhoneToast,
    } = CONTACT_TEXTS;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [toastMessage, setToastMessage] = useState("");

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage("");
        }, 3200);
    };

    const copyToClipboard = (text, label) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
            showToast(label);
        } else {
            // fallback
            const el = document.createElement("textarea");
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            showToast(label);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct mailto link
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
            formData.subject || "Portfolio Contact: " + formData.name
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        showToast("Opening email client...");
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <h2 className="section-title">{heading}</h2>
                    <p className="section-subtitle">{subheading}</p>
                </div>


                <div className="contact-grid">
                    {/* Left Column: Direct Channels & Socials */}
                    <div className="contact-info-column">
                        <div className="contact-channels-list">
                            {/* Email Card */}
                            <div className="contact-channel-card">
                                <div className="channel-icon-wrap">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="channel-text-wrap">
                                    <span className="channel-label">Email Address</span>
                                    <span className="channel-value">{email}</span>
                                </div>
                                <div className="channel-actions">
                                    <button
                                        className="channel-action-btn"
                                        onClick={() => copyToClipboard(email, copyEmailToast)}
                                        title="Copy Email"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        <span>Copy</span>
                                    </button>
                                    <a
                                        href={`mailto:${email}`}
                                        className="channel-action-btn"
                                        title="Send Email"
                                    >
                                        <span>Send</span>
                                    </a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="contact-channel-card">
                                <div className="channel-icon-wrap">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="channel-text-wrap">
                                    <span className="channel-label">Phone / WhatsApp</span>
                                    <span className="channel-value">{phone}</span>
                                </div>
                                <div className="channel-actions">
                                    <button
                                        className="channel-action-btn"
                                        onClick={() => copyToClipboard(rawPhone, copyPhoneToast)}
                                        title="Copy Phone"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        <span>Copy</span>
                                    </button>
                                    <a
                                        href={`tel:${rawPhone}`}
                                        className="channel-action-btn"
                                        title="Call"
                                    >
                                        <span>Call</span>
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="contact-channel-card">
                                <div className="channel-icon-wrap">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="channel-text-wrap">
                                    <span className="channel-label">Location</span>
                                    <span className="channel-value">{location}</span>
                                </div>
                            </div>

                            {/* Download Resume Card */}
                            <div className="contact-channel-card" style={{ background: "linear-gradient(135deg, rgba(0, 161, 224, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)", borderColor: "rgba(0, 161, 224, 0.25)" }}>
                                <div className="channel-icon-wrap" style={{ background: "var(--gradient-brand)", color: "#fff" }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                                <div className="channel-text-wrap">
                                    <span className="channel-label">Official Resume</span>
                                    <span className="channel-value">PDF Format (Latest)</span>
                                </div>
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
                                    download="Rupesh_Prajapat_Resume.pdf"
                                >
                                    Download
                                </a>
                            </div>
                        </div>

                        {/* Social Profiles */}
                        <div className="social-links-box">
                            <span className="social-title">Professional Networks</span>
                            <div className="social-buttons-grid">
                                <a
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-btn"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>

                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-btn"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                    </svg>
                                    <span>GitHub</span>
                                </a>

                                <a
                                    href={trailblazerUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-btn"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                    <span>Trailhead</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Message Form */}
                    <div className="glass-card contact-form-card">
                        <h3 className="form-header-title">{formHeading}</h3>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">{formName}</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder="e.g. Sarah Jenkins"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">{formEmail}</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="e.g. sarah@enterprise.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">{formSubject}</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    className="form-input"
                                    placeholder="e.g. Senior Salesforce / Certinia PSA Role"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">{formMessage}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary form-submit-btn">
                                <span>{formSubmit}</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Toast feedback */}
            {toastMessage && (
                <div className="toast-notification">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-emerald)" }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{toastMessage}</span>
                </div>
            )}
        </section>
    );
}

export default ContactSection;
