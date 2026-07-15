export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      © {year} Christopher Bui. All rights reserved.
    </footer>
  );
}
