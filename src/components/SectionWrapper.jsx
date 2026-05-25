import { motion } from "framer-motion";

export default function SectionWrapper({children}){

return(

<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

>

{children}

</motion.div>

)

}