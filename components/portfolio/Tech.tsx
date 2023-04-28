import { SectionWrapper } from "../hoc";
import { technologies } from '../../utils/constants';
import BallCanvas from './canvas/BallCanvas';
import { useState, useEffect } from 'react';
import { styles } from "../../styles/styles";
import { motion } from 'framer-motion';
import { textVariant } from "../../motion";

const Tech = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false)

  useEffect(() => {
    if (window) {
      setWindowLoaded(true);
      setIsMobile(typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

      return () => setWindowLoaded(false);
    };
  }, []);

  const techsFilter = isMobile ? technologies.filter(technologie => technologie.mobile === true) : technologies;

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-left mb-24`}>
          Main Technologies.
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {
          windowLoaded && techsFilter.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon.src}/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")