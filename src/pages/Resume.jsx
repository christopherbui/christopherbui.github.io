export default function Resume() {
  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-4 py-2 bg-[rgb(232,171,28)] text-white rounded hover:bg-[rgb(212,151,8)] font-lilex transition"
        >
          Download Resume
        </a>
      </div>

      <iframe
        src="/resume.html"
        title="Resume"
        className="w-full h-screen rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] mb-4"
      />
    </div>
  );
}
