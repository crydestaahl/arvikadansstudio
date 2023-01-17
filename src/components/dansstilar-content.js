import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'

const DansstilarContent = ({ content }) => {
    console.log(content)
  return (
    <Container>      
        <div>
       {renderRichText(content)}
        </div> 
        <button class="button-52" role="button">Boka en kurs!</button>
    </Container>
  )
}

export default DansstilarContent


