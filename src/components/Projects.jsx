import { MdArrowOutward } from "react-icons/md"
import { PROJECTS } from "../constants";
import { motion } from "framer-motion"; // animation with some hover


const Projects = () => {
  return (
    <section className="pt-20" id="projects">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 text-3xl text-center lg:text-4xl">Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    key={project.id} className="relative overflow-hidden group rounded-3xl">
                    <img src={project.image} alt={project.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-500 opacity-0 backdrop-blur-lg group-hover:opacity-100">
                        <h3 className="mb-2 text-xl">{project.name}</h3>
                        <p className="p-4 mb-12">{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-black bg-white rounded-full hover:bg-gray-300 w-[170px]">
                            <div className="flex items-center justify-center">
                                <span>View on GitHub</span>
                                <MdArrowOutward />
                            </div>
                        </a>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 mt-1 text-white rounded-full bg-rose-500 hover:bg-rose-600 w-[170px]">
                            <div className="flex items-center justify-center">
                                <span>Live Preview</span>
                                <MdArrowOutward />
                            </div>
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Projects