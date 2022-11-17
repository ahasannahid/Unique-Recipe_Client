import React from 'react';
import kitchen from '../../assets/kitchen.jpg'
import salt from '../../assets/salt.jpg'

const Unique = () => {
    return (
        <div className='my-10'>

            <div className="hero min-h-screen bg-base-200 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={kitchen} className='w-1/2' />
                    <div>
                        <h1 className='text-3xl text-purple-500 text-center font-semibold'>Contribute with my kitchen</h1>
                        <p className="py-6">
                            If you want to contribute with me please login with your email or login with email and password and go to the all service section and add your contribution
                        </p>

                    </div>
                </div>
            </div>
            <div>
            <div className="hero min-h-screen bg-base-200 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={salt} className='w-1/2' />
                    <div>
                        <h1 className='text-3xl text-purple-500 text-center font-semibold'>Why you take service from this kitchen</h1>
                        <p className="py-6">
                            In my kitchen our main chief if salt bee. He is working here from 2013 and he is one of the most popular cook in the world. He is the main instructor in this kitchen. Our customer review is very satisfactory. So you can take service from here.
                        </p>

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Unique;