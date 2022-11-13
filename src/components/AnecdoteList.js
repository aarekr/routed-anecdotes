const AnecdoteList = ( anecdotes ) => {
    console.log('AnecdoteList anecdotes:', anecdotes)
  
    return (
      <div>
        <h2>Anecdotes</h2>
        <ul>
          {anecdotes.anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
        </ul>
      </div>
    )
}

export default AnecdoteList