type TestimonialCardProps = {
    img: string;
    name: string;
    job: string;
    ratings: string;
    msg: string;
};

export default function TestimonialCard({ img, name, job, ratings, msg }: TestimonialCardProps) {

    return (
        <div className="flex items-center gap-7.5">
            <img src={img} alt={img} />
            <div className="flex flex-col gap-3.5">
                <div className="flex flex-col">
                    <h3 className="font-bold text-[24px] text-secondary">{name}</h3>
                    <h5 className="font-semibold text-[14px] text-secondary">{job}</h5>
                </div>
                <img src={ratings} alt="ratings" className="h-5 ml-[-65px]"/>
                <p className="text-thirdly text-[16px] font-medium max-w-[242px]">{msg}</p>
            </div>
        </div>
    )
};