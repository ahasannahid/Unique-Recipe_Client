import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../Hooks/useTitle';

const RecipeCard = ({ recipe }) => {
    useTitle('Recipe')
    const { rating, total_view, cook, recipe_name, price, img_url, recipe_details, _id } = recipe;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img_url}>
                            <img src={img_url} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body">
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>How to make: {recipe_details.slice(0, 100)} <Link className='text-primary' to={`/details/${_id}`}>...See More</Link></p>
                    </div>
                    <div className="card-actions justify-between">
                        <button className="btn btn-info">Price: $ {price}</button>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;