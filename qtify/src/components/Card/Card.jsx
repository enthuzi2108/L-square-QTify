import React from 'react'
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

function Card( {data, type} ) {

  const getCard = (type) => {

    switch(type){

      case 'album': {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement='top' arrow>
            <a href={`/album/${slug}`}>
      
              <div className={styles.wrapper}>
      
                <div className={styles.card}>
                  <img src={image} alt="album" loading='lazy' />
                  <div className={styles.banner}>
                      <Chip label={`${follows} Follows`} size='small' />
                  </div>
                </div>
      
                <div className={styles.titleWrapper}>
                  <p className={styles.chip}>{title}</p>
                </div>
      
              </div>
            </a>
          </Tooltip>
        )
      }

      case 'song': {
        const { image, likes, title } = data;
        return (
              <div className={styles.wrapper}>
      
                <div className={styles.card}>
                  <img src={image} alt="album" loading='lazy' />
                  <div className={styles.banner}>
                      <Chip label={`${likes} Likes`} size='small' className={styles.pill} />
                  </div>
                </div>
      
                <div className={styles.titleWrapper}>
                  <p className={styles.chip}>{title}</p>
                </div>
      
              </div>
        )
      }

      default: {
        return <></>;
      }

    }

  };

  return getCard(type);

}

export default Card