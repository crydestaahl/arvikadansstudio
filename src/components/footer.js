import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
    &middot;{' '}  Built with <a href="https://contentful.com/">Contentful</a> and{' '} <a href="https://gatsbyjs.com">Gatsby by Christoffer Rydeståhl</a> &middot;{' '}
    </div>
  </Container>
)

export default Footer
