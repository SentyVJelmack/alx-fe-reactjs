import { Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  )
}

// Wrapper to extract id from route params
import { useParams } from 'react-router-dom'
const RecipeDetailsWrapper = () => {
  const { id } = useParams()
  return <RecipeDetails recipeId={Number(id)} />
}

export default App
