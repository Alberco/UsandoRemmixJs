import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Home"
})

export default function Index() {

  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome API Digimon</h1>
        <nav>
        <Link to="/digimon/">List Digimon</Link><br />
        <Link to="/digimon/create">Create Digimon</Link>
        </nav>
      </div>
    </>
  );
}
