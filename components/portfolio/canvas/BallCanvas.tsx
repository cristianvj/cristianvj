import { Suspense, FC } from 'react';

import CanvasLoader from './CanvasLoader';
import Ball from './Ball';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

interface Props {
  icon: string;
};

const BallCanvas: FC<Props> = ({ icon }) => (
  <Canvas
    frameloop='demand'
    shadows
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true}}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon}/>
    </Suspense>

    <Preload all />
  </Canvas>
);

export default BallCanvas;