
import { Link, Outlet } from '@remix-run/react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-indigo-600 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <div className="space-x-4">
            <Link to="/services" className="hover:underline">Overview</Link>
            <Link to="/services/webdevelopment" className="hover:underline">Web Development</Link>
            <Link to="/services/onlinemarketing" className="hover:underline">Online Marketing</Link>
            <Link to="/services/aiconsulting" className="hover:underline">AI Consulting</Link>
            <Link to="/services/hosting" className="hover:underline">Hosting</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Services</h2>
          <p className="text-lg mb-4">
            At Fabiel.one, we provide a comprehensive range of services to meet all your business needs. Explore our offerings below to see how we can help you elevate your online presence, streamline your operations, and achieve your business goals.
          </p>
        </section>
        <Outlet />
      </main>
    </div>
  );
}
