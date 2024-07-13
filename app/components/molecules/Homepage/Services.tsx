import { Link } from '@remix-run/react';
import React from 'react';

const services = [
    {
        category: 'Web Development',
        subServices: [
            { name: 'Business Websites', description: 'Custom solutions for your business needs.' },
            { name: 'Personal Websites', description: 'Showcase your personal projects and portfolio.' },
            { name: 'Hosting', description: 'Reliable and secure web hosting services.' },
        ],
    },
    {
        category: 'Online Marketing',
        subServices: [
            { name: 'SEO', description: 'Improve your search engine ranking.' },
            { name: 'Social Media Management', description: 'Grow your online presence.' },
            { name: 'Email Marketing', description: 'Engage your audience with targeted campaigns.' },
        ],
    },
    {
        category: 'AI Solutions',
        subServices: [
            { name: 'Per Hour Rate', description: 'Flexible consulting services per hour.' },
            { name: 'Project Management', description: 'Expert guidance for your projects.' },
        ],
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
                    <p className="text-gray-600 mt-4">Explore the wide range of services we offer to help you grow your business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-700">{service.category}</h3>
                            <ul className="mt-4 space-y-2">
                                {service.subServices.map((subService, subIndex) => (
                                    <li key={subIndex} className="flex flex-col">
                                        <h4 className="text-lg font-medium text-gray-800">{subService.name}</h4>
                                        <p className="text-gray-600">{subService.description}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <Link
                                    to="/services"
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to="/create-account"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
                    >
                        Create Account
                    </Link>
                    <p className="mt-4 text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-800">Login to manage your account</Link>.</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
