import { Icon } from "leaflet";

const locationIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-md.png",
  iconSize: [25, 25],
});

const resultIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-sm-82A05A-C4E39C.png",
  iconSize: [25, 25],
});

const middleIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/circle-lg-5BC5FF-M.png",
  iconSize: [35, 35],
});

const faveIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/circle-lg-5BC5FF-C4E39C-F.png",
  iconSize: [35, 35],
});

const highlightIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-sm-FF9D7F-FFFFFF.png",
  iconSize: [25, 25],
});

const middleHighlight = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-md-5BC5FF-FF9D7F-M.png",
  iconSize: [35, 35],
});

export { locationIcon, resultIcon, middleIcon, faveIcon, highlightIcon, middleHighlight };
