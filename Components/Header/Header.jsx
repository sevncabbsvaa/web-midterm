//oxu ->
//Muellim men istedimki component strukturu ile yazim amma cox vaxt aparacaqdi hemde o qeder vaxt yoxuydu deye birdefelik yazdim..... bunlarida silmedimki nezere alarsiz )
//icon componentinede bax!

import styles from './Header.module.css'

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <>
      <nav className={styles.headerNav}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
              <div className={styles.logoIcon}>A</div>
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

            <button className={styles.searchBtn}>🔍</button>

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

export default Header;