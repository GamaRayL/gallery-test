import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, PointerLockControls } from "@react-three/drei";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import Plane from "./Plane";
import Wall from "./Wall";
import WallClassic from "./models/WallClassic";

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);

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
          <Plane />
          <WallClassic />
          <group>
            <Wall position={[0, 20, -50]} />
            <Wall position={[50, 20, 0]} rotation={[0, -Math.PI * 0.5, 0]} />
            <Wall position={[0, 20, -50]} />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={50}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
              />
            </mesh>
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
