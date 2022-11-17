import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from '../../../src/assets/banner.jpg'
import useTitle from '../../Hooks/useTitle';
import RecipeCard from '../../Shared/RecipeCard/RecipeCard';
import Unique from './Unique';


const Home = () => {
    const recipes = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <img src={banner} alt="" className='h-1/2' />
            <div className='mb-10'>
                <h1 className='text-5xl font-semibold text-center my-10'>You get some recipe here</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe._id}
                            recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link to='/allrecipe'>
                    <button className="btn btn-secondary">See All Recipe</button>
                </Link>
            </div>
            <Unique></Unique>
        </div>
    );
};

export default Home;