import { motion } from "framer-motion";
import { ReactNode } from "react";

export const pageTransition = (page: ReactNode) => {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {page}
    </motion.div>
  );
};
