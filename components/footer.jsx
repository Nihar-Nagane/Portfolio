import { FIRST_NAME, GITHUB_LINK, LINKEDIN_LINK, MAIN_ROLE, STUDENT_NAME, YOUTUBE_LINK } from "./constants";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">{FIRST_NAME}</h1>
                        <span className="footer__subtitle">{MAIN_ROLE}</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#skills" rel="noreferrer" className="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio" rel="noreferrer" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" rel="noreferrer" className="footer__link">Contact</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                    <a href={GITHUB_LINK} className="footer__social" rel="noreferrer" target="__blank">
                                <i className="uil uil-github-alt"></i>
                            </a>
                        <a href={LINKEDIN_LINK} rel="noreferrer" className="footer__social" target="_blank">
                            <i className="uil uil-linkedin-alt"></i>
                        </a>
                        {/* <a href={YOUTUBE_LINK} rel="noreferrer" className="footer__social" target="_blank">
                            <i className="uil uil-youtube"></i>
                        </a> */}
                    </div>
                </div>
                <p className="footer__copy">&#169; {STUDENT_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;