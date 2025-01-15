export function Event() {
  return (
    <>
    <div className="Event">
    <div className="flex justify-center items-start">
      <h1 className="text-center">Event à venir</h1>
          </div>
      <div className="video-affiche">

        <video autoPlay muted loop>
          <source
            src="./assets/affiche1.mkv"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    </>
  );
}
