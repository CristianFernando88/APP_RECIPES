import { useParams } from "react-router-dom"
import Recipes from "../Recipes/Recipes";

export default function RecipesCategory(){
    const {id} = useParams();
    const pathUrl = `/reciperover/recipes/?categories=${id}`
    return(
        <>
            <h1 className="title has-background-primary">Categoria</h1>
            <Recipes
                urlPath={pathUrl} 
            />
        </>
    )
};