import React, { useState, useEffect, Component } from "react";
import Container from './container'

const InstagramFeed = () => {
  const [instagramData, setInstagramData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGQVJVYkp3NzJDTmdEREtvM1RsMkhrdFdKTTJKaS1FNm1aSEY0V0RScmt1QTdDMWxSSWNRR1ZApQ29zZAV95SmVmMnFRcHZA1c1BTdmJiczZA3YTJnazc0WlBiZAXpGcU96RGZAvMlFsNG5WREJxRFZASb1hPZAAZDZD`
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
                  <a href="https://www.instagram.com/crydestaahl" target="_blank">
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
