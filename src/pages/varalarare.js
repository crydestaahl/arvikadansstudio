import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import LararePreview from '../components/larare-preview'

class LararIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulLarare.nodes')
    console.log(posts)
    return (
      <Layout location={this.props.location}>
        <Seo title="Våra lärare" />
        <Hero title="Våra lärare" />
        <LararePreview posts={posts} />
      </Layout>
    )
  }
}

export default LararIndex

export const pageQuery = graphql`
  query VaraLarareIndexQuery {
    allContentfulLarare {
        nodes {
          title
          slug
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
  }
`
