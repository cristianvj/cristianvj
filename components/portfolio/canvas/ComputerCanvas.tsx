import { Suspense, useState, useEffect } from 'react';

import Computers from './Computers';
import CanvasLoader from './CanvasLoader';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

const ComputerCanvas = () => {

  const[isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e: any) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer : true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>
    </Canvas>
  );
};

export default ComputerCanvas;