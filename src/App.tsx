import { AnimatePresence } from "framer-motion";
import RouterComponent from "@routes/RouterComponent";
import { pageTransition } from "@transitions/transitions";

const App = () => {
  return (
    <AnimatePresence>{pageTransition(<RouterComponent />)}</AnimatePresence>
  );
};

export default App;
