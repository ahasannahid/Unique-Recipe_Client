import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';
import useTitle from '../../Hooks/useTitle';

const ShowReview = ({ singlereview, handleDelete }) => {
    useTitle('Review')
    const { user } = useContext(AuthContext);
    // console.log(singlereview);
    const { review, customerName, recipeName, _id } = singlereview;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-4">
                <div className="card-body">
                    <h2 className="card-title">Review About : {recipeName}</h2>
                    <p>Review: {review}</p>
                    <div>
                        <p>Reviewer Photo :</p>
                        <img src={user?.photoURL} alt="" />
                    </div>

                    <div className="card-actions justify-end">
                        <p>Reviewer Name: {customerName} </p>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-primary mr-5">Update Review</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;