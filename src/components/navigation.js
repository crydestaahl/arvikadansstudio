import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>     
      <span className={styles.navigationItem}>Arvika Dansstudio</span>
    </Link>
    <ul className={styles.navigation}>
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

export default Navigation