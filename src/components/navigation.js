import React from 'react'
import { Link } from 'gatsby'
import * as styles from './navigation.module.css'
import { useState } from 'react'

function Navigation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
   
      <div className={styles.menuBtns}>
        <div className={styles.left}>
          <Link to="/" >Arvika Dansstudio</Link>
        </div>
        <div className={styles.right}>
          <div onClick={() => setOpen(!isOpen)} className={styles.menuBtn}>
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
            <Link to="/omoss/" >
              Om oss
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
          <Link to="/omoss/" activeClassName="active">
            Om oss
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
      </ul>
    </nav>
  )
}

export default Navigation