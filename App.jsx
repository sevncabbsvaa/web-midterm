//header componentine bax!!! 
// -> 
// buradada componentleri comment ile yazmisam baxa bilersiz..


import React, { useState } from 'react';
import styles from './App.module.css';
import PopularPosts from './Components/Main/PopularPost';

// Header Component
const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <nav className={styles.headerNav}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
            
              <span className={styles.logoText}>Architect</span>
            </div>
            
            <div className={styles.headerMenu}>
              <a href="#" className={`${styles.menuLink} ${styles.menuLinkHover}`}>HOVER</a>
              <a href="#" className={`${styles.menuLink} ${styles.menuLinkHome}`}>HOME</a>
              <a href="#" className={styles.menuLink}>ARCHITECTURE DESIGN</a>
              <a href="#" className={styles.menuLink}>STRANGE BUILDINGS</a>
              <a href="#" className={styles.menuLink}>MAGAZINE</a>
              <a href="#" className={styles.menuLink}>BLOG</a>
              <a href="#" className={styles.menuLink}>NEWS</a>
            </div>

            <button className={styles.searchBtn}></button>

            <button 
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <a href="#" className={`${styles.mobileLink} ${styles.mobileLinkHover}`}>HOVER</a>
              <a href="#" className={styles.mobileLink}>HOME</a>
              <a href="#" className={styles.mobileLink}>ARCHITECTURE DESIGN</a>
              <a href="#" className={styles.mobileLink}>STRANGE BUILDINGS</a>
              <a href="#" className={styles.mobileLink}>MAGAZINE</a>
              <a href="#" className={styles.mobileLink}>BLOG</a>
              <a href="#" className={styles.mobileLink}>NEWS</a>
            </div>
          )}
        </div>
      </nav>

      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            THE LATEST NEWS ON DESIGN & ARCHITECTURE
          </h1>
          <div className={styles.heroButtons}>
            <button className={`${styles.heroBtn} ${styles.heroBtnSubscribe}`}>
              Subscribe Now
            </button>
            <button className={`${styles.heroBtn} ${styles.heroBtnArticles}`}>
              Best Articles
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// PopularPosts Component
<PopularPosts/>
// Clients Component
const Clients = () => {
  const clients = [
    { name: 'NATIONAL POST', style: 'serif' },
    { name: 'Dryme', style: 'cursive' },
    { name: 'HOUSE & HOME', style: 'sans' },
    { name: 'Journy', style: 'cursive' }
  ];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.clientsOverlay}></div>
      <div className={styles.clientsContent}>
        <h2 className={styles.sectionTitle}>OUR MOST POPULAR CLIENTS</h2>
        <div className={styles.clientsGrid}>
          {clients.map((client, idx) => (
            <div key={idx} className={`${styles.clientName} ${styles[`client${client.style.charAt(0).toUpperCase() + client.style.slice(1)}`]}`}>
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// TopRated Component
const TopRated = () => {
  const images = [
    'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=600',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600'
  ];

  return (
    <section className={styles.topRatedSection}>
      <h2 className={styles.sectionTitle}>TOP RATED</h2>
      <div className={styles.topRatedGrid}>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Top rated ${idx + 1}`} className={styles.topRatedImage} />
        ))}
      </div>
    </section>
  );
};

// News Component
const News = () => {
  const hotNews = [
    { id: 1, title: 'Prophecy Hotel & Spa in Emirate', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil and it is a great way to decorate your outdoor.' },
    { id: 2, title: 'Nebula Hotel in Spain', image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks.' },
    { id: 3, title: 'Western Pyramid Resort in Egypt', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil and it is a great way to decorate your outdoor.' },
    { id: 4, title: 'Grand Meadows Resort in Maldives', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil.' },
    { id: 5, title: 'Wanderlust Resort in Tenerife', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand and soil.' },
    { id: 6, title: 'Twin Sanctuary Hotel in Great Britain', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete.' },
    { id: 7, title: 'Prism Hotel in Ireland', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks.' },
    { id: 8, title: "King's Shroud Resort in Spain", image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', description: 'Amazing Gabion ideas for Outdoors A Gabion is a cage box or cylinder filled with rocks, concrete, or sometimes sand.' }
  ];

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>HOT NEWS</h2>
      <div className={styles.newsGrid}>
        {hotNews.map(news => (
          <div key={news.id} className={styles.newsCard}>
            <div className={styles.newsCardImage}>
              <img src={news.image} alt={news.title} />
            </div>
            <div className={styles.newsCardContent}>
              <h3 className={styles.newsTitle}>{news.title}</h3>
              <p className={styles.newsDescription}>{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
           All Rights Reserved © 2014  architect.com - Interior Design & Architecture Magazine
        </p>
        <p>muellim 20 bal Allah rizasi ucun</p>
        
      </div>
    </footer>
  );
};

//buralara fikir vermiyin mecburiyyet

// Main Component
const Main = () => {
  return (
    <main>
      <PopularPosts />
      <Clients />
      <TopRated />
      <News />
    </main>
  );
};

// App Component
const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.app}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;


//yuxarida dediyim sebebe gore bele oldu yoxsa daha gozel seyler duzelderdim. nezere alsaz cox sevinerem. her birini ayri component kimi dusunun.. hormetle Frontend Developer Sevinc Abbasova <3
//🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏🙏