const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

export default function VideoGrid() {
  return (
    <section className="px-10 py-16">
      <h2 className="text-2xl mb-6">Featured Videos</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        {videos.map((src, i) => (
          <video
            key={i}
            src={src}
            autoPlay
            muted
            loop
            className="w-full h-75 object-cover"
          />
        ))}
      </div>
    </section>
  );
}