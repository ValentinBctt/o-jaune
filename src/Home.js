export function Home() {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-large">
        <source src="https://res.cloudinary.com/dnojcwwos/video/upload/v1737365577/o-jaune-home_knvcqs.mp4" type="video/mp4" />
      </video>
      <video autoPlay muted loop className="video-small">
        <source src="https://res.cloudinary.com/dnojcwwos/video/upload/v1737365368/o-jaune-home-2_rtsxo6.mp4" type="video/mp4" />
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
