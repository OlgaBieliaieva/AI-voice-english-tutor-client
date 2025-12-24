import { useMicrophone } from "../hooks/useMicrophone";

export default function MicrophoneButton() {
  const { status, requestPermission } = useMicrophone();

  return (
    <div>
      <button onClick={requestPermission}>Enable microphone</button>

      <p>
        Status: <strong>{status}</strong>
      </p>

      {status === "denied" && (
        <p style={{ color: "red" }}>
          Microphone access denied. Please allow it in browser settings.
        </p>
      )}

      {status === "unsupported" && (
        <p style={{ color: "red" }}>
          Your browser does not support microphone access.
        </p>
      )}
    </div>
  );
}
