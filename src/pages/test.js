import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import FirstPageContent from '../components/firstPageContent'
import InstagramFeed from '../components/instagramFeed'

class Test extends React.Component {
  render() {

    return (
        <div>
            <InstagramFeed />
        </div>
    )
  }
}

export default Test