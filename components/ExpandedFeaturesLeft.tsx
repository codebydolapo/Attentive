import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


function ExpandedFeaturesLeft() {

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return (
        <section className={`w-full md:min-h-[22rem] flex md:flex-row my-[3rem] xs:flex-col-reverse`}>
            <div className={`md:w-[50%] h-full flex items-center justify-center xs:w-[98%] `} data-aos = "fade-right">
                <img className={`md:h-full xs:h-[15rem]`} alt='' src='/images/database.svg' />
            </div>
            <div className={`md:w-[50%] h-full flex flex-col items-start justify-between p-2 xs:w-[98%] `} data-aos = "fade-left">
                <h1 className={`md:text-[2rem] font-[1000] text-[#1e95d4] xs:text-lg`}>Semi-Centralized Lecture Database Systems</h1>
                <p className={`text-black md:text-lg py-2 xs:text-base`}>While the recorded lectures themselves may exist on centralized database systems, each student upon sign up, will be assigned an ERC-721 token that carries their data and details.</p>
                <p className={`text-black md:text-lg py-2 xs:text-base`}>
                    This ERC-721 token that is unique to each student will be linked to how much credit they have gathered through the semester, as well other non-sensitive details. It will also provide an avenue for a strongly guarded database system that not only is secure, but is 100% immutable.
                </p>
            </div>
        </section>
    )
}

export default ExpandedFeaturesLeft