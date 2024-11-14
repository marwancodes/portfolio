import { EDUCATION } from "../constants";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <section className="py-8" id="education">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-4 text-3xl font-bold">Education
        </motion.h2>
        
        {EDUCATION.map((educa, index) => (
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index* 0.5 }}
                key={index} className="mb-6 p-10">
                <h3 className="text-xl font-semibold ">{educa.degree}</h3>
                <p className="text-lg">{educa.institution}</p>
                <p className="text-sm">{educa.duration}</p>
                <p className="mt-2">{educa.description}</p>
            </motion.div>
        ))}
    </section>
  )
}

export default Education