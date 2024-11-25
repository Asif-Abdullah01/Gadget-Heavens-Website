
const Footer = () => {
    return (
        <div>

            <div className="text-center py-8 space-y-4">
                <h2 className="text-4xl font-bold">Gadget Heaven</h2>
                <p className="text-slate-500 text-xl">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <div className="divider w-10/12 mx-auto"></div>

            <div className="flex justify-around w-full mx-auto py-8">
            <nav>
                <h6 className="text-[#09080F] font-bold text-xl">Services</h6>
                <a className="link link-hover block">Branding</a>
                <a className="link link-hover block">Design</a>
                <a className="link link-hover block">Marketing</a>
                <a className="link link-hover block">Advertisement</a>
            </nav>
            <nav>
                <h6 className="text-[#09080F] font-bold text-xl">Company</h6>
                <a className="link link-hover block">About us</a>
                <a className="link link-hover block">Contact</a>
                <a className="link link-hover block">Jobs</a>
                <a className="link link-hover block">Press kit</a>
            </nav>
            <nav>
                <h6 className="text-[#09080F] font-bold text-xl">Legal</h6>
                <a className="link link-hover block">Terms of use</a>
                <a className="link link-hover block">Privacy policy</a>
                <a className="link link-hover block">Cookie policy</a>
            </nav>
            </div>

        </div>
    );
};

export default Footer;