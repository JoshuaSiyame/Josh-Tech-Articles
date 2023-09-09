// import modules/packages
import React from "react";
import "./Footer.css";

// import icons
import { FaTwitter, FaGithub, FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa"

// footer component
const AppFooter = () => {
    return (
        <div className="app-section-wrapper">
            <section id="f-s-1">
                <div id="site-info">
                    <h4 id="site-info-header">Josh-Tech-Articles</h4>
                    <ol id="site-social-accounts">
                        <li className="social-account">
                            <a href="" className="social-account-link">
                                <FaGithub size={21} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="social-account">
                            <a href="" className="social-account-link">
                                <FaInstagram size={21} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="social-account">
                            <a href="" className="social-account-link">
                                <FaTwitter size={21} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="social-account">
                            <a href="" className="social-account-link">
                                <FaYoutube size={21} color="#9d9d9d" />
                            </a>
                        </li>
                    </ol>
                </div>
                <div id="site" className="f-s">
                    <h4 className="f-s-h">Site</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">About</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Blog</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Partners</a>
                        </li>
                    </ol>
                </div>
                <div id="community" className="f-s">
                    <h4 className="f-s-h">Community</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Articles</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Q&amp;As</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">CSS - Tricks</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Meetups</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">OpenSource</a>
                        </li>
                    </ol>
                </div>
                <div id="solutions" className="f-s">
                    <h4 className="f-s-h">Solutions</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Web apps</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Mobile apps</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Rest APIs</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Microservices</a>
                        </li>
                    </ol>
                </div>
                <div id="contacts" className="f-s">
                    <h4 className="f-s-h">Contacts</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Support</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Expertise</a>
                        </li>
                        <li className="f-s-l-i">
                            <a href="" className="f-s-l-i-l">Report Issue</a>
                        </li>
                    </ol>
                </div>
            </section>
            <section id="f-s-2">
                <div id="site-developer-info">
                    <h4 id="site-developer-name">Software Engineer: Joshua P. Siyame</h4>
                    <ol id="site-developer-social-accounts">
                        <li className="dev-social-account">
                            <a href="https://github.com/JoshuaSiyame" target="blank" className="dev-social-account-link">
                                <FaGithub size={18} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="dev-social-account">
                            <a href="https://www.instagram.com/j__siyame" target="blank" className="dev-social-account-link">
                                <FaInstagram size={18} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="dev-social-account">
                            <a href="https://twitter.com/j_siyame" target="blank" className="dev-social-account-link">
                                <FaTwitter size={18} color="#9d9d9d" />
                            </a>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default AppFooter;