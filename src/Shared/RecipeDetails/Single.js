import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AUthProvider';

const Single = ({ single }) => {
    const { user } = useContext(AuthContext);
    // console.log(single);
    const { customerName, recipeName, review, _id } = single;
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
                    </div>
                </div>
            </div>
            
           
        </div>
    );
};

export default Single;