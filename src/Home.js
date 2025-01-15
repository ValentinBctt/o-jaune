export function Home() {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="./assets/o-jaune-home.mkv" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
