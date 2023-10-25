import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.svg";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import SearchBar from "@/shared/SearchBar";
import "./index.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 bg-cover bg-no-repeat py-10 md:h-[70%] md:pb-0"
      style={{ backgroundImage: `url(${HomePageText})` }}
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-full items-center  justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex items-center">
              <HText>Connect with experienced</HText>
              <span className="text-secondary-500">
                <ul className="dynamic-txts">
                  <li>
                    <span className="basis-3/5 font-montserrat text-4xl font-bold">
                      Electrician
                    </span>
                  </li>
                  <li>
                    <span className="basis-3/5 font-montserrat text-4xl font-bold">
                      Plumber
                    </span>
                  </li>
                  <li>
                    <span className="basis-3/5 font-montserrat text-4xl font-bold">
                      Painter
                    </span>
                  </li>
                  <li>
                    <span className="basis-3/5 font-montserrat text-4xl font-bold">
                      Carpenter
                    </span>
                  </li>
                </ul>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <SearchBar />
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className=" 
              md:ml-60 md:mt-16 md:justify-items-end"
        />
      </motion.div>
    </section>
  );
};

export default Home;
