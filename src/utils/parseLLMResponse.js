export function parseLLMResponse(text) {
  if (!text) return { reply: "", feedback: "" };

  const replyMatch = text.match(/REPLY:\s*([\s\S]*?)\s*FEEDBACK:/);
  const feedbackMatch = text.match(/FEEDBACK:\s*([\s\S]*)/);

  return {
    reply: replyMatch ? replyMatch[1].trim() : "",
    feedback: feedbackMatch ? feedbackMatch[1].trim() : "",
  };
}
