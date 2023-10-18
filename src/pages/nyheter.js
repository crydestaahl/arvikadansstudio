import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import NyheterPreview from '../components/nyheter-preview'

class NyheterIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulNyheter.nodes')
    console.log(posts)
    return (
      <Layout location={this.props.location}>
        <Seo title="Nyheter" />
        <Hero title="Nyheter" />
        <NyheterPreview posts={posts} />
      </Layout>
    )
  }
}

export default NyheterIndex

export const pageQuery = graphql`
  query NyheterIndexQuery {
    allContentfulNyheter(sort: { fields: [title], order: ASC }) {
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
  }
`