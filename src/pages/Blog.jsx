import { Link } from 'react-router-dom';
import { posts } from '../content/posts.js';

export default function Blog() {
  return (
    <section className="blog">
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
