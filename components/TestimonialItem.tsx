import styles from '../styles/testimonialitem.module.css';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function TestimonialItem({name, image, comment}: any) {

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className={`min-w-[20rem] min-h-[20rem] w-[15rem] h-[15rem] rounded-lg mx-2 px-2 ${styles.testimonialitem}`} data-aos = "flip-right">
            <div className={`w-full h-[45%] flex items-center justify-center`}>
                <img className={`w-[8.5rem] h-[8.5rem] rounded-full`} alt='' src={image} />
            </div>
            <div className={`w-full h-[45%] flex items-center justify-center`}>
                <p className={` text-center text-black`}>
                    {comment}
                </p>
            </div>
            <div className={`w-full h-[10%] flex items-center justify-center`}>
                <p className={` text-center font-bold text-[#1e95d4]`}>
                    {name}
                </p>
            </div>
        </div>
    )
}

export default TestimonialItem