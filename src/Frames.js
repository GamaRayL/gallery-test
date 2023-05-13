import React, { useRef, useEffect } from "react";
import { Vector3, Quaternion } from "three";
import { useLocation, useRoute } from "wouter";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Frame from "./Frame";

const Frames = ({ images, q = new Quaternion(), p = new Vector3() }) => {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);

    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, 1.6 / 2, 16));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 14, 45);
      q.identity();
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  // console.log(q, p);

  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log(clicked.current);
    console.log(e.object.parent);
    setLocation(
      clicked.current === e.object.parent
        ? "/"
        : "/item/" + e.object.parent.name
    );
  };

  return (
    <group
      ref={ref}
      onClick={onClickHandler}
      onPointerMissed={() => setLocation("/")}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
};

export default Frames;
