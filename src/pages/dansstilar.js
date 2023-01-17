import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import DansstilarContent from '../components/dansstilar-content'

class DansstilarPage extends React.Component {
  render() {
    const text = get(this, 'props.data.contentfulDansstilar.content')

    return (
      <Layout location={this.props.location}>
        <Seo title="Dansstilar" />
        <Hero title="Dansstilar" />
        <DansstilarContent content={text} />
      </Layout>
    )
  }
}

export default DansstilarPage

export const pageQuery = graphql`
query MyQuery {
  contentfulDansstilar {
    content {
      raw
    }
  }
}
`
