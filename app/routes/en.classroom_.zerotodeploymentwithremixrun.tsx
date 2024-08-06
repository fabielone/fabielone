export default function ZeroToDeployment(){ 
    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Zero to Deployment with Remix.run</h1>
      <img src="URL_to_book_cover_image" alt="Zero to Deployment with Remix.run" className="w-full h-64 object-cover mb-4" />
      <p className="text-lg text-gray-700 mb-2">by Fabiel Ramirez</p>
      <p className="mb-4">
        This course will take you from zero to deploying a full-fledged web application using Remix.run, Tailwind CSS, and AWS.
        The course includes comprehensive lessons on all the foundational and advanced topics required to build modern web applications.
      </p>
      <h2 className="text-2xl font-bold mb-2">Course Curriculum</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Introduction to Remix.run</li>
        <li>Setting up the development environment</li>
        <li>Building your first Remix application</li>
        <li>Advanced Remix concepts</li>
        <li>Deployment strategies</li>
        <li>Maintaining and scaling your application</li>
      </ul>
      <div className="flex space-x-4">
        <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Buy eBook</a>
        <a href="/" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Buy Book</a>
      </div>
    </div>
  );
}
  