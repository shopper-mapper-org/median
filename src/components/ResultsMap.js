import Results from "./Results";
import Map from "./Map";
import MapLegend from "./MapLegend";


const ResultsMap = () => {
  return (
    <section className="container">
      <MapLegend />
      <div className="results-map-container">
        <Results />
        <Map />
      </div>
    </section>
  );
};

export default ResultsMap;
