import { useEffect } from "react";
import { useTextToSpeech } from "../hooks/useTextToSpeech";

export default function TTSPlayer({ text }) {
  const { speak, stop, isSpeaking } = useTextToSpeech();

  useEffect(() => {
    if (text) {
      speak(text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  if (!text) return null;

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={() => speak(text)} disabled={isSpeaking}>
        ▶️ Play
      </button>
      <button onClick={stop} disabled={!isSpeaking}>
        ⏹ Stop
      </button>
    </div>
  );
}
