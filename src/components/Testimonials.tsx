import leslie from '../assets/leslie.png';
import savannah from '../assets/savannah.png';
import ratings from '../assets/ratings.svg';
import TestimonialCard from "./TestimonialCard";

type TestimonialsProps = {
    heading: string;
    info: string;
};

export default function Testimonials({ heading, info }: TestimonialsProps) {

    return (
        <section className="container bg-white" id='testimonials'>
            <div className="flex justify-center items-center flex-col gap-11 pt-12.5 pb-24">

                <div className="flex flex-col text-center gap-2">
                    <h2 className="text-[40px] font-bold text-secondary">{heading}</h2>
                    <p className="font-medium text-[20px] text-thirdly max-w-[649px]">{info}</p>
                </div>

                <div className="flex justify-center items-center gap-7.5">
                    <TestimonialCard img={leslie} name='Leslie Alexander' job='Medical Assistant' ratings={ratings} msg='This proved to be impossible using concepts of space and time. Einstein new view of time first and then'/>
                    <TestimonialCard img={savannah} name='Savannah Nguyen' job='Nursing Assistant' ratings={ratings} msg='This proved to be impossible using concepts of space and time. Einstein new view of time first and then'/>
                </div>
            </div>
        </section>
    )
};