
type NavLink = {
    label: string;
    href: string;
};

type NavProps = {
    name: string;
    links: NavLink[];
    loginLink: string;
    signupLink: string;
};


export default function Nav({name, links, loginLink, signupLink}:NavProps) {

    return (
            <div className="container">
               <nav className="flex justify-between items-center pt-7.5 pb-7.5">
                 {/* Logo & Links */}
                <div className="flex justify-center gap-19 items-center">
                    <h2 className="text-secondary font-bold text-[24px]">{name}</h2>

                    <ul className="flex justify-center items-center gap-5 text-[14px] font-semibold text-thirdly">
                        {links.map((link) => (
                            <li key={link.label}><a href={link.href}>{link.label}</a></li>
                        ))}
                    </ul>
                </div>
                {/* Auth */}
                <ul className="flex justify-center items-center gap-11">
                    <li><a href="#" className="font-bold text-primary text-[14px]">{loginLink}</a></li>
                    <li><a href="#" className="font-bold bg-primary text-white text-[14px] pl-6 pr-6 pt-3.5 pb-3.5 rounded-[5px]">{signupLink}</a></li>
                </ul>
               </nav>
            </div>
    )
};