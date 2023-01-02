import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Transactions,
  Loader,
} from "./components";

function App() {
  return (
    <div className="min-h-width">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
