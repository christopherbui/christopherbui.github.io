import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function About() {
  useDocumentTitle('Christopher Bui');

  return (
    <section className="about">
      <h1 className="about-name">
        Hello! 👋
      </h1>
      <p>
        I'm a data scientist working in biomedical research &amp;
        clinical healthcare.
      </p>
      <p>
        What motivates me most is engineering innovative solutions for highly impactful challenges.
      </p>
    </section>
  );
}
