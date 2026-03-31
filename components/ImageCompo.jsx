import { motion } from 'framer-motion';

export default function ImageCompo() {
    return (
        <>
            <motion.div className="flex flex-col items-center mt-0 p-8 mt-64 h-full"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
            >
                <img src="face.png" alt="" className='h-108 w-65' />
            </motion.div>
        </>
    )
}