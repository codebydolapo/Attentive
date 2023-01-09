function ExpandedFeaturesRight() {
    return (
        <section className={`w-full md:min-h-[22rem] flex md:flex-row my-[3rem] xs:flex-col `}>
            <div className={`md:w-[50%] h-full flex flex-col items-start justify-between p-2 xs:w-[98%]`}>
                <h1 className={`md:text-[2rem] font-[1000] text-[#1e95d4] xs:text-lg`}>Easy And Transparent Etheruem-based Grading System</h1>
                <p className={`text-black md:text-lg py-2 xs:text-base`}>
                    Asides the beautiful and interactive webpage on the frontend, <strong>Attentive&trade;</strong> is equipped with powerful smart contracts on the backend that utilize ERC-20 based credit systems, the non-fungible ERC-721 (or NFT) based attendance/class invitation systems, and a powerfully automated grading system
                </p>
                <p className={`text-black md:text-lg py-2 xs:text-base`}>
                    <strong>Attentive&trade;</strong> is your one-stop solution to the future of electronic classroom systems. it is capable of holding non-sensitive student data that is accessible, fair and open to many more upgrades that may include tuition fee payment systems and so much more
                </p>
            </div>
            <div className={`md:w-[50%] h-full flex items-center justify-center xs:w-[98%] `}>
                <img className={`md:h-full xs:h-[15rem]`} alt='' src='/images/ethereumLogo.svg' />
            </div>
        </section >
    )
}

export default ExpandedFeaturesRight