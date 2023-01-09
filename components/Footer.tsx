import Link from "next/link"


function Footer() {
    return (
        <div className={`w-full h-[10rem] my-[5rem] flex`}>
            <div className={`w-[50%] h-full flex items-center`}>
                <img className={`md:w-[4rem] md:h-[4rem] rounded-full xs:w-[2.5rem] xs:h-[2.5rem]`} alt='' src='/images/education.png' />
                <h1 className={`text-[#1e95d4] md:text-6xl font-oswald font-bold mx-2 xs:text-2xl uppercase tracking-wide`}>attentive</h1>
            </div>
            <div className={`w-[50%] h-full flex items-center justify-around`}>
                <Link href={`https://www.linkedin.com/in/dolapo-bashorun-8b5164225/`} passHref={true}>
                    <img className={`md:w-[4rem] md:h-[4rem] rounded-full cursor-pointer xs:w-[2rem] xs:h-[2rem] `} alt='' src='/images/linkedin.png' />
                </Link>
                <Link href={`https://github.com/codebydolapo/`} passHref={true}>
                    <img className={`md:w-[4rem] md:h-[4rem] rounded-full cursor-pointer xs:w-[2rem] xs:h-[2rem] `} alt='' src='/images/git.png' />
                </Link>
                <Link href={`https://twitter.com/the_transistorr`} passHref={true}>
                    <img className={`md:w-[4rem] md:h-[4rem] rounded-full cursor-pointer xs:w-[2rem] xs:h-[2rem] `} alt='' src='/images/twitter.png' />
                </Link>
            </div>
        </div>
    )
}

export default Footer