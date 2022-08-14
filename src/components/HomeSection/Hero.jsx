import { motion } from "framer-motion";
import lottie from "lottie-web";
import { useRef, useEffect } from "react";
import lottieAnimation from "assets/lottieAnimation.json";

const container = {
  hidden: { opacity: 0, translateY: 90 },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, translateY: 30 },
  show: { opacity: 1, translateY: 0 },
};

export function Hero() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: lottieAnimation,
    });

    return () => instance.destroy();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center my-12">
        <div className="flex md:flex-row flex-col gap-8 items-center justify-center max-w-screen-xl mx-auto py-20 px-8">
          <div className="relative">
            <motion.div
              className="w-[80%]"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item}>
                <h1 className="text-5xl md:text-6xl">
                  Welcome to the BlockChain World
                </h1>
              </motion.div>
              <motion.p
                variants={item}
                className="text-lg text-gray-400 md:max-w-[75%] mt-2 mb-8"
              >
                where you get to know everything about blockchain and bitcoin
                and more...
              </motion.p>
            </motion.div>
          </div>
          <motion.div
            className="max-w-[500px]"
            ref={lottieContainer}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </section>
    </>
  );
}
