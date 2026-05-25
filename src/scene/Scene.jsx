import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import FloatingLaptop from "./FloatingLaptop";

export default function Scene(){

return(

<div
style={{
height:"500px",
width:"500px"
}}
>

<Canvas>

<ambientLight intensity={1}/>

<pointLight
position={[5,5,5]}
/>

<Float
speed={2}
rotationIntensity={1}
floatIntensity={2}
>

<FloatingLaptop/>

</Float>

</Canvas>

</div>

)

}