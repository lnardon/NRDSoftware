import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const Box = (props) => {
  const mesh = useRef();

  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      rotation={[0, 0, Math.PI / 2]}
      onClick={(e) => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={0xfafafa}
        side={THREE.DoubleSide}
        wireframe={true}
        wireframeLinewidth={15}
      ></meshStandardMaterial>
    </mesh>
  );
};

export default Box;
