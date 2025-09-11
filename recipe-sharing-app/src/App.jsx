import SearchBar from './components/SearchBar'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <h1>M-2 Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  )
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams()
  return <RecipeDetails recipeId={Number(id)} />
}

export default App
