import CTA from "./CTA";

type HeroProps = {
    heading: string;
    info: string;
};


export default function Hero({heading, info}:HeroProps) {

    return (
        <section className="container hero" id="home">
            <div className="flex justify-center gap-4.5 flex-col pt-30 pb-20 max-w-[586px]">
                <h1 className="font-extrabold text-[58px] text-secondary">{heading}</h1>
                <p className=" text-thirdly text-[20px] font-medium">{info}</p>
                <CTA />
            </div>
        </section>
    )
};