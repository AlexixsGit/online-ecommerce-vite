import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = 'underline';
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shopping
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/all'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furniture'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to='/order'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/account'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Accounts
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sigin
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}
export { Navbar }