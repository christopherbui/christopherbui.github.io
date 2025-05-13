export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <p className="text-sm text-gray-400 font-lilex">
        © {new Date().getFullYear()} Christopher Bui. All rights reserved.
      </p>
    </footer>
  );
}  