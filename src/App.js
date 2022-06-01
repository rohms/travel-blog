import "./index.css";
import Header from "./components/Header";
import data from "./data";
import Card from "./components/Card";


function App() {
  const cards = data.map((info) => {
    return (
      <Card
        title={info.title}
        location={info.location}
        map={info.googleMapsUrl}
        start={info.startDate}
        end={info.endDate}
        description={info.description}
        image={info.imageUrl}
      />
    );
  });
  return (
    <div className="App">
      <Header />
      <div className="appContainer">{cards}</div>
    </div>
  );
}

export default App;
