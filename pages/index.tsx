import type { NextPage } from 'next';

import { PropsPostNode } from '../interfaces';
import { Hero, About, Tech, Works, Contact, Experience, StarsCanvas } from '../components';

const Home: NextPage<PropsPostNode> = () => (
  <> 
    <Hero/>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
  </>
)
export default Home;
