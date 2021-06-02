import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterItem.module.css';

interface Props {
  name: string;
  imageUrl: string;
  id: number;
}

const CharacterItem: React.FC<Props> = ({ name, imageUrl, id }) => {

  return (
    <div>
      <Link 
        to={`/detail/${id}`}
        className={styles.link} 
      >
        <figure>
          <img 
            src={imageUrl} 
            alt={name} 
            className={styles.img}/>
          <figcaption>{name}</figcaption>
        </figure>
      </Link>
      
    </div>
  )
}

export default CharacterItem
