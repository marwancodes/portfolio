import emailjs from "@emailjs/browser"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        let errors = {};
        //name validate
        if (!formData.name) { errors.name = "Name is required!"; }
        //email validate
        if (!formData.email) {
            errors.email = "Email is required!";
        }else if (!/\S+@+\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        //message validate
        if (!formData.message) { errors.message = "Message id required"; }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors =validate();
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
        }else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_gw11s89", //Service ID
                    "template_dycvgt6", //Template ID
                    formData,
                    "JBsBk_QY8oX7XiMIf" //API public key
                )
                .then((response) => {
                    toast.success("Message sent successfully");  // toast is that library that you installed
                    setFormData({name: "", email: "", message: ""});
                })
                .catch((err) => {
                    console.log("FAILED...", err);
                    toast.error("Failed to send message. Please try again");
                })
                .finally(() => {
                    setIsSending(false);
                })
        }
    }

  return (
    <div className="p-4 lg:w-3/4" id="contact">
        <Toaster />
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="my-8 text-center text-4xl font-semibold tracking-tighter">Let's Connect
        </motion.h2>

        <form onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4">
                <div className="lg:w-1/2">
                    <input type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        placeholder="Name" 
                        onChange={handleChange} 
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                    />
                    {errors.name && (
                        <p className="text-sm text-rose-800">{errors.name}</p>
                    )}
                </div>
                <div className="lg:w-1/2">
                    <input type="email"
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        placeholder="Email" 
                        onChange={handleChange} 
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-blue-600 focus:outline-none"
                    />
                    {errors.email && (
                        <p className="text-sm text-rose-800">{errors.email}</p>
                    )}
                </div>
            </div>
            <div className="mb-4">
                    <textarea id="message" 
                        name="message" 
                        value={formData.message} 
                        placeholder="Message"
                        onChange={handleChange} 
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-blue-600 focus:outline-none" 
                        rows="6"
                    />
                    {errors.message && (
                        <p className="text-sm text-rose-800">{errors.message}</p>
                    )}
            </div>

            <button type="submit" className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 
                ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
        </form>
    </div>
  )
}

export default ContactForm