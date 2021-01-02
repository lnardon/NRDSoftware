import React from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls";
import Box from "../BoxComponent";
// import { Container } from './styles';

extend({ OrbitControls });

function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <Box position={[0, 0, 0]} />
      <ambientLight intensity={0.75} />
      {/* <spotLight position={[0, 100, 0]} angle={180} penumbra={1000} /> */}
      <orbitControls args={[camera, domElement]} enableZoom={false} />
    </>
  );
}

export default Scene;
