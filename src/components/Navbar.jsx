import { ButtonPrincipal } from "./ButtonPrincipal"

export const Navbar = () => {
    return (
        <header>
            <nav className='py-7 px-16 flex justify-between items-center'>
                <h1 className="text-3xl font-extrabold">Streetreats</h1>
                <div className="flex gap-14 items-center">
                    <ul className="flex gap-7 font-semibold cursor-pointer">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Our Stores</li>
                        <li>Contact Us</li>
                    </ul>
                    <ButtonPrincipal name="Login" />
                </div>
            </nav>
        </header>
    )
}
