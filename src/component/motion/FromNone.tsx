import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FromNone({ children, delay }: any) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{
          delay: delay ? delay * 0.5 : 3,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
