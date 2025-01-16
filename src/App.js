import styles from './categories.module.scss';
import CategoriesSlider from './categoriesSlider.component';

import { useEffect, useState } from 'react';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'boots',
      imageUrl: 'https://i.ibb.co/3TtbrR0/Solid-Color-Block-Heeled-Boot-27.webp'
    },
    {
      id: 2,
      title: 'flats',
      imageUrl: 'https://i.ibb.co/W69trdc/Rhinestone-Crisscross-Flat-Slides-14.webp'
    },
    {
      id: 3,
      title: 'heels',
      imageUrl: 'https://i.ibb.co/c14PP72/Beige-Stiletto-Heelwith-Ankle-Strap-24.webp'
    },
    {
      id: 4,
      title: 'sandals',
      imageUrl: 'https://i.ibb.co/r52d6Fy/Solid-Color-Flat-Sandal-11.webp'
    },
    {
      id: 5,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/CPfQbgC/Knit-Low-Top-Sneakers-20.webp'
    },
  ]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("Before: ", windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("After: ", windowWidth);

  return windowWidth <= 850 ? <CategoriesSlider categories={categories} /> : 
  (  
    <div className={styles.wrapper}>
      <div className={styles.categories_container}>
        {
          categories.map(({ id, title, imageUrl }) => {
            return (
              <div key={id} className={styles.category_container}>
                <img src={imageUrl} alt="Knit-Low-Top-Sneakers-20" border="0" />
                <div className={styles.category_body_container}>
                  <h2>{title}</h2>
                  <button className={styles.button}>Shop Now</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
