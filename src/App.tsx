// import Header from "./components/Header";
import Router from "./routes/Router";

function App() {
  return (
    <>
      {/* se puede hacer asi o usando un layaout con header y footer y el resto de elementos con outlet de react-router-dom  */}
      {/* <Header /> */}
      <Router />
    </>
  );
}

export default App;
