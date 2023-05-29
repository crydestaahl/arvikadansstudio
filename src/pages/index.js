import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import FirstPageContent from '../components/firstPageContent'
import InstagramFeed from '../components/instagramFeed'
import FacebookFeed from '../components/facebookFeed'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const text = get(this, 'props.data.contentfulHomePageText.text')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.gatsbyImage}
          title={author.name}
          content={author.shortBio}
        />
        <FirstPageContent content={text} />
        <ArticlePreview posts={posts} />
        <InstagramFeed />
        <FacebookFeed />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
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
