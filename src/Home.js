export function Home() {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-large">
        <source src="./assets/o-jaune-home.mkv" type="video/mp4" />
      </video>
      <video autoPlay muted loop className="video-small">
        <source src="./assets/o-jaune-home-2.mkv" type="video/mp4" />
      </video>
      <style jsx>{`
        .video-large {
          display: none;
        }
        .video-small {
          display: block;
        }
        @media (min-width: 600px) {
          .video-large {
            display: block;
          }
          .video-small {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
