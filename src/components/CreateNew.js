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
      navigate('/')
      setTimeout(() => { navigate('/create') }, 1);
    }
    //name='content' type={content.type} value={content.value} onChange={content.onChange}
    //name='author' type={author.type} value={author.value} onChange={author.onChange}
    //name='info' type={info.type} value={info.value} onChange={info.onChange}

    return (
        <div>
          <h2>create a new anecdote</h2>
          <form>
            <div>content
              <input {...content} />
            </div>
            <div>author
              <input {...author} />
            </div>
            <div>url for more info
              <input {...info} />
            </div>
            <button onClick={handleSubmit}>create</button>
            <button onClick={tyhjenna}>reset</button>
          </form>
        </div>
    )
}

export default CreateNew