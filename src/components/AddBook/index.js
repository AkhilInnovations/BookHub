import {Component} from 'react'
import BookContext from '../../context/context'
import './index.css'

class AddBook extends Component {
  state = {
    title: '',
    author: '',
    imageUrl: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAuthor = event => {
    this.setState({author: event.target.value})
  }

  renderAuthorName = () => {
    const {author} = this.state
    return (
      <>
        <label className="input-label" htmlFor="author">
          Author Name
        </label>
        <input
          type="text"
          id="author"
          className="author-input-field"
          value={author}
          onChange={this.onChangeAuthor}
        />
      </>
    )
  }

  renderTitle = () => {
    const {title} = this.state
    return (
      <>
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="title-input-field"
          value={title}
          onChange={this.onChangeTitle}
        />
      </>
    )
  }

  renderImageUrl = () => {
    const {imageUrl} = this.state
    return (
      <>
        <label className="input-label" htmlFor="imageUrl">
          Image Url
        </label>
        <input
          type="text"
          id="imageUrl"
          className="title-input-field"
          value={imageUrl}
          onChange={this.onChangeImageUrl}
        />
      </>
    )
  }

  renderForm = () => (
    <BookContext.Consumer>
      {value => {
        const {addBook} = value

        const submitForm = async event => {
          event.preventDefault()
          const {history} = this.props
          const {title, author, imageUrl} = this.state
          if (title === '' || author === '' || imageUrl === '') {
            alert('Please fill in all the fields')
          } else {
            // Perform further actions or submit the form
            console.log('Form submitted successfully!')
            const bookDetails = {imageUrl, title, author}
            console.log(bookDetails)
            addBook(bookDetails)
            history.replace('/')
          }
        }
        return (
          <form className="form-container">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/deubpbymb/image/upload/v1683976988/logo_xxdayn.png"
              alt="website logo"
            />
            <h1 className="logo-label">BOOKHUB</h1>
            <div className="input-container">{this.renderImageUrl()}</div>
            <div className="input-container">{this.renderTitle()}</div>
            <div className="input-container">{this.renderAuthorName()}</div>
            <button
              type="submit"
              className="submit-button"
              onClick={submitForm}
            >
              Submit
            </button>
          </form>
        )
      }}
    </BookContext.Consumer>
  )

  render() {
    return <div className="add-book-form-container">{this.renderForm()}</div>
  }
}

export default AddBook
