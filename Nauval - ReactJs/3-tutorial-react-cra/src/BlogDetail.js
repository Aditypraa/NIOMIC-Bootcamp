import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParams = useParams();
  console.log(urlParams);

  return (
    <>
      <h1>Blog Detail</h1>
      <p>Hallo ini Detail dari {urlParams.slug}</p>
    </>
  );
}
