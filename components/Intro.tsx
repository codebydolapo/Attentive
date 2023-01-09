import Link from "next/link"

function Intro(){
    return(
        <section className = {`w-[100vw] h-[90vh] flex items-center justify-center`}>
            <div className = {`md:w-[70%] min-h-[30rem] flex flex-col items-center justify-center xs:w-[98%] `}>
                <h1 className = {`md:text-[4rem] font-[1000] text-[#1e95d4] text-center xs:text-[2.5rem]`}>Where Teaching And Learning Come Together</h1>
                <p className = {`md:w-[90%] mt-[2rem] text-center text-[#000000] tracking-wide xs:w-full`}><strong>Attentive&trade;</strong> is an Ethereum-based e-classroom solution that facilitates learning, and a grading system that is free, fair and transparent.</p>
                <p className = {`md:w-[90%] text-center text-[#000000] tracking-wide xs:w-full`}>Everything from attendance, to continous assessment scores, to examinations is immutable, freely accessible and 100% credible.</p>
                <div className = {`md:w-[70%] h-[4rem] my-[2rem] flex items-center justify-around xs:w-full`}>
                <Link href = {`/#features`}>
                    <button className = {`md:w-[15rem] md:text-base h-[3rem] bg-[#1e95d4] text-white rounded-lg xs:w-[48%] xs:text-sm`}>Explore Options</button>
                </Link>
                    <Link href = {`https:wa.me/+2348164394476/?text=hello/`} passHref = {true}>
                    <button className = {`md:w-[15rem] md:text-base h-[3rem] text-black rounded-lg xs:w-[48%] xs:text-sm bg-[#bebdbda1]`}>Contact Representative</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Intro