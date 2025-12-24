import MicrophoneButton from "./components/MicrophoneButton";
import VoiceInput from "./components/VoiceInput";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <h1>AI Voice English Tutor</h1>
      <MicrophoneButton />
      <VoiceInput />
    </div>
  );
}

export default App;
