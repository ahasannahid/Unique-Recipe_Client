import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle("Blog");
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Answer These Question</h1>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    What is JWT, and how does it work?
                </h1>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.

                    When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                    By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                </p>
            </div>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    Difference between SQL and NoSQL
                </h1>
                <p>
                    SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. Perform queries on the database
                    Database Retrieval
                    Set permissions on tables, views
                    Can insert records into the database
                    Update records in a database
                    Delete records from a database
                    Create new databases, or new tables in a database
                    Create stored procedures & views in a database
                    NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
                </p>
            </div>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    What is the difference between javascript and NodeJS?
                </h1>
                <p>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. To summarize, Node. js is a cross-platform JavaScript runtime environment for servers and applications. It is built on a single-threaded, non-blocking event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API.
                </p>
            </div>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    How does NodeJS handle multiple requests at the same time?
                </h1>
                <p>
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    As is, node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.
                </p>
            </div>
        </div>
    );
};

export default Blog;