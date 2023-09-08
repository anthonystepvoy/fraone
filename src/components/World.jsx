import { OrbitControls } from "@react-three/drei"
import { Scene } from "./Scene"
export const World = () => {
  return (
    <>
      <OrbitControls enableZoom={false} maxDistance={1.9} minDistance={1.9} minPolarAngle={1.7} maxPolarAngle={1.7} enablePan={false} />
    <Scene/>

    </>
  )
}