import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <div style ={{ color: "black"}}>
          <p>Error: {error}</p>
          {/* <h1>Posts</h1> */}
        </div>
      ) : (
        <ul style = {{ listStyleType : "none", padding: 0 }}>
        {posts.map((post, index) => (
          <li key={post.id} >
            <h2>{index + 1}. {post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
        </ul>
      )}
    </div>
  );
}

export default App;
