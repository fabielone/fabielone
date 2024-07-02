import { useSpring, animated } from '@react-spring/web';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface MethodologyStep {
  title: string;
  description: string;
  icon: string;
}

interface MethodologyProps {
  steps: MethodologyStep[];
}

const Methodology: React.FC<MethodologyProps> = ({ steps }) => {
  return (
    <div className="py-16 mx-auto max-w-7xl">
      {steps.map((step, index) => (
        <MethodologyStep key={index} {...step} />
      ))}
    </div>
  );
};

const MethodologyStep: React.FC<MethodologyStep> = ({ title, description, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const slideProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100px)',
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <animated.div ref={ref} style={slideProps} className="mb-8">
      <div className="flex items-center mb-4">
        <span className="mr-4 text-4xl">{icon}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-lg">{description}</p>
    </animated.div>
  );
};

export default Methodology;
