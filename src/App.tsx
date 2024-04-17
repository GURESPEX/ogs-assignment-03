import { AnimatePresence } from "framer-motion";
import RouterComponent from "@routes/RouterComponent";

const App = () => {
  return (
    <AnimatePresence>
      <RouterComponent />
    </AnimatePresence>
  );
};

export default App;
