import Category from "../../components/categories/categories.component";
import styles from './home.module.scss'

const Home = () => {
    return (
        <>
            <div className={styles.site_logo_container}>
                <img src="https://i.ibb.co/K9W0R3B/Queens-Wears-3.png" alt="Queens-Wears-3" border="0" />
            </div>
            <Category />
        </>
    )
}

export default Home;