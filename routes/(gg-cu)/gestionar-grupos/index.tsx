import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
