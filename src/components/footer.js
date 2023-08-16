import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import Container from './container'
import * as styles from './footer.module.css'
import facebook from './social-icons/facebook.svg'
import instagram from './social-icons/instagram.svg'


const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulOmOss(id: {eq: "a55b58fd-46ec-5a21-9ecb-100229eb5ad5"}) {
        title
        body {
          raw
        }
      }
    }
  `);

  const content = data.contentfulOmOss;

  return (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.left}>
          <h3>{content.title}</h3>
          <div>
            {content.body && renderRichText(content.body)}
          </div>
          <div className={styles.socialLogos}>
          <a title="instagram" className={styles.instagram} href="https://www.instagram.com/dansstudionarvika/" target='_blank' rel="norefferer">
            <img
              src={instagram}
              alt="Instagram"
              />
          </a>
          <a title="facebook" className={styles.facebook} href="https://www.facebook.com/DansstudionArvika" target='_blank' rel="norefferer">
            <img
              src={facebook}
              alt="Facebook"
              />
          </a>
        </div>
        </div>
        <div className={styles.right}>
         
        </div>
        <div className={styles.footerText}>
          &middot;{' '}  Built with <a href="https://contentful.com/">Contentful</a> and{' '} <a href="https://gatsbyjs.com">Gatsby by Christoffer Rydeståhl</a> &middot;{' '}
          

        </div> 
      </div>
    </div>
  </Container>
)
}

export default Footer
