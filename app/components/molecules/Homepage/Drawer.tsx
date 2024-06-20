// // FadeInOut.tsx
// import { useSpring, animated } from '@react-spring/web';
// import React, { useEffect, useState } from 'react';

// const FadeInOut: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const props = useSpring({
//     opacity: isVisible && mounted ? 1 : 0,
//     transform: isVisible && mounted ? 'translateX(0%)' : 'translateX(-100%)',
//   });

//   return <animated.div style={props}>Hello, I&apos;m animated!</animated.div>;
// };

// export default FadeInOut;
