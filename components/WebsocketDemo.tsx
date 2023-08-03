import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const WebSocketDemo = ({ url }) => {
  const [enabled, setEnabled] = useState(false);

  const { readyState } = useWebSocket(url, {}, enabled);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div>
      <p>
        WebSocket({url}), state: {connectionStatus}
      </p>
      <button
        onClick={() => {
          setEnabled((v) => !v);
        }}
      >
        toggle
      </button>
    </div>
  );
};
