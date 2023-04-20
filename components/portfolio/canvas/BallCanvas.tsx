import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import { OrbitControls, Preload } from '@react-three/drei'
import Ball from './Ball'

const BallCanvas = ({ icon }) => {

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      gl={{ PreserveDrawingBuffer : true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas