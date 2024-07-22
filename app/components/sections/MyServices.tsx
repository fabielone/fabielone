import Header from '../molecules/Cards/ServiceCard'

const services = [
  {
    pill: 'Web Development',
    title: 'High-Quality Web Development',
    subtitle: 'Creating responsive and user-friendly websites',
    description: 'We offer top-notch web development services to bring your ideas to life.',
    buttonText: 'Get Started',
    buttonLink: '#',
    learnMoreLink: '#',
    imageUrl: 'https://fabielone.s3.us-west-1.amazonaws.com/portfolio/webdev',
    items: [
      { icon: '🔧', text: 'Custom Development' },
      { icon: '📱', text: 'Responsive Design' },
      { icon: '⚡', text: 'Performance Optimization' },
    ],
    imagePosition: 'right' as const,
  },
  {
    pill: 'Online Marketing',
    title: 'Effective Online Marketing',
    subtitle: 'Reach your target audience',
    description: 'Our marketing strategies are designed to help you grow your business.',
    buttonText: 'Learn More',
    buttonLink: '#',
    learnMoreLink: '#',
    imageUrl: 'https://fabielone.s3.us-west-1.amazonaws.com/portfolio/onlinemarketing',
    items: [
      { icon: '📈', text: 'SEO Optimization' },
      { icon: '💼', text: 'Social Media Management' },
      { icon: '📊', text: 'Analytics and Reporting' },
    ],
    imagePosition: 'left' as const,
  },
  {
    pill: 'AI Consulting',
    title: 'Expert AI Consulting',
    subtitle: 'Integrate AI solutions into your business',
    description: 'Our AI consulting services can help you leverage the power of AI.',
    buttonText: 'Consult Now',
    buttonLink: '#',
    learnMoreLink: '#',
    imageUrl: 'https://fabielone.s3.us-west-1.amazonaws.com/portfolio/aisolutions',
    items: [
      { icon: '🤖', text: 'AI Strategy' },
      { icon: '🧠', text: 'Machine Learning' },
      { icon: '🔍', text: 'Data Analysis' },
    ],
    imagePosition: 'right' as const,
  },
];

const MyServices = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4">My Services</h1>
      <h2 className="text-xl font-semibold text-center mb-8">What I Offer</h2>
      <div className="flex flex-col space-y-12">
        {services.map((service, index) => (
          <Header
            key={index}
            pill={service.pill}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            buttonText={service.buttonText}
            buttonLink={service.buttonLink}
            learnMoreLink={service.learnMoreLink}
            imageUrl={service.imageUrl}
            items={service.items}
            imagePosition={service.imagePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
