import { useState } from "react";
import { useSpeechToText } from "../hooks/useSpeechToText";
import { sendChatMessage } from "../api/chatApi";

export default function VoiceInput() {
  const {
    isRecording,
    transcript,
    setTranscript,
    startRecording,
    stopRecording,
    error,
  } = useSpeechToText();

  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState(null);

  const handleSend = async () => {
    if (!transcript.trim()) return;

    try {
      setLoading(true);

      const response = await sendChatMessage(transcript);

      setReply(response.reply);
      setTranscript("");
    } catch (err) {
      console.error("[CHAT ERROR]", err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

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

      <button
        onClick={handleSend}
        disabled={loading || !transcript.trim()}
        style={{ marginTop: "1rem" }}
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {reply && (
        <div style={{ marginTop: "1rem" }}>
          <strong>AI:</strong> {reply}
        </div>
      )}
    </div>
  );
}
