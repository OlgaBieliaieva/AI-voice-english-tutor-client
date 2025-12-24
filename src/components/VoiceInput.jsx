import { useSpeechToText } from "../hooks/useSpeechToText";

export default function VoiceInput() {
  const {
    isRecording,
    transcript,
    setTranscript,
    startRecording,
    stopRecording,
    error,
  } = useSpeechToText();

  return (
    <div>
      <div>
        {!isRecording ? (
          <button onClick={startRecording}>🎙️ Start recording</button>
        ) : (
          <button onClick={stopRecording}>⏹ Stop recording</button>
        )}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Your speech will appear here..."
        rows={4}
        style={{ width: "100%", marginTop: "1rem" }}
      />
    </div>
  );
}
