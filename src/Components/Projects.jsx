import React from 'react';

const projects = [
    {
        name: 'WedMate',
        description: 'An online matrimony platform designed to help individuals find their perfect life partner. Developed using the MERN stack (MongoDB, Express.js, React, Node.js).',
        coreFeatures: [
            'Comprehensive matchmaking',
            'User authentication',
            'Real-time chat'
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'JWT Token', 'Firebase Auth', 'CSS Animations', 'Tailwind CSS'],
        liveLink: 'https://wedmate-for-u.web.app/',
    },
    {
        name: 'JobQuest',
        description: 'A comprehensive job management platform designed to connect job seekers with potential employers. Our user-friendly website streamlines the job search and application process while providing companies with an efficient way to post and manage job listings.',
        coreFeatures: [
            'Job search and application',
            'Employer job postings',
            'User profiles'
        ],
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'React.js', 'Firebase Auth', 'Tailwind CSS'],
        liveLink: 'https://jobquest-4ccdb.web.app/',
    },
    {
        name: 'Asian Escape Hub',
        description: 'Your ultimate guide to discovering and exploring the most captivating tourist spots across Asia. Our platform is designed for travel enthusiasts who want to discover new destinations, share their favorite spots, and plan unforgettable trips.',
        coreFeatures: [
            'Tourist spot discovery',
            'User reviews and ratings',
            'Trip planning'
        ],
        technologies: ['JavaScript', 'Node.js', 'HTML5', 'MongoDB', 'CSS3', 'React.js', 'Express.js', 'Firebase Auth', 'Tailwind CSS'],
        liveLink: 'https://asian-escape-hub.web.app/',
    }
];

const ProjectCard = ({ project }) => (
    <div className="bg-[#1D1E1F] rounded shadow p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
        <p className=" mb-4">{project.description}</p>
        <h3 className="text-xl font-semibold mb-2">Core Features</h3>
        <ul className="list-disc pl-5 mb-4">
            {project.coreFeatures.map((feature, index) => (
                <li key={index} className="">{feature}</li>
            ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
        <div className="flex flex-wrap mb-4">
            {project.technologies.map((tech, index) => (
                <span key={index} className="bg-primary text-white  text-sm px-2 py-1 rounded mr-2 mb-2">{tech}</span>
            ))}
        </div>
        <div className="flex items-center justify-between">
            <a href={project.liveLink} className=" hover:underline" target="_blank" rel="noopener noreferrer">Live Link</a>
            
        </div>
    </div>
);

const Projects = () => (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold  mb-6">Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </div>
);

export default Projects;
