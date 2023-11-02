let map;
//@ts-ignore
let featureLayer;

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 20.773, lng: -156.01 },
    zoom: 12,
    // In the cloud console, configure this Map ID with a style that enables the
    // "Locality" feature layer.
    mapId: "a3efe1c035bad51b", // <YOUR_MAP_ID_HERE>,
  });
  //@ts-ignore
  featureLayer = map.getFeatureLayer("LOCALITY");

  // Define a style with purple fill and border.
  //@ts-ignore
  const featureStyleOptions = {
    strokeColor: "#810FCB",
    strokeOpacity: 1.0,
    strokeWeight: 3.0,
    fillColor: "#810FCB",
    fillOpacity: 0.5,
  };

  // Apply the style to a single boundary.
  //@ts-ignore
  featureLayer.style = (options) => {
    if (options.feature.placeId == "ChIJ0zQtYiWsVHkRk8lRoB1RNPo") {
      // Hana, HI
      return featureStyleOptions;
    }
  };
}

initMap();