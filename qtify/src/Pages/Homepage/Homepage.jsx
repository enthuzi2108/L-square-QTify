import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Section from '../../components/Section/Section';
import styles from './Homepage.module.css'
import { fetchFilters } from '../../api/api';

function Homepage(props) {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
   <div>
    <div className={styles.wrapper}>
      <Section title='Top Albums' data={topAlbums} type='album' />
      <Section title='New Albums' data={newAlbums} type='album' />
      <Section title='Songs' data={songs} filterSource={fetchFilters} type='song' />
    </div>
   </div>
  )
}

export default Homepage