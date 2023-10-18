import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import NyheterPreview from '../components/nyheter-preview'
import FirstPageContent from '../components/firstPageContent'
import InstagramFeed from '../components/instagramFeed'
import Fade from 'react-reveal/Fade';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulOmOss.nodes')
    const news = get(this, 'props.data.allContentfulNyheter.nodes')
    const [author] = get(this, 'props.data.allContentfulIndex.nodes')
    const text = get(this, 'props.data.contentfulHomePageText.text')

    return (
      <Layout location={this.props.location}>
        <Fade>
          <Hero
            image={author.heroImage.gatsbyImage}
            title={author.name}
            content={author.shortBio}
          />
        </Fade>
        <FirstPageContent content={text} />
        Nyheter
        <NyheterPreview posts={posts} />
        <ArticlePreview posts={news} />
        <InstagramFeed />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulOmOss(sort: { fields: [title], order: ASC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulNyheter(sort: { fields: [title], order: ASC }) {
      nodes {
        title
        slug
        publishDate(formatString: "Do, MMMM, YYYY")
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulIndex(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        heroImage: image {
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
    contentfulHomePageText {
      text {
        raw
      }
    }
  }
`
