import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateNew = ({ anecdotes, addNew }) => {
    console.log('CreateNew anecdotes:', anecdotes)
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log('handleSubmit parametrit:', content, author, info)
      addNew({ content, author, info, votes: 0 })
      setContent('')
      setAuthor('')
      setInfo('')
      navigate('/')
    }

    const handleContentChange = (event) => { setContent(event.target.value) }
    const handleAuthorChange = (event) => { setAuthor(event.target.value) }
    const handleInfoChange = (event) => { setInfo(event.target.value) }

    return (
        <div>
          <h2>create a new anecdote</h2>
          <form>
            <div>content
              <input name='content' value={content} onChange={handleContentChange} />
            </div>
            <div>author
              <input name='author' value={author} onChange={handleAuthorChange} />
            </div>
            <div>url for more info
              <input name='info' value={info} onChange={handleInfoChange} />
            </div>
            <button onClick={handleSubmit}>create</button>
          </form>
        </div>
    )
}

export default CreateNew