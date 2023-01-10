import React from 'react';
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Robot from "./Robot"
import { OrbitControls } from "@react-three/drei"
export class Asistente extends React.Component{
  

  render(){

    
    return(
      <>
     
            <div className='flex flex-col justify-center items-center'>
                <Canvas className="robot"style={{ width: '100%', height: '40vh'}}  camera={{zoom: 60, position: [-90, 15, 25] }}>
                <ambientLight intensity={0.5} />
                    <pointLight position={[35, 35, 0]} intensity={0.4} />
                    <pointLight position={[-35, 35, 0]} intensity={0.4} />
                    <Suspense>
                        <Robot/>
                </Suspense>
                <OrbitControls />
            </Canvas>
            </div>
      </>
    )
  }
}