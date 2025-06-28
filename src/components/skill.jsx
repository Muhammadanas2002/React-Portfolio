import React from 'react';
import {
    Code,
    Database,
    LayoutDashboard,
    Server,
    GitBranch,
    Globe,
    Cpu,
    FileCode,
} from 'lucide-react';

const skills = [
    { name: 'React', icon: <Code className="w-6 h-6 text-blue-500" /> },
    { name: 'Node.js', icon: <Server className="w-6 h-6 text-green-600" /> },
    { name: 'Tailwind CSS', icon: <LayoutDashboard className="w-6 h-6 text-cyan-500" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6 text-emerald-600" /> },
    { name: 'JavaScript', icon: <FileCode className="w-6 h-6 text-yellow-500" /> },
    { name: 'Express.js', icon: <Cpu className="w-6 h-6 text-gray-700" /> },
    { name: 'Firebase', icon: <Globe className="w-6 h-6 text-orange-500" /> },
    { name: 'Git & GitHub', icon: <GitBranch className="w-6 h-6 text-pink-600" /> },
];

const Skill = () => {
    return (
        <section  className="py-16 px-4 bg-gray-50" id="skills" data-aos="fade-up">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-purple-700 text-3xl font-semibold mb-8">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                        >
                            <div className="mb-2">{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
