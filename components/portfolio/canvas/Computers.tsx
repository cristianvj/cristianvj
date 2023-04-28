import { FC } from 'react';

import { useGLTF } from '@react-three/drei';

interface Props {
  isMobile: boolean;
};

const Computers: FC<Props> = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} position={[-.5, 1.5, -1.5]}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
        castShadow
      />
      <primitive 
        object={computer.scene}
        scale={ isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -2.25, -1.6]}
        rotation={[-0.01, -.2, -.1]}
      />
    </mesh>
  );
};

export default Computers;