import { useParams, Link } from 'react-router-dom';
import { getPostHtml } from '../content/posts.js';

export default function BlogPost() {
  const { slug } = useParams();
  const html = getPostHtml(slug);

  if (html === null) {
    return (
      <section className="post">
        <p>Post not found.</p>
        <p className="post-back">
          <Link to="/blog">← Back to blog</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="post">
      <p className="post-back post-back--top">
        <Link to="/blog">← Go Back</Link>
      </p>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      <p className="post-back">
        <Link to="/blog">← Go Back</Link>
      </p>
    </section>
  );
}
