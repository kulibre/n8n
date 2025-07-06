import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <elevenlabs-convai agent-id="agent_01jzfb4cnff1g9kca7gr1212y3"></elevenlabs-convai>
  );
};

export default ChatWidget; 