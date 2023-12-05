import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from './container'
import * as styles from './global.css'

const FirstPageContent = ({ content }) => (
  <Container>
    <div className={styles.details}>
      {content && (
        <body className={styles.content}>{renderRichText(content)}</body>
      )}
      <a href="https://www.sv.se/avdelningar/sv-varmland/kontor-start/arvika/dansstudion-i-arvika/" rel="noopener"><button className="button-52" role="button">Boka en kurs!</button></a>
    </div>
  </Container>
)

export default FirstPageContent
