import React from 'react';
import './BookCards.scss';

const BookCards = ({ volumeInfo }) => {
  const { title, authors, imageLinks, infoLink, publisher } = volumeInfo;
  let thumbnailImg = imageLinks ? imageLinks.thumbnail : require('../assets/book_placeholder.png');
  let publisherText = publisher ? publisher : 'Нет данных';
  let authorText = authors && authors.length === 1 ? authors[0] : 'Нет данных';

  return (
    <div className='book-card--container'>
      <img className='book-card--img' alt='book' src={thumbnailImg} />
      <div className='book-card--info--container'>
        <div className='book-card--info'>
          <h2 className='book-card--title'>{title}</h2>
          <h3 className='book-card--subtext'>{`Автор: ${authorText}`}</h3>
          <h3 className='book-card--subtext'>{`Издатель: ${publisherText}`}</h3>
        </div>
        <div className='book-card--btn'>
          <a 
            href={infoLink} 
            target='_blank' 
            rel="noopener noreferrer" 
            className='book-card--link'
          >
            Просмотреть
          </a>
        </div>
      </div>
    </div>
  )
}

export default BookCards;