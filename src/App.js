import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import AddBook from './components/AddBook'
import BookDetails from './components/bookDetails'

import BookContext from './context/context'

import './App.css'

class App extends Component {
  state = {
    DataList: [
      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'John Smith',
        title: 'The Book of Beginnings',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Jane Doe',
        title: 'A Journey Through Time',
      },
      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'David Johnson',
        title: 'The Secrets Within',
      },
      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Emily Williams',
        title: 'Whispers in the Wind',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Michael Brown',
        title: 'Echoes of Eternity',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Sarah Davis',
        title: 'The Lost City',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Robert Thompson',
        title: 'The Art of Deception',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Jessica Roberts',
        title: 'Shadows of the Past',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Thomas Wilson',
        title: 'Beyond the Horizon',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Jennifer Lee',
        title: 'The Silent Song',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Daniel Davis',
        title: 'Whirlwind of Emotions',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Olivia Clark',
        title: 'The Enigma Code',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'William Johnson',
        title: 'The Last Survivor',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Emma Smith',
        title: 'The Forbidden Realm',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Christopher Brown',
        title: 'The Vanishing Point',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Sophia Wilson',
        title: 'Whispered Secrets',
      },
      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Andrew Thompson',
        title: 'The Forgotten Key',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Charlotte Davis',
        title: 'Lost in Time',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'James Anderson',
        title: 'Echoes of the Past',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Grace Roberts',
        title: 'The Hidden Path',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Charlotte Davis',
        title: 'Lost in Time',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'James Anderson',
        title: 'Echoes of the Past',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Grace Roberts',
        title: 'The Hidden Path',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Mia Roberts',
        title: 'The Enchanted Forest',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Oliver Thompson',
        title: 'The Hidden Truth',
      },

      {
        imageUrl:
          'https://res.cloudinary.com/deubpbymb/image/upload/v1683976999/cover_not_found_npplt7.jpg',
        author: 'Amelia Roberts',
        title: 'The Hidden Treasure',
      },
    ],
  }

  addBook = newBookItem => {
    this.setState(prevState => ({
      DataList: [...prevState.DataList, newBookItem],
    }))
  }

  render() {
    const {DataList} = this.state
    console.log(DataList)
    return (
      <BookContext.Provider
        value={{
          DataList,
          addBook: this.addBook,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/bookDetails" component={BookDetails} />
        </Switch>
      </BookContext.Provider>
    )
  }
}

export default App
