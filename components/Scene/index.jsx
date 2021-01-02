import React, { useRef } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls";
import Box from "../BoxComponent";

extend({ OrbitControls });

function Scene() {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();

  useFrame((state) => controls.current.update());

  return (
    <>
      <Box position={[-3, 2, 0]} size={[1, 1, 1]} />
      <Box position={[3, -2, 0]} size={[0.6, 0.6, 0.6]} />
      <Box position={[3, 2, 0]} size={[0.35, 0.35, 0.35]} />
      <Box position={[-3, -2, 0]} size={[0.85, 0.85, 0.85]} />
      <ambientLight intensity={0.75} />
      <spotLight position={[0, 30, 0]} angle={180} penumbra={100} />
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}
      />
    </>
  );
}

export default Scene;
