const root = document.getElementById("root");

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log("Render");
    async function fetchData() {
      const request = await fetch("https://jsonplaceholder.typicode.com/posts");

      const response = await request.json();
      setNews(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Data Fetching</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {news.map((item) => {
            console.log(item);
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

ReactDOM.render(<App />, root);
