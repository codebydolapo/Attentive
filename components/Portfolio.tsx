import PortfolioItem from "./PortfolioItem"
import styles from '../styles/portfolio.module.css'

function Portfolio(){
    return(
        <div className = {`w-full min-h-[100vh] h-auto flex justify-center align-center`}  id = 'portfolio'>
            <div className = {`w-[90%] h-full`}>
                <div className = {`w-full h-[15%] flex flex-row items-center justify-between px-[2em] border-2 border-grey`}>
                    <h1 className = {`text-2xl font-extrabold`}>My Portfolio</h1>
                    {/* <p className = {`text-[#3578e5]`}>See All</p> */}
                </div>
                <div className = {`w-full h-[85%] flex flex-wrap flex-row items-start justify-between ${styles.portfolioContainer}`}>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                    <PortfolioItem/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio