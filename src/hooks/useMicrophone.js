import { useState } from "react";

export function useMicrophone() {
  const [status, setStatus] = useState("idle");
  // idle | requesting | granted | denied | unsupported

  const requestPermission = async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("unsupported");
      return;
    }

    setStatus("requesting");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      setStatus("granted");
    } catch (error) {
      console.error("[MIC PERMISSION ERROR]", error);
      setStatus("denied");
    }
  };

  return {
    status,
    requestPermission,
  };
}
