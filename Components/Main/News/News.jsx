import React from "react";
import styles from "./News.module.css";

const News = () => {
  const hotNews = [
    {
      id: 1,
      title: "Prophecy Hotel & Spa in Emirate",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil and It is a great way to decorate your outdoor. Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil and It is a great way to decorate your outdoor."
    },
    {
      id: 2,
      title: "Nebula Hotel in Spain",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks."
    },
    {
      id: 3,
      title: "Western Pyramid Resort in Egypt",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil and It is a great way to decorate your outdoor."
    },
    {
      id: 4,
      title: "Grand Meadows Resort in Maldives",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil."
    },
    {
      id: 5,
      title: "Wanderlust Resort in Tenerife",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil."
    },
    {
      id: 6,
      title: "Twin Sanctuary Hotel in Great Britain",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete."
    },
    {
      id: 7,
      title: "Prism Hotel in Ireland",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks."
    },
    {
      id: 8,
      title: "King's Shroud Resort in Spain",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      description:
        "Amazing Gabion Ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand."
    }
  ];

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>HOT NEWS</h2>
      <div className={styles.newsGrid}>
        {hotNews.map((news) => (
          <div key={news.id} className={styles.newsCard}>
            <div className={styles.newsCardImage}>
              <img src={news.image} alt={news.title} />
            </div>
            <div className={styles.newsCardContent}>
              <h3 className={styles.newsTitle}>{news.title}</h3>
              <p className={styles.newsDescription}>{news.description}</p>
              <p className={styles.extraText}>
                Amazing Gabion Ideas for Outdoors A Gabion is a cage box or
                cylinder filled with rocks, concrete, or sometimes sand and soil
                and It is a great way to decorate your outdoor. Amazing Gabion
                Ideas for Outdoors A Gabion is a cage box or cylinder filled with
                rocks, concrete, or sometimes sand and soil and It is a great way
                to decorate your outdoor.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
