import TestimonialItem from "./TestimonialItem";
import testimonials from "../data/testimonials";

function Testimonials() {
    return (
        <section className={`w-full h-[25rem] flex flex-col items-center justify-center md:overflow-hidden xs:overflow-scroll`}>
            <div className={`w-full h-[3rem] flex items-center justify-start px-2`}>
                <h1 className = {`font-bold text-[#1e95d4] text-2xl`}>Testimonials</h1>
            </div>
            <div className={`w-full h-[22rem] black flex items-center`}>
                {
                    testimonials.map(({name, comment, image})=>{
                        return <TestimonialItem
                        name =  {name}
                        comment = {comment}
                        image = {image}
                        key = {image}
                        />
                    })
                }
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
            </div>
        </section>
    )
}

export default Testimonials;