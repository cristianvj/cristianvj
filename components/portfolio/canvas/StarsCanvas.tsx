import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { random } from "maath";
import { PointMaterial, Points } from "@react-three/drei";
import { Mesh } from "three";

const Stars = (props: any) => {

  const ref = useRef<Mesh>(null);

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref?.current?.rotation) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={4} frustrumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          dephWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars/>
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;