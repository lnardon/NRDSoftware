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

  var angle = 0;
  var radius = 7;
  useFrame((state) => {
    // controls.current.update();
    // camera.position.x = radius * Math.cos(angle);
    // camera.position.z = radius * Math.sin(angle);
    // angle += 0.01;
  });

  return (
    <>
      <Box position={[3, 0, 0]} size={[0.75, 0.75, 0.75]} />
      <Box position={[-3, 0, 0]} size={[0.75, 0.75, 0.75]} />
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
