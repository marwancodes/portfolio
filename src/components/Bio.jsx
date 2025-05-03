import { BIO } from "../constants";
import {  motion } from "framer-motion"; // animatio


const Bio = () => {
  return (
    <section className="flex flex-col max-w-4xl gap-12 pt-12" id="bio">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl text-center lg:text-4xl">Bio
        </motion.h2>
        
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
            {BIO.map((bio, index) => (
                <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index* 0.5 }}
                    key={index} className="mb-4 text-lg lg:text-xl">
                    {bio}
                </motion.p>
            ))}
        </motion.div>
    </section>
  )
}

export default Bio