import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // let name = 'mr beast';
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json()
                })
                .then((data) => {
                    setIsPending(false);
                    setBlogs(data);
                    setError(null);
                })

                .catch(err => {
                    setError(err.message)
                    setIsPending(false);
                })
        }, 1000)
    }, []);
    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;