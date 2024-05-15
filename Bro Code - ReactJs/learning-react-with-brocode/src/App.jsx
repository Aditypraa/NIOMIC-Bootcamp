import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Aditya" age={30} isStudent={true} />
      <Student name="Bagus" age={30} isStudent={true} />
      <Student name="Ardi" age={30} isStudent={true} />
      <Student name="Juan" age={30} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
