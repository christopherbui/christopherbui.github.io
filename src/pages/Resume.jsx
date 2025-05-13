export default function Resume() {
  return (
    <div
      className="fixed inset-0 bg-center bg-cover flex flex-col items-center justify-start pt-40 md:pt-[12%]"
      style={{
        backgroundImage: "url('/typing.gif')",
      }}
    >
      <div className="bg-[rgba(251,243,224,0.8)] backdrop-blur-md rounded-xl px-6 py-4">
        <h1 className="text-3xl md:text-4xl text-[rgb(232,171,28)] font-lilex font-normal text-center">
          Resume coming soon...
        </h1>
      </div>
    </div>
  );
}
