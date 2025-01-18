import { Outlet, Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import styles from './navigation.module.scss'

const Navigation = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.site_logo_container}>
                <img onClick={() => navigate("/")} src="https://i.ibb.co/K9W0R3B/Queens-Wears-3.png" alt="Queens-Wears-3" border="0" />
            </div>
            <div className={styles.menu_links}>
                <Link to="shop">shop</Link>
                <Link to="sign-in">sign in</Link>
                <div className={styles.cart_container}>
                    <FaCartShopping />
                    <span>40</span>
                </div>
                <div className={styles.cart_container}>
                    <FaHeart />
                    <span>20</span>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;