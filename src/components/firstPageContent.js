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
      <button class="button-52" role="button">Boka en kurs!</button>
    </div>
  </Container>
)

export default FirstPageContent
