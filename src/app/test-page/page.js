export const dynamic = "error";

export default function Page() {
  return <div>{new Date().toISOString()}</div>;
}
