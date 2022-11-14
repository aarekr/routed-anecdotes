import { useNavigate } from "react-router-dom"
import useField from '../hooks/index.js'

const CreateNew = ({ anecdotes, addNew }) => {
    console.log('CreateNew anecdotes:', anecdotes)
    const navigate = useNavigate()
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log('CreateNew handleSubmit parametrit:', content, author, info)
      addNew({ content: content.value, author: author.value, info: info.value, votes: 0 })
      navigate('/')
    }

    const tyhjenna = (event) => {
      event.preventDefault()
      content.reset()
      author.reset()
      info.reset()
    }

    return (
        <div>
          <h2>create a new anecdote</h2>
          <form>
            <div>content
              <input {...content} />
            </div>
            <div>author
              <input name='author' type={author.type} value={author.value} onChange={author.onChange} />
            </div>
            <div>url for more info
              <input name='info' type={info.type} value={info.value} onChange={info.onChange} />
            </div>
            <button onClick={handleSubmit}>create</button>
            <button onClick={tyhjenna}>reset</button>
          </form>
        </div>
    )
}

export default CreateNew