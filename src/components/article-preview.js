import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import * as styles from './article-preview.module.css'
import Fade from 'react-reveal/Fade';

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
        <ul className={styles.articleList}>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link to={`/omoss/${post.slug}`} className={styles.link}>
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImage} />
                  <Fade left>
                    <h2 className={`${styles.title} titles`}>{post.title}</h2>
                  </Fade>
                </Link>
                <div>
                  {post.description?.raw && renderRichText(post.description)}
                </div>            
              </li>
            )
          })}
        </ul>
    </Container>
  )
}

export default ArticlePreview
