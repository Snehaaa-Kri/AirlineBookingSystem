import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    // Setup global config before script loads
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Optional: Set visitor details
    window.Tawk_API.visitor = {
      name: "Sneha Kumari",
      email: "sneha@example.com",
    };

    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6813d57aaf5560190d0d4772/1iq6njqoj";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TawkToWidget;
