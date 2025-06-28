import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold">Muhammad Anas</h2>
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Links */}
                <div className="flex space-x-6 text-xl">
                    <a
                        href="https://github.com/muhammadanas2002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/muhammad-anas-b7937b274"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:youremail@example.com"
                        className="hover:text-blue-400 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
