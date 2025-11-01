import React from "react";
import styles from "./PopularPost.module.css";

const PopularPosts = () => {
  const popularPosts = [
    { id: 1, title: 'Vangio House By LWPAC in Canada', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
    { id: 2, title: 'Sunrise Expanse Hotel in USA', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' },
    { id: 3, title: 'Stargaze Resort & Spa in USA', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
    { id: 4, title: 'Royal Blossom Hotel & Spa in USA', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800' },
    { id: 5, title: 'Sunset Shack Hotel in Spain', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800' },
    { id: 6, title: 'Glorious Expanse Hotel in France', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800' }
  ];

  return (
    <section className={styles.popularSection}>
      <h2 className={styles.sectionTitle}>MOST POPULAR POSTS</h2>
      <div className={styles.popularGrid}>
        {popularPosts.map((post, index) => (
          <div
            key={post.id}
            className={`${styles.popularCard} ${styles[`float${(index % 3) + 1}`]}`}
          >
            <div className={styles.popularCardImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.popularCardContent}>
              <h3>{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;
