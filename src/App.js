import { useState } from 'react'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Notification from './components/Notification'

const App = () => {
  //const padding = { padding: 5 }
  const [notification, setNotification] = useState(null)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    console.log('addNew anecdote:', anecdote)
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`you added '${anecdote.content}' to the anecdote list`)
    setTimeout(() => { setNotification(null) }, 5000)
  }

  /*const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)
  const vote = (id) => {
    const anecdote = anecdoteById(id)
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }*/

  return (
    <div>
      <Menu anecdotes={anecdotes} addNew={addNew} />
      <Notification message={notification} />
      <Footer />
    </div>
  )
}

export default App