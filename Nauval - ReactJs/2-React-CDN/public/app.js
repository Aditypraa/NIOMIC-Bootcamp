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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetching"), loading ? /*#__PURE__*/React.createElement("p", null, "Loading...") : /*#__PURE__*/React.createElement("ul", null, news.map(item => {
    console.log(item);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);