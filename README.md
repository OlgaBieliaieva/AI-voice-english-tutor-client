# AI Voice English Tutor (Frontend)

Voice-first AI assistant for practicing spoken English with real-time grammar feedback and audio responses.

This is the **frontend application** of the AI Voice English Tutor MVP.  
It works together with the backend service, which must be running locally for full functionality.

---

## ✨ Features

- 🎙 Voice input using browser speech-to-text (Web Speech API)
- 💬 AI-powered English conversation
- 🧠 Grammar mistake detection with explanations
- 🔊 Text-to-speech playback of AI responses
- ✍️ Editable transcript before sending to AI
- 🧩 Clear separation between AI reply and grammar feedback

---

## 🧠 How It Works

1. User speaks English into the microphone
2. Speech is converted to text in the browser
3. User can edit the transcribed text
4. Text is sent to the backend `/api/chat` endpoint
5. AI responds with:
   - A natural conversational reply
   - Grammar feedback (if applicable)
6. Frontend parses and displays:
   - AI reply
   - Grammar corrections (separately)
7. AI reply can be played aloud using text-to-speech

> ℹ️ Grammar feedback parsing is handled **on the frontend**, based on a structured prompt format.

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES Modules)
- Browser Web APIs:
  - SpeechRecognition (STT)
  - SpeechSynthesis (TTS)

### Backend (required)

- Node.js + Express
- LLM integration (Groq / LLaMA 3)

👉 Backend repository:  
https://github.com/OlgaBieliaieva/ai-voice-english-tutor-backend

---

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the repositories

```bash
git clone https://github.com/OlgaBieliaieva/AI-voice-english-tutor-client.git
git clone https://github.com/OlgaBieliaieva/ai-voice-english-tutor-backend.git
```

### 2️⃣ Start the backend first

```bash
cd ai-voice-english-tutor-backend
npm install
npm run dev
```

Backend will run on:

```
http://localhost:3000
```

> ⚠️ Make sure you have configured environment variables for the LLM provider in the backend.

### 3️⃣ Start the frontend

```
cd ai-voice-english-tutor-frontend
npm install
npm run dev
```

Frontend will be available at:

```
http://localhost:5173
```

## 🔗 API Dependency

The frontend depends on the backend endpoint:

```
POST /api/chat
```

The backend returns a raw AI response, which includes:

- Conversational reply
- Grammar feedback (in a structured text format)

The frontend is responsible for:

- Parsing the response
- Displaying reply and feedback separately
- Triggering text-to-speech playback

## 📌 MVP Status

✅ MVP completed
The application demonstrates:

- Voice-based interaction
- Grammar feedback via prompt engineering
- End-to-end AI-powered learning flow

## 🔮 Future Improvements

- Conversation history
- Highlight grammar mistakes inline
- Multiple language support
- User profiles & progress tracking

## 📄 License

MIT
