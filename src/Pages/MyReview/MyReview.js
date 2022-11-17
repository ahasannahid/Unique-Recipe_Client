import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider/AUthProvider";
import useTitle from "../../Hooks/useTitle";
import ShowReview from "./ShowReview";


const MyReview = () => {
    useTitle('Review')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const notify = () => toast("Review Deleted Successfully");

    useEffect(() => {
        fetch(`https://unique-recipe-server.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://unique-recipe-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        notify();
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
           
                <div>
                    <h2 className="text-3xl text-center">You Have {reviews.length} Reviews</h2>
                    <div className="overflow-x-auto w-full grid grid-cols-3 my-4">

                        {
                            reviews.map(review => <ShowReview
                                key={review._id}
                                singlereview={review}
                                handleDelete={handleDelete}
                            ></ShowReview>)
                        }
                    </div>
                </div>

        </div>
    );
};

export default MyReview;