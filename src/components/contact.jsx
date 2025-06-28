import React from 'react';

const Contact = () => {
    return (
        <section className="py-20 px-4 bg-white" id="contact" data-aos="fade-up">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-purple-700">Contact Me</h2>
                <p className="text-gray-600 mb-10">
                    Have a question, project idea, or just want to say hi? Fill out the form below and I’ll get back to you soon!
                </p>

                <form className="space-y-6">
                    <div className="text-left">
                        <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="text-left">
                        <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your message..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
