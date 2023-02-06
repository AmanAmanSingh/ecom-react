import "./footer.css"
const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer_section">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3 className="footer-header">About Us</h3>
                        <p className="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent commodo ligula non eros blandit, eu placerat odio
                            aliquet.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-header">Contact</h3>
                        <p className="footer-text">
                            123 Main St.<br />
                            Anytown, USA 12345<br />
                            (123) 456-7890
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-header">Follow Us</h3>
                        <div className="social-media-container">
                            <ul>
                                <li className="social-media-link">
                                    <i className="fa fa-facebook-square social-media-icon" />
                                </li>
                                <li className="social-media-link">
                                    <i className="fa fa-twitter-square social-media-icon" />
                                </li>
                                <li className="social-media-link">
                                    <i className="fa fa-instagram social-media-icon" />
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <p className="copyright">
                    Copyright © {new Date().getFullYear()} E-commerce Website
                </p>
            </footer>

        </>
    )
}
export default Footer;