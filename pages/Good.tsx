import { Big } from "../components/Big";
import { WebSocketDemo } from "../components/WebsocketDemo";

export default ({ n }) => (
  <main>
    <h1>Home {n}</h1>
  </main>
);

export const getServerSideProps = async () => {
  return { props: { n: 5000 } };
};
