import styles from './category-item.module.scss';

const CategoryItem = ({ categories }) => {
    return (
        categories.map(({ id, title, imageUrl }) => {
            return (
                <div key={id} className={styles.category_container}>
                    <img src={imageUrl} alt={title} border="0" />
                    <div className={styles.category_body_container}>
                        <h2>{title}</h2>
                        <button className={styles.button}>Shop Now</button>
                    </div>
                </div>
            )
        })
    )
}

export default CategoryItem;