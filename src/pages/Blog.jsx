import { Link } from 'react-router-dom';
import { posts } from '../content/posts.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function Blog() {
  useDocumentTitle('Blog — Christopher Bui');

  return (
    <section className="blog">
      <h1>Blog</h1>
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
