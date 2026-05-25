import "./Loader.css";

export default function Loader({ exiting = false }) {
  return (
    <div
      className={`loader${exiting ? " loader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader__mark">
        <span className="loader__ring" aria-hidden />
        <p className="loader__logo">
          AS<span>.</span>
        </p>
      </div>
      <div className="loader__track" aria-hidden>
        <span className="loader__fill" />
      </div>
    </div>
  );
}
