import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FromLeft({ children, delay }: any) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 2,
          delay: delay ? delay * 0.3 : 1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
