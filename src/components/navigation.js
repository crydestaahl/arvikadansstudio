import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'
import { useState } from 'react'
import instagram from './social-icons/instagram.svg'
import facebook from './social-icons/facebook.svg'

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
   
      <div className={styles.menuBtns}>
        <div className={styles.left}>
          <Link to="/" ><h2>Arvika Dansstudio</h2></Link>
        </div>
        <div className={styles.right}>
          <div onClick={() => setOpen(!isOpen)} className={styles.menuBtn} style={{ fontsize: 'xx-large' }}>
           {isOpen ? 'X' : '☰'} 
          </div>
        </div>
      </div>

    {isOpen && (
      <nav className={styles.overlay}  onClick={() => setOpen(!isOpen)}>
        
        <ul className={styles.overlayContent}>
          <li >
            <Link to="/"  onClick={() => setOpen(!isOpen)}>
              Hem
            </Link>
          </li>
          <li >
            <Link to="/dansstilar/" >
              Danskurser & klasser
            </Link>
          </li>
          <li >
            <Link to="/varalarare/" >
              Våra lärare
            </Link>
          </li>
          <li >
            <Link to="/dansstilar/" >
              Dansstilar
            </Link>
          </li>
          <li >
          <Link to="/omoss/" >
            Om oss
          </Link>
        </li>
          <li>
            <Link title="instagram" className="navbar-item" href="https://www.instagram.com/hindas_tennisklubb/">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em', margin: '0 auto' }}
              />
            </Link>
          </li>
          <li>
          <Link title="facebook" className="navbar-item" href="https://www.instagram.com/hindas_tennisklubb/">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '1em', height: '1em', margin: '0 auto' }}
            />
          </Link>
        </li>
        </ul>
      </nav>
      )}

      <Link to="/" className={`${styles.logoLink}`}>     
        <span className={styles.navigationItem}>Arvika Dansstudio</span>
      </Link>
      <ul className={`${styles.navigation} ${styles.hide}`}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Hem
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/dansstilar/" activeClassName="active">
            Danskurser & klasser
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/varalarare/" activeClassName="active">
            Våra lärare
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/dansstilar/" activeClassName="active">
            Dansstilar
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/omoss/" activeClassName="active">
            Om oss
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation