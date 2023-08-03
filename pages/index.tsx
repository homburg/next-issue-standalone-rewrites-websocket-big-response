import { WebSocketDemo } from "../components/WebsocketDemo";

export default function Index() {
  return (
    <div>
      <h1>next 13 standalone rewrites websocket big response error</h1>
      <WebSocketDemo url="ws://localhost:3000/test/good" />
      <WebSocketDemo url="ws://localhost:3000/test/bad" />
    </div>
  );
}
