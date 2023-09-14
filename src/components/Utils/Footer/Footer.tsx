// import modules/packages
import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

// import icons
import { FaTwitter, FaGithub, FaInstagram, FaDiscord, FaYoutube, FaLinkedin } from "react-icons/fa"
import { RiTwitterXLine } from "react-icons/ri"

// footer component
const AppFooter = () => {
    return (
        <div className="app-section-wrapper">
            <section id="f-s-1">
                <div id="site-info">
                    <h4 id="site-info-header">Josh-Tech-Articles</h4>
                    <ol id="site-social-accounts">
                        <li className="social-account">
                            <a href="https://github.com/JoshuaSiyame" className="social-account-link">
                                <FaGithub size={21} color="#9d9d9d" />
                            </a>
                        </li>
                        {/*  <li className="social-account">
                            <a href="" className="social-account-link">
                                <FaInstagram size={21} color="#9d9d9d" />
                            </a>
                        </li> */}
                        <li className="social-account">
                            <a href="https://twitter.com/j_siyame" className="social-account-link">
                                <RiTwitterXLine size={21} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="social-account">
                            <a href="" className="social-account-link">
                                <FaYoutube size={21} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="social-account">
                            <a href="https://www.linkedin.com/in/joshua-siyame-a069ab282/" className="social-account-link">
                                <FaLinkedin size={21} color="#9d9d9d" />
                            </a>
                        </li>
                    </ol>
                </div>
                <div id="site" className="f-s">
                    <h4 className="f-s-h">Site</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <NavLink to="/site/about" className="f-s-l-i-l">About</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/site/blog" className="f-s-l-i-l">Blog</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/site/testimonials" className="f-s-l-i-l">Testimonials</NavLink>
                        </li>
                    </ol>
                </div>
                <div id="community" className="f-s">
                    <h4 className="f-s-h">Community</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <NavLink to="/community/articles" className="f-s-l-i-l">Articles</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/community/questans" className="f-s-l-i-l">Q&amp;As</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/community/css-tricks" className="f-s-l-i-l">CSS - Tricks</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/community/meetups" className="f-s-l-i-l">Meetups</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/community/opensource" className="f-s-l-i-l">OpenSource</NavLink>
                        </li>
                    </ol>
                </div>
                <div id="solutions" className="f-s">
                    <h4 className="f-s-h">Solutions</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <NavLink to="/solutions/web" className="f-s-l-i-l">Web apps</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/solutions/mobile" className="f-s-l-i-l">Mobile apps</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/solutions/apis" className="f-s-l-i-l">Rest APIs</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/solutions/microservices" className="f-s-l-i-l">Microservices</NavLink>
                        </li>
                    </ol>
                </div>
                <div id="contacts" className="f-s">
                    <h4 className="f-s-h">Contacts</h4>
                    <ol className="f-s-l">
                        <li className="f-s-l-i">
                            <NavLink to="/contact/support" className="f-s-l-i-l">Support</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/contact/expertise" className="f-s-l-i-l">Expertise</NavLink>
                        </li>
                        <li className="f-s-l-i">
                            <NavLink to="/contact/report-issue" className="f-s-l-i-l">Report Issue</NavLink>
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
                                <RiTwitterXLine size={18} color="#9d9d9d" />
                            </a>
                        </li>
                        <li className="dev-social-account">
                            <a href="https://www.linkedin.com/in/joshua-siyame-a069ab282" target="blank" className="dev-social-account-link">
                                <FaLinkedin size={18} color="#9d9d9d" />
                            </a>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default AppFooter;