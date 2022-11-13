import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import About from './About'
import AnecdoteList from './AnecdoteList'
import CreateNew from './CreateNew'

const Menu = ({ anecdotes, addNew }) => {
  console.log('Menu anecdotes:', anecdotes)
  const padding = { padding: 5 }
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
        <div>
          <Link style={padding} to="/anecdotes">anecdotes</Link>
          <Link style={padding} to="/create">create new</Link>
          <Link style={padding} to="/about">about</Link>
          <Link style={padding} to="/">menu</Link>
        </div>
        <Routes>
          <Route path="/anecdotes" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew anecdotes={anecdotes} addNew={addNew} />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Menu