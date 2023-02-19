import Form from "./Form";
import ResultsMap from "./ResultsMap";
import { motion as m } from "framer-motion"

const Main = () => {
  return (
    <m.div
      transition={{ duration: 1.2 }}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Form />
      <ResultsMap />
    </m.div>
  );
};

export default Main;
