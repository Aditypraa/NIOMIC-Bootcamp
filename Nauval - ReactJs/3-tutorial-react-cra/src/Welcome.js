function Welcome() {
  return (
    <div>
      <h1>Welcome to the world of React</h1>
    </div>
  );
}

export function Welcome2(props) {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Welcome;
