import React, { useState, useEffect, Component } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Container from './container'

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            caption            
            localFile {
              childImageSharp {
                fixed(width: 250, height: 250) {
                  ...GatsbyImageSharpFixed
                }    
              }          
            }
            timestamp  
          }
        }
      }
    }
  `);

  const posts = data.allInstaNode.edges;

  const sortedPosts = posts.slice().sort((a, b) => {
    return b.node.timestamp - a.node.timestamp;
  });

  const firstFivePosts = sortedPosts.slice(0, 5);

  return (
    <div>
    <div className="socialFeedTitle">
      <h1>Följ oss på sociala medier!</h1>
    </div>
    <div className="socialFeed">
      {firstFivePosts.map((post, index) => (
        <div key={index} className="socialItem">
          <a href="https://www.instagram.com/dansstudionarvika/" target="_blank" rel="noopener"><img src={post.node.localFile.childImageSharp.fixed.src} alt={post.node.caption} className="socialImg"/>       </a>   
        </div>
      ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
{/*}
const InstagramFeed = () => {
  const [instagramData, setInstagramData] = useState([]);
  const accessToken = process.env.REACT_APP_INSTAGRAM_USER_TOKEN
  console.log('Access Token from Environment Variable:', accessToken);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
      );
      const data = await response.json();
      setInstagramData(data.data.slice(0, 5));
      console.log(instagramData);
    };
    fetchData();
  }, []);

  if (!instagramData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
    <h1>Följ oss på sociala medier!</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {instagramData.map((post) => (
              <div key={post.id} style={{ maxWidth: '215px', margin: '2rem' }}>
                  <a href="https://www.instagram.com/crydestaahl/" target="_blank">
                      <div style={{ maxWidth: '215px' }}>
                          <img src={post.media_url} alt={post.caption} style={{ width: '175px', hight: '175px' }}/>
                          <p style={{ maxWidth: '175px' }}>{post.caption}</p>
                      </div>
                  </a>
              </div>
          ))}
      </div>
      <div>
      </div>
    </Container>
  );
};

export default InstagramFeed;
*/}