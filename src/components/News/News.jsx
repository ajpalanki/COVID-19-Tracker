import React from 'react';
import styles from '../../App.module.css';
import cx from 'classnames';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';

const News = ({ data: { articles } }) => {
  if (articles === undefined) {
    return 'Loading...';
  }

  return (
    <React.Fragment>
      {articles.length > 0 ? (
        <h1 className={styles.newsHeader}>NEWS UPDATES</h1>
      ) : null}
      <div>
        <Grid container spacing={3} justify="center">
          {articles.length > 0
            ? articles.map((article) => (
                <Grid
                  key={article.title}
                  item
                  component={Card}
                  xs={12}
                  md={3}
                  className={cx(styles.card, styles.articles)}
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <CardContent>
                      <Typography variant="h5" align="center" color="secondary">
                        {article.source.name}
                      </Typography>
                      <Divider />
                    </CardContent>
                    <CardContent>
                      <Typography variant="body1" color="textPrimary">
                        {article.title}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {article.description}
                      </Typography>
                    </CardContent>
                  </a>
                </Grid>
              ))
            : null}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default News;
