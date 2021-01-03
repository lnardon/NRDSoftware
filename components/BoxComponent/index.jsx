import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import Font from "./font.json";

const Box = (props) => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.00623;
  });

  // const font = new THREE.FontLoader().parse(Font);

  // const textOptions = {
  //   font,
  //   size: 1,
  //   height: 0.2,
  //   curveSegments: 21,
  // };

  return (
    <mesh {...props} ref={mesh} rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry attach="geometry" args={props.size} />
      <meshStandardMaterial
        color={0xfafafa}
        wireframe={true}
        wireframeLinewidth={4}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Box;
