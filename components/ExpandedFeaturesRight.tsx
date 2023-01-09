function ExpandedFeaturesRight() {
    return (
        <section className={`w-full md:min-h-[22rem] flex md:flex-row my-[3rem] xs:flex-col `}>
            <div className={`md:w-[50%] h-full flex flex-col items-start justify-between p-2 xs:w-[98%]`}>
                <h1 className={`text-[2rem] font-[1000] text-[#1e95d4]`}>Easy And Transparent Grading System</h1>
                <p className={`text-black text-lg py-2`}>
                    Asides the beautiful and interactive webpage on the frontend, <strong>Attentive<sup>TM</sup></strong> is equipped with powerful smart contracts on the backend, that utilize ERC-20 based credit systems, the non-fungible ERC-721 (or NFT) based attendance and class invitation systems, and a powerfully automated grading system
                </p>
                <p className={`text-black text-lg py-2`}>
                    <strong>Attentive<sup>TM</sup></strong> is your one=stop solution to the future of electronic classroom systems with non-sensitive student data free, fair and open to many more upgrades that may include tuition fee payment systems and so much more
                </p>
            </div>
            <div className={`md:w-[50%] h-full flex items-center justify-center xs:w-[98%] `}>
                <img className={`h-full`} alt='' src='/images/ethereumLogo.svg' />
            </div>
        </section >
    )
}

export default ExpandedFeaturesRight