import styles from '../styles/mainbody.module.css'
import Menu from './Menu'
import Intro from './Intro';
import Features from './Features';
import ExpandedFeaturesRight from './ExpandedFeaturesRight';
import ExpandedFeaturesLeft from './ExpandedFeaturesLeft';
import Testimonials from './Testimonials';
import Footer from './Footer';



function Mainbody(){

    

    return(
        <div className = {`w-[100vw] min-h-[100vh] h-auto mt-[50px] text-[#000000a9] ${styles.mainbody}`}>
            <Menu/> 
            <Intro/>
            <Features/>
            <ExpandedFeaturesRight/>
            <ExpandedFeaturesLeft/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Mainbody;