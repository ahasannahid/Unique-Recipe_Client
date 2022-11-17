import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import RecipeCard from '../../Shared/RecipeCard/RecipeCard';

const Allrecipe = () => {
    const allRecipe = useLoaderData();
    useTitle('All Recipe')
    return (
       <div>
        <h1 className='text-4xl font-semibold mb-10 text-center' >Here is my All Recipe</h1>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allRecipe.map(recipe => <RecipeCard
                    key={recipe._id}
                    recipe={recipe}
                ></RecipeCard>)
            }
        </div>
       </div>
    );
};

export default Allrecipe;