import { ContactShadows, OrbitControls } from "@react-three/drei";

import { NinjaMale } from "./NinjaMale";
import { Boxes } from "./Boxes";

export const Experience = () => {
	return (
		<>
			<OrbitControls
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={0}
				maxDistance={12}
				minDistance={8}
			/>
			<NinjaMale scale={1.4} />
			<ContactShadows
				opacity={0.5}
				scale={20}
			/>
			<Boxes />
		</>
	);
};
