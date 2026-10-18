import CTA from "./CTA";

type Advices = {
    img: string;
    advice: string;
};

type AdviceProps = {
    heading: string;
    info: string;
    Advices: Advices[];
};



export default function Advice ({heading, info, Advices}:AdviceProps) {

    return (
        <section className="container bg-[#FAFAFA]" id="advice">
            <div className="flex flex-col gap-2.5 pb-20 pt-20">
                <h1 className="font-bold text-secondary text-[40px]">{heading}</h1>
            <p className="font-medium text-[20px] text-thirdly max-w-[493px]">{info}</p>
            <div className="flex mt-16 flex-wrap gap-7.5">
                {Advices.map((advice) => (
                    <div className="flex justify-center items-center gap-3.5 text-thirdly rounded-xs bg-white pt-5 pb-5 pl-5 pr-28" key={advice.advice}>
                        <img src={advice.img} alt="advice" />
                        <h3>{advice.advice}</h3>
                    </div>
                ))};
            </div>
            <CTA />
            </div>
        </section>
    )
};