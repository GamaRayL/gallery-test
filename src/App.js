import { Canvas, useLoader } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  OrbitControls,
  PointerLockControls,
} from "@react-three/drei";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import Plane from "./Plane";
import Wall from "./Wall";
import WallClassic from "./models/WallClassic";
import { RepeatWrapping, TextureLoader } from "three";

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const texture = useLoader(TextureLoader, "textures/plane1_baseColor.jpeg");

  if (texture) {
    texture.wrapS = texture.wrapT = RepeatWrapping;
    texture.repeat.set(2, 2);
    texture.anisotropy = 16;
  }

  function pointerlockchange() {
    setShowInstructions(!showInstructions);
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerlockchange,
        false
      );
    };
  });

  return (
    <>
      <Canvas camera={{ position: [0, 15, 40], zoom: 1 }}>
        <PointerLockControls selector="#button" />
        <OrbitControls maxPolarAngle={1.45} />
        <color args={[0, 2, 5]} attach="background" />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[20, 20, 20]}
          angle={1}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Suspense fallback={null}>
          {/* <Frame /> */}
          {/* <WallClassic /> */}
          <group>
            <Wall position={[0, 0, -50]} />
            <Wall position={[0, 0, 50]} rotation={[0, -Math.PI * 1, 0]} />
            <Wall position={[50, 0, 0]} rotation={[0, -Math.PI * 0.5, 0]} />
            <Wall position={[-50, 0, 0]} rotation={[0, Math.PI * 0.5, 0]} />
            {/* <Wall position={[0, 20, -50]} /> */}
            {/* <WallClassic position={[0, 0, -50]} image="1.jpg" />
            <WallClassic position={[-48, 0, -50]} image="2.jpg" />
            <WallClassic
              position={[50, 0, 0]}
              rotation={[0, Math.PI, 0]}
              image="3.jpg"
            />
            <WallClassic
              position={[50, 0, -48]}
              rotation={[0, Math.PI, 0]}
              image="4.jpg"
            />
            <WallClassic
              position={[-50, 0, 0]}
              rotation={[0, -Math.PI * 2, 0]}
              image="5.jpg"
            />
            <WallClassic
              position={[-50, 0, 48]}
              rotation={[0, -Math.PI * 2, 0]}
              image="6.jpg"
            /> */}
            {/* <mesh position={[0, 20, -50]}>
              <boxGeometry args={[100, 40, 0.5]} />
              <meshStandardMaterial color={"gray"} />
            </mesh> */}
            <Plane />
          </group>
          {/* <Plane2 /> */}
        </Suspense>
      </Canvas>
      <button style={{ position: "absolute", top: 0 }} id="button">
        Click To Enter
      </button>
    </>
  );
};
export default App;
