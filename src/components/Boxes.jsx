import { useRef } from "react";
import { Instance, Instances } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

const Box = ({ scale, position, color, speed }) => {
	const ref = useRef();

	useFrame(() => {
		ref.current.position.z -= speed;
		if (ref.current.position.z < -50) ref.current.position.z = 10;
	});

	return (
		<Instance
			ref={ref}
			position={position}
			scale={scale}
			color={color}
		/>
	);
};

const DEFAUTL_BOX_COUNT = 1000;
const MAX_BOX_COUNT = 2000;

export const Boxes = () => {
	const { boxCount } = useControls({
		boxCount: {
			value: DEFAUTL_BOX_COUNT,
			min: 0,
			max: MAX_BOX_COUNT,
		},
	});

	const boxes = Array.from({ length: boxCount }, () => ({
		position: [
			THREE.MathUtils.randFloat(2, 20) *
				(THREE.MathUtils.randInt(0, 1) ? -1 : 1),
			THREE.MathUtils.randFloat(0.2, 10),
			THREE.MathUtils.randFloat(10, 50),
		],
		scale: THREE.MathUtils.randFloat(0.2, 1.2),
		color: new THREE.Color().setHSL(Math.random(), 1, 0.5),
		speed: THREE.MathUtils.randFloat(0.08, 0.42),
	}));

	return (
		<Instances
			count={boxCount}
			limit={MAX_BOX_COUNT}
		>
			<boxGeometry />
			<meshStandardMaterial />
			{boxes.map((box, idx) => (
				<Box
					key={idx}
					{...box}
				/>
			))}
		</Instances>
	);
};
