export function Big({ n = 5000 }: { n: number }) {
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push(<li key={i}>Item {i}</li>);
  }

  return <>{items}</>;
}
