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
      <a href="https://www.sv.se/sokresultat/?startindex=0&range=30&autoCompleteRange=100&distan[…]&phrase=dansstudion+arvika+&department=0&formIndex=0&scrollTop=0" rel="noopener"><button className="button-52" role="button">Boka en kurs!</button></a>
    </div>
  </Container>
)

export default FirstPageContent
