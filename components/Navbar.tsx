import styles from "../styles/navbar.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger } from '../reducers/actions'
import { UserCircleIcon } from "@heroicons/react/solid"

interface HamburgerState {
    hamburgerState: boolean
}

function Navbar() {

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState() {
        if (hamburgerState == false) {
            dispatch(activateHamburger())
        } else if (hamburgerState == true) {
            dispatch(deactivateHamburger())
        }
    }


    return (
        <div className={`w-full h-[50px] flex flex-row`}>
            <div className={`w-1/2 h-full px-5 flex flex-row justify-start items-center`}>
                <img className={`md:w-[2.5rem] md:h-[2.5rem] rounded-full xs:w-[2rem] xs:h-[2rem]`} alt='' src='/images/education.png' />
                <h1 className={`md:text-[white] md:text-4xl font-oswald font-bold mx-2 xs:text-2xl uppercase tracking-wide xs:text-[#1e95d4]`}>attentive</h1>
            </div>
            <div className={`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
                <div className={`md:w-[2.2rem] xs:w-[3rem]`}>
                    <UserCircleIcon className={`text-[#000000d7] stroke-2`} />
                </div>
                <button className={`w-[10rem] md:h-[2.5rem] md:text-base text-white md:mx-5 bg-[#1e95d4] md:rounded-xl xs:rounded-lg xs:h-[2rem] xs:text-[0.7rem] xs:mx-2`}>Connect Wallet</button>
                {/* <div className={`${styles.hamburger}`} onClick={handleBurgerState}>
                    <div className={`${styles.line}`} id={`${hamburgerState && styles.line1}`}></div>
                    <div className={`${styles.middleLine}`} id={`${hamburgerState && styles.line2}`}></div>
                    <div className={`${styles.line}`} id={`${hamburgerState && styles.line3}`}></div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar