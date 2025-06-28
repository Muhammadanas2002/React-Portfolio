import React from 'react';

const IntroSection = () => {
    return (
        <section className="bg-white py-24 px-6" id="intro">
            <div
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                data-aos="fade-up"
            >
                {/* Image First on Mobile */}
                <div className="order-1 md:order-2">
                    <img
                        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=987&q=80"
                        alt="Coding Desk"
                        className="w-full h-auto rounded-2xl shadow-md object-cover"
                    />

                </div>

                {/* Text Second on Mobile */}
                <div className="order-2 md:order-1">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Hello, I’m a <span className="text-purple-500">Software Engineer</span>
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        I craft robust, user-focused web applications with performance and scalability in mind.
                        From intuitive frontends to efficient backends, my work is about clean code and meaningful results.
                    </p>
                    <p className="text-gray-600 mb-8">
                        I enjoy building projects that solve real-world problems — whether it's for startups, freelance clients, or just for fun.
                    </p>
                    <a
                        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
                    >
                        Explore My Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
