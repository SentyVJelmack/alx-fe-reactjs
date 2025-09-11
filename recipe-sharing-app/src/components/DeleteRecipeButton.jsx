import { useRecipeStore } from './recipeStore'
import { useNavigate } from 'react-router-dom'

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe)
  const navigate = useNavigate()  // 👈 add useNavigate

  const handleDelete = () => {
    deleteRecipe(id)
    navigate('/')  // redirect to home after deletion
  }

  return <button onClick={handleDelete}>Delete Recipe</button>
}

export default DeleteRecipeButton
