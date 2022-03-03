import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <div className="new-post-form">
        <h2> Blog Feed </h2>
        <section className="candy-stripe">
          <ul>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
            <li className="stripe1"></li>
          </ul>
        </section>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  Reactions: {post.reactionCount} || Click to{' '}
                  {post.reactionCount ? 'see' : 'start'} the discussion (beta 2.0)!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default PostList;