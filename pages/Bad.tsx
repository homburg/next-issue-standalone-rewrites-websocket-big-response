import { Big } from "../components/Big";
import { WebSocketDemo } from "../components/WebsocketDemo";

export default ({ n }) => (
  <main>
    <h1>Bad {n}</h1>
    <Big n={n} />
  </main>
);

export const getServerSideProps = async () => {
  return { props: { n: 5000 } };
};
