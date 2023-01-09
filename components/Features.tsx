function Features() {
    return (
        <section className={`w-full h-[12rem] flex xs:overflow-scroll`} id = 'features'>
            <div className={`min-w-[25%] min-h-full w-[25%] h-full flex-flex-col xs:min-w-[15rem] xs:min-h-[9rem] xs:w-[15rem] xs:h-[9rem] xs:mx-2`}>
                <div className={`w-full h-[30%] p-2  flex items-center justify-center`}>
                    <h1 className = {`font-bold text-[#1e95d4] text-xl text-center`}>Easy To Use</h1>
                </div>
                <div className={`w-full h-[70%] px-2  flex items-center justify-center`}>
                    <p className = {`md:text-base text-center text-black xs:text-sm`}> With an easy-to-use interface, <strong>Attentive&trade;</strong> is easy to navigate for students and teachers alike</p>
                </div>
            </div>
            <div className={`min-w-[25%] min-h-full w-[25%] h-full flex-flex-col xs:min-w-[15rem] xs:min-h-[9rem] xs:w-[15rem] xs:h-[9rem] xs:mx-2`}>
                <div className={`w-full h-[30%] p-2  flex items-center justify-center`}>
                    <h1 className = {`font-bold text-[#1e95d4] text-xl text-center`}>Transparent</h1>
                </div>
                <div className={`w-full h-[70%] px-2  flex items-center justify-center`}>
                    <p className = {`md:text-base text-center text-black xs:text-sm`}>Say goodbye to examination or test malpractice and obscured marking schemes</p>
                </div>
            </div>
            <div className={`min-w-[25%] min-h-full w-[25%] h-full flex-flex-col xs:min-w-[15rem] xs:min-h-[9rem] xs:w-[15rem] xs:h-[9rem] xs:mx-2`}>
                <div className={`w-full h-[30%] p-2  flex items-center justify-center`}>
                    <h1 className = {`font-bold text-[#1e95d4] text-xl text-center`}>Highly Accessible</h1>
                </div>
                <div className={`w-full h-[70%] px-2  flex items-center justify-center`}>
                    <p className = {`md:text-base text-center text-black xs:text-sm`}>Literally anyone can get started with <strong>Attentive<sup>TM</sup></strong>. Download our app and get started.</p>
                </div>
            </div>
            <div className={`min-w-[25%] min-h-full w-[25%] h-full flex-flex-col xs:min-w-[15rem] xs:min-h-[9rem] xs:w-[15rem] xs:h-[9rem] xs:mx-2`}>
                <div className={`w-full h-[30%] p-2  flex items-center justify-center`}>
                    <h1 className = {`font-bold text-[#1e95d4] text-xl text-center`}>Unlimited Usecases</h1>
                </div>
                <div className={`w-full h-[70%] px-2  flex items-center justify-center`}>
                    <p className = {`md:text-base text-center text-black xs:text-sm`}> With its ERC-20 and 721-based grading  and credit system, <strong>Attentive&trade;</strong> has unlimited usecases</p>
                </div>
            </div>
            
        </section>
    )
}

export default Features