import {Link} from 'react-router-dom'

import Navbar from '../Navbar'
import Header from '../Header'
import BookContext from '../../context/context'

import './index.css'

const bookFormat = eachBook => {
  const {imageUrl, author, title} = eachBook

  return (
    <Link to="/bookDetails" className="link-item">
      <div className="book-item">
        <div className="book-item-img">
          <img src={imageUrl} alt="cover" />
        </div>
        <div className="book-item-info">
          <div className="book-item-info-item">
            <span>{title}</span>
          </div>

          <div className="book-item-info-item-author">
            <span className="">Author: </span>
            <span className="span-author">{author}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Home = () => (
  <BookContext.Consumer>
    {value => {
      const {DataList} = value
      return (
        <>
          <Navbar />
          <Header />
          <div className="books-list-container">
            {DataList.map(eachBook => bookFormat(eachBook))}
          </div>
        </>
      )
    }}
  </BookContext.Consumer>
)

export default Home
