type FooterLink = {
    img: string;
    href: string;
};

type FooterProps = {
    copyrightMsg: string;
    FooterLinks: FooterLink[];
};


export default function Footer ({copyrightMsg, FooterLinks}:FooterProps) {

    return (
        <footer className="container">
            <div className="flex justify-between items-baseline pt-6 pb-6">
                <p className="text-[14px] text-thirdly font-semibold">{copyrightMsg}</p>
                <div className="flex justify-center items-center gap-6">
                    {FooterLinks.map(({img, href}) => (
                        <a href={href} key={href}><img src={img} alt="footer links" /></a>
                    ))}
                </div>
            </div>
        </footer>
    )
};