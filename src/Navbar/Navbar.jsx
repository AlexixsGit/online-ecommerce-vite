import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopping
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furniture'>
                        Furniture
                    </NavLink>
                </li>
            </ul>
            
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to='/order'>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/account'>
                        Accounts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        Others
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Sigin
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}
export { Navbar }