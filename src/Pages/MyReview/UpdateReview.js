import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';

const UpdateReview = () => {
    useTitle('Review')
    const notify = () => toast("Review Update Successfully");
    const  storedreview  = useLoaderData();

    console.log(storedreview);

    const [review, setReview] = useState(storedreview);

    const updateReview = event => {
        event.preventDefault();
        // console.log(review);
        fetch(`https://unique-recipe-server.vercel.app/review/${storedreview._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        notify();
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }


    return (
        <div>
            <h1 className='text-xl my-10 text-indigo-500 text-center font-semibold'>Please Update your Review</h1>

            <form onSubmit={updateReview}>
                <textarea onChange={handleInputChange} name='review' className="textarea textarea-bordered h-24 w-full" placeholder="Review Details" required></textarea>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update" />
                </div>
            </form>

        </div>
    );
};

export default UpdateReview;