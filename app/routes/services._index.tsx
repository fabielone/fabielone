import {Link} from '@remix-run/react'

export default function ServicesOverview() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-lg mb-4">Explore the wide range of services we offer to boost your business.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p>Building responsive and high-quality websites tailored to your business needs.</p>
          <Link to="/services/webdevelopment" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Learn More</Link>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Online Marketing</h3>
          <p>Enhance your online presence and reach your target audience effectively.</p>
          <Link to="/services/onlinemarketing" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Learn More</Link>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">AI Consulting</h3>
          <p>Implement AI solutions to streamline your business operations and improve efficiency.</p>
          <Link to="/services/aiconsulting" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Learn More</Link>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Hosting</h3>
          <p>Reliable and secure hosting solutions to keep your website up and running smoothly.</p>
          <Link to="/services/hosting" className="text-indigo-600 hover:text-indigo-800 mt-2 block">Learn More</Link>
        </div>
      </div>
    </div>
  );
}
