import CategoriesSlider from '../../categoriesSlider.component';
import CategoryItem from '../category-item/category-item.component';
import categories from '../../categories'
import styles from './categories.module.scss'

import { useEffect, useState } from 'react';

const Category = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    return (
            windowWidth <= 850 ? 
            <CategoriesSlider categories={categories} /> 
            : 
            <div className={styles.wrapper}>
                <div className={styles.categories_container}>
                    <CategoryItem categories={categories} /> 
                </div>
            </div>
    )
}

export default Category;