import styles from './categoriesSlider.module.scss'


import { useEffect, useRef } from 'react';
// Import Swiper React components

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import { register } from 'swiper/element/bundle';

register();

const CategoriesSlider = ({ categories }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      spaceBetween: 0,
      // slidesPerView: 3,
      navigation: true,
      pagination:{ clickable: true },
      scrollbar:{ draggable: true },
      breakpoints: {
        740: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
        390: {
          slidesPerView: 1,
        }
      },
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: #ffc0cb;
          }
          .swiper-pagination-bullet-active {
            background: #ffc0cb;
          }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, [])

  return (
        <div className={styles.categories_container}>
        { 
          categories ? <swiper-container
          ref={swiperRef}
          init="false"
          >
            {
              categories.map(({ id, title, imageUrl }) => {
                return (
                  <swiper-slide key={id}>
                    <div className={styles.category_container}>
                      <img src={imageUrl} alt="Knit-Low-Top-Sneakers-20" border="0" />
                      <div className={styles.category_body_container}>
                        <h2>{title}</h2>
                        <button className={styles.button}>Shop Now</button>
                      </div>
                    </div>
                  </swiper-slide>
                )
              })
            } 
          </swiper-container> : 
          <h2> No categories</h2>
        }
        </div> 
  );
}

export default CategoriesSlider;