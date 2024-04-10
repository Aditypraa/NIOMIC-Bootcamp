import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas
        unde hic explicabo quibusdam quaerat, eaque sed quisquam alias,
        reprehenderit minima reiciendis soluta a quod in voluptate asperiores
        doloremque praesentium!
      </p>
      <ul>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
