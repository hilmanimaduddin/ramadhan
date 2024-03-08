import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FallingLetter({ children, delay }: any) {
  const [ref, inView] = useInView();

  const letters = children.split("");

  return (
    <Box display={"flex"} ref={ref}>
      {letters.map((letter: any, index: number) => (
        <motion.div
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 0.5,
            delay: delay ? delay * 0.5 + index * 0.1 : 2 + index * 0.1,
          }}
          style={{ whiteSpace: "pre" }} // Menggunakan whiteSpace: "pre" agar spasi dapat terbaca
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.div>
      ))}
    </Box>
  );
}
