import React from 'react'
import { SectionWrapper } from "../hoc";
import { technologies } from '../../utils/constants';
import BallCanvas from './canvas/BallCanvas';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon.src}/>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "tech")