import React, { useEffect } from "react"
import {Link} from "gatsby"
import "./posts.css"


const LatestPosts = () => {

    useEffect(() => {

    }, []);

    return (
        <section className="latest-posts">
            <div className="container">
                <h2 className="section-heading">Latest Posts</h2>
                <div className="posts">
                    <Link className="post" to="/blog/">
                        <h3>IOS Icons with only one div Tag</h3>
                        <div className="metas">
                            <div className="meta">October 25, 2019</div>
                            <div className="meta">Web Development</div>
                        </div>
                        <p className="excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="read-more" to="/">Read More</div>
                    </Link>
                    <Link className="post" to="/blog/">
                        <h3>IOS Icons with only one div Tag</h3>
                        <div className="metas">
                            <div className="meta">October 25, 2019</div>
                            <div className="meta">Web Development</div>
                        </div>
                        <p className="excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="read-more" to="/">Read More</div>
                    </Link>
                    <Link className="view-more" to="/blog/">View More</Link>
                </div>
                <div className="categories">
                    <Link className="category" to="/">Design</Link>
                    <Link className="category" to="/">Web Development</Link>
                    <Link className="category" to="/">CSS</Link>
                    <Link className="category" to="/">Javascript</Link>
                </div>
            </div>
        </section>
    )
}

export default LatestPosts