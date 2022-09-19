import Footer from '../components/Footer'
import { Feedback } from '../components/Home/Feedback';
import { Reports } from '../components/Home/Reports';
import { Services } from '../components/Home/Services';
import Slider from '../components/Home/Slider';
import { Testimonials } from '../components/Home/Testimonials';
import V2section from '../components/Home/V2section';
import Video from '../components/Home/Video';
import Header from './../components/Header'
import test from './../components/test'

export default function Home() {
    
  return (
    <>
  
   <Slider/>
   <Video />
   <V2section/>
   <Services/>
   <Testimonials/>
   <Reports/>
   <Feedback/>
  
    </>
  );
};
