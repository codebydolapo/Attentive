import styles from '../styles/skillsitem.module.css'

function SkillsItem(){
    return(
        <div className = {`w-[15rem] h-[20rem] mx-5 my-5 border-2 border-grey flex flex-col justify-center items-center rounded-xl relative ${styles.skillsitem}`}>
           <img src = '/icons/reactIcon.png' className = {`w-auto h-[7rem] mb-2`} alt = ''/>
           <p className = {`text-base font-bold`}>React-Js</p>
           <img src = '/icons/medalIcon.png' className = {`w-auto h-[3rem] mb-2 absolute bottom-2 left-2`} alt = ''/>

        </div>
    )
}

export default SkillsItem