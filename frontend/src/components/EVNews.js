import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';

const EVNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=EV%20OR%20EV%20charging%20station&token=${process.env.REACT_APP_GNEWS_API_KEY}&lang=en&pageSize=10` // Fetch 10 articles
      );

      // Check if the response is ok
      if (!response.ok) {
        console.error('Response status:', response.status);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.articles) {
        setNews(data.articles);
      } else {
        throw new Error('No articles found');
      }
    } catch (error) {
      console.error('Error fetching the news:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" style={{ margin: '20px 0' }}>
        Latest EV News
      </Typography>
      <Grid container spacing={3}>
        {news.slice(0, 6).map((article, index) => (  // Limit to 9 articles
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={article.image || 'https://via.placeholder.com/140'}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Published on: {new Date(article.publishedAt).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={article.url} target="_blank">
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
    </Container>
  );
};

export default EVNews;
