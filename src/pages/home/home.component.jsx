import Category from "../../components/categories/categories.component";
import styles from './home.module.scss'

import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Category />
        </>
    )
}

export default Home;