var legendHeight = 0;

var map = L.map("map", {
  center: [45.81, 9.1],
  zoom: 15,
  minZoom: 12,
  attributionControl: false
});
L.control.attribution({position: "bottomleft"}).addTo(map);

var osm = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"});

var osmCycle = L.tileLayer("http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png", {attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"});

var osmOutdoors = L.tileLayer("http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png", {attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>"});

var osmWatercolor = L.tileLayer("http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png", {attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a> &mdash; Map data &copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>", subdomains: "abcd"});

var osmToner = L.tileLayer("http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png", {attribution: "Map tiles by <a href='http://stamen.com'>Stamen Design</a>, <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a> &mdash; Map data &copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>", subdomains: "abcd"});

var bing = new L.BingLayer("AqSfYcbsnUwaN_5NvJfoNgNnsBfo1lYuRUKsiVdS5wQP3gMX6x8xuzrjZkWMcJQ1", {type: "AerialWithLabels"});
bing.getAttribution = function() {
  return "© 2015 GeoEye, © 2015 Blom, Earthstar Geographics SIO, © 2015 Microsoft Corporation, © 2015 Nokia, © AND, Bing";
};
bing.setZIndex(-1);
map.addLayer(bing);

/*** Historical Maps - beginning ***/
var hist1 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:geoTopo_1600", format: "image/png", transparent: true, version: "1.1.0"});  // Topographic Map (1600)

var hist2 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:geoTeresian_1722", format: "image/png", transparent: true, version: "1.1.0"});  // Theresian Cadastre (1722)
hist2.setZIndex(1);
hist2.setOpacity(0.8);
map.addLayer(hist2);

var hist3 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:geo1861", format: "image/png", transparent: true, version: "1.1.0"});  // Lombardo Veneto Cadastre (1861)

var hist4 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:1884PiantaDiComo_GEO", format: "image/png", transparent: true, version: "1.1.0"});  // City Centre Map (1884)

var hist5 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:geo_1900", format: "image/png", transparent: true, version: "1.1.0"});  // New Land Cadastre (1900)

var hist6 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:1903Catelli_GEO", format: "image/png", transparent: true, version: "1.1.0"});  // City Centre Map (1903)

var hist7 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:1908DeAgostini_GEO", format: "image/png", transparent: true, version: "1.1.0"});  // City Centre Map (1908)

var hist8 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:1916TouringClub_GEO", format: "image/png", transparent: true, version: "1.1.0"});  // City Centre Map (1916)

var hist9 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como001mm_1919", format: "image/png", transparent: true, version: "1.1.0"});  // Planimetric Map (1919)

var hist10 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como015mm_1937", format: "image/png", transparent: true, version: "1.1.0"});  // Planimetric Map (1937)

var hist11 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como009mm_1937", format: "image/png", transparent: true, version: "1.1.0"});  // Zoning Map (1937)

var hist12 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como013mm_1937", format: "image/png", transparent: true, version: "1.1.0"});  // Population Density Map (1937)

var hist13 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como025mm_1937", format: "image/png", transparent: true, version: "1.1.0"});  // Black Sewage Map (1937)

var hist14 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como039mm_1952", format: "image/png", transparent: true, version: "1.1.0"});  // Zoning Map (1952)

var hist15 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como042_050mm_1967", format: "image/png", transparent: true, version: "1.1.0"});  // Zoning Map (1967)

var hist16 = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:Como136_137mm_2001", format: "image/png", transparent: true, version: "1.1.0"});  // Zoning Map (2001)

var hist = [hist1, hist2, hist3, hist4, hist5, hist6, hist7, hist8, hist9, hist10, hist11, hist12, hist13, hist14, hist15, hist16];
//var layerNames = ["Topographic Map (1600)", "Theresian Cadastre (1722)", "Lombardo Veneto Cadastre (1861)", "City Centre Map (1884)", "New Land Cadastre (1900)", "City Centre Map (1903)", "City Centre Map (1908)", "City Centre Map (1916)", "Planimetric Map (1919)", "Planimetric Map (1937)", "Zoning Map (1937)", "Population Density Map (1937)", "Black Sewage Map (1937)", "Zoning Map (1952)", "Zoning Map (1967)", "Zoning Map (2001)"];
var layerNames = ["Topographic Map", "Theresian Cadastre", "Lombardo Veneto Cadastre", "City Centre Map", "New Land Cadastre", "City Centre Map", "City Centre Map", "City Centre Map", "Planimetric Map", "Planimetric Map", "Zoning Map", "Population Density Map", "Black Sewage Map", "Zoning Map", "Zoning Map", "Zoning Map"];
var lastHist1 = hist2;
var lastHist2 = hist2;

$("#div-slider-layer-1").change(function() {
  var layerValue1 = $("#slider-layer-1").val();
  if (lastHist1 != lastHist2)
    map.removeLayer(lastHist1);
  if (hist[layerValue1-1] != lastHist2) {
    hist[layerValue1-1].setZIndex(0);
    map.addLayer(hist[layerValue1-1]);
  }
  lastHist1 = hist[layerValue1-1];

  var $sliderText = $("#layer-name-hist-1");
  $sliderText.text(layerNames[layerValue1-1]);

  var transValue = $("#slider-trans-1").val();
  lastHist1.setOpacity(transValue/100);
});

$("#div-slider-trans-1").change(function() {
  var transValue = $("#slider-trans-1").val();
  lastHist1.setOpacity(transValue/100);
});

$("#div-slider-layer-2").change(function() {
  var layerValue2 = $("#slider-layer-2").val();
  if (lastHist1 != lastHist2)
    map.removeLayer(lastHist2);
  if (hist[layerValue2-1] != lastHist1) {
    hist[layerValue2-1].setZIndex(1);
    map.addLayer(hist[layerValue2-1]);
  }
  lastHist2 = hist[layerValue2-1];

  var $sliderText = $("#layer-name-hist-2");
  $sliderText.text(layerNames[layerValue2-1]);

  var transValue = $("#slider-trans-2").val();
  lastHist2.setOpacity(transValue/100);
});

$("#div-slider-trans-2").change(function() {
  var transValue = $("#slider-trans-2").val();
  lastHist2.setOpacity(transValue/100);
});
/*** Historical Maps - end ***/

var gaiMaxV = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:gai_max_V", format: "image/png", transparent: true, version: "1.1.0", opacity: 0.8});  // Soil Runoff Capacity (1955)

var dusaf1MaxV = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:dusaf1_max_V", format: "image/png", transparent: true, version: "1.1.0", opacity: 0.8});  // Soil Runoff Capacity (1999)

var dusaf4MaxV = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:dusaf4_max_V", format: "image/png", transparent: true, version: "1.1.0", opacity: 0.8});  // Soil Runoff Capacity (2012)

var gaiMaxC = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:gai_max_C", format: "image/png", transparent: true, version: "1.1.0", opacity: 0.8});  // Soil Runoff Capacity (1955)

var dusaf1MaxC = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:dusaf1_max_C", format: "image/png", transparent: true, version: "1.1.0", opacity: 0.8});  // Soil Runoff Capacity (1999)

var dusaf4MaxC = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {layers: "oxoli:dusaf4_max_C", format: "image/png", transparent: true, version: "1.1.0", opacity: 0.8});  // Soil Runoff Capacity (2012)

var valduceDivide = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:bacino_line_valduce",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var valduceArea = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:bacino_polygon_valduce",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var cosiaDivide = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:bacino_line_cosia",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var cosiaArea = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:bacino_polygon_cosia",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var lake = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:lago",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});
lake.setZIndex(2);
map.addLayer(lake);

var railway = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:area_ferroviaria",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var vehicular = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:area_stradale",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var buildings = L.tileLayer.wms("http://geomobile.como.polimi.it:8080/geoserver/wms", {
  layers: "oxoli:area_edificio",
  format: "image/png",
  transparent: true,
  version: "1.1.0"
});

var main = L.geoJson(main_watercourses, {
  style: function (feature) {
    return { weight: 4,
      opacity: 1,
      color: "#64a5a5"
    };
  },
  onEachFeature: onEachFeature
});
main.setZIndex(3);
map.addLayer(main);

var buried = L.geoJson(buried_channels, {
  style: function (feature) {
    return { weight: 4,
      opacity: 1,
      color: "#ff0904"
    };
  },
  onEachFeature: onEachFeature
});
buried.setZIndex(4);
map.addLayer(buried);

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.NAME);
}

/*** Manage Base Layers - beginning ***/
var lastAddedLayer = bing;

function clickBase(layerName, layer) {
  $("#" + layerName).click(function() {
    map.removeLayer(lastAddedLayer);
    layer.setZIndex(-1);
    map.addLayer(layer);
    lastAddedLayer = layer;
  });
}

clickBase("bing", bing);
clickBase("osm", osm);
clickBase("osm-cycle", osmCycle);
clickBase("osm-outdoors", osmOutdoors);
clickBase("osm-watercolor", osmWatercolor);
clickBase("osm-toner", osmToner);
/*** Manage Base Layers - end ***/

/*** Manage Overlay Layers - beginning ***/
function clickLayer(layerName, layer) {
  $("#" + layerName).click(function() {
    if($(this).is(":checked")) {
      map.addLayer(layer);
      layer.setZIndex(5);
    }
    else if(!$(this).is(":checked"))
      map.removeLayer(layer);
  });
}

clickLayer("main", main);
clickLayer("buried", buried);
clickLayer("lake", lake);
clickLayer("railway", railway);
clickLayer("vehicular", vehicular);
clickLayer("buildings", buildings);
clickLayer("gai-max-V", gaiMaxV);
clickLayer("dusaf1-max-V", dusaf1MaxV);
clickLayer("dusaf4-max-V", dusaf4MaxV);
clickLayer("valduce-divide", valduceDivide);
clickLayer("valduce-area", valduceArea);
clickLayer("gai-max-C", gaiMaxC);
clickLayer("dusaf1-max-C", dusaf1MaxC);
clickLayer("dusaf4-max-C", dusaf4MaxC);
clickLayer("cosia-divide", cosiaDivide);
clickLayer("cosia-area", cosiaArea);
/*** Manage Overlay Layers - end ***/

logoImageMarginLeft = 10;
var logoImage = document.createElement("img");
logoImage.setAttribute("src", "data/icons/logos-2.png");
logoImage.setAttribute("position", "absolute");
logoImage.style.width = "360px";
logoImage.style.marginLeft = String(logoImageMarginLeft) + "px";
document.getElementById("logo").appendChild(logoImage);

var runoffImage = document.createElement("img");
runoffImage.setAttribute("src", "data/icons/legend-small-2.png");
runoffImage.setAttribute("position", "absolute");
runoffImage.style.width = "180px";

function resize() {
  if ($(window).width() < 961) {
    document.getElementById("div-slider-layer-2").style.left = "50px";
    document.getElementById("div-slider-layer-2").style.top = "120px";

    document.getElementById("div-slider-trans-2").style.left = "230px";
    document.getElementById("div-slider-trans-2").style.top = "125px";

    document.getElementById("layer-name-hist-1").style.left = "30px";
    document.getElementById("layer-name-hist-2").style.left = "30px";

    document.getElementById("legend").style.display = "none";

    runoffLegendMarginLeft = 10;
    runoffLegendMarginTop = window.innerHeight - 59 - 62 - 30;  // 62 is the height of the runoff legend, proportional to the width of 180; 30 is margin
    runoffImage.style.marginLeft = String(runoffLegendMarginLeft) + "px";
    runoffImage.style.marginTop = String(runoffLegendMarginTop) + "px";

    logoImageMarginTop = window.innerHeight - 59 - 20;  // 59 is the height of the logo, proportional to the width of 360; 20 is margin
    logoImage.style.marginTop = String(logoImageMarginTop) + "px";
  }
  else {
    document.getElementById("div-slider-layer-2").style.left = "330px";
    document.getElementById("div-slider-layer-2").style.top = "10px";

    document.getElementById("div-slider-trans-2").style.left = "510px";
    document.getElementById("div-slider-trans-2").style.top = "15px";

    document.getElementById("layer-name-hist-1").style.left = "10px";
    document.getElementById("layer-name-hist-2").style.left = "10px";

    document.getElementById("legend").style.display = "block";
    document.getElementById("slider-trans-layer").style.display = "block";

    var runoffLegendMarginLeft = window.innerWidth - 180 - 312;
    var runoffLegendMarginTop = window.innerHeight - 62 - 20;
    runoffImage.style.marginLeft = String(runoffLegendMarginLeft) + "px";
    runoffImage.style.marginTop = String(runoffLegendMarginTop) + "px";

    logoImageMarginTop = window.innerHeight - 59 - 20;
    logoImage.style.marginTop = String(logoImageMarginTop) + "px";
  }

  adjustLegendHeight(legendHeight);
}

function adjustLegendHeight(legendHeight) {
  legendHeight = $("div#legend")[0].scrollHeight;
  var mapH = $("#map").height();

  if (legendHeight > mapH) {
    $("div#legend").css("height", (mapH-10) + "px");
    $("div#legend").css("width", "310px");
    $("div#legend").css("overflow-y", "auto");

    if ($(window).width() > 960) {
      var runoffLegendMarginLeft = window.innerWidth - 180 - 322;
      runoffImage.style.marginLeft = String(runoffLegendMarginLeft) + "px";
    }
  }
  else {
    $("div#legend").css("height", legendHeight);
    $("div#legend").css("width", "300px");
    $("div#legend").css("overflow-y", "visible");
  }
}

function transparency(divId, sliderId, layer) {
  $("#" + divId).change(function() {
    var sliderValue = $("#" + sliderId).val();
    layer.setOpacity(sliderValue/100);
  });
}

transparency("div-slider-leg-trans-1", "slider-leg-trans-1", gaiMaxV);
transparency("div-slider-leg-trans-2", "slider-leg-trans-2", dusaf1MaxV);
transparency("div-slider-leg-trans-3", "slider-leg-trans-3", dusaf4MaxV);
transparency("div-slider-leg-trans-4", "slider-leg-trans-4", gaiMaxC);
transparency("div-slider-leg-trans-5", "slider-leg-trans-5", dusaf1MaxC);
transparency("div-slider-leg-trans-6", "slider-leg-trans-6", dusaf4MaxC);

$("#legend-icon").click(function() {
  $("#legend").toggle();
  if ($("div#legend")[0].scrollHeight > 0)
    legendHeight = $("div#legend")[0].scrollHeight;
  adjustLegendHeight(legendHeight);
});

$("#close-trans").click(function() {
  $("#slider-trans-layer").toggle();
});

$(".runoff").click(function() {
  if($(".runoff:checked").length > 0) {
    document.getElementById("runoff-legend").appendChild(runoffImage);
    //console.log("put the legend");
  }
  else {
    document.getElementById("runoff-legend").removeChild(runoffImage);
    //console.log("remove the legend");
  }
});

// Uncheck & check checkboxes on page refresh.
$(document).ready(function() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if(inputs[i].id == "bing" || inputs[i].id == "main" || inputs[i].id == "buried" || inputs[i].id == "lake")
      inputs[i].checked = true;
    else
      inputs[i].checked = false;
  }

  if ($(window).width() < 961) {
    document.getElementById("div-slider-layer-2").style.left = "50px";
    document.getElementById("div-slider-layer-2").style.top = "120px";

    document.getElementById("div-slider-trans-2").style.left = "230px";
    document.getElementById("div-slider-trans-2").style.top = "125px";

    document.getElementById("layer-name-hist-1").style.left = "30px";
    document.getElementById("layer-name-hist-2").style.left = "30px";

    runoffLegendMarginLeft = 10;
    runoffLegendMarginTop = window.innerHeight - 59 - 62 - 30;
    runoffImage.style.marginLeft = String(runoffLegendMarginLeft) + "px";
    runoffImage.style.marginTop = String(runoffLegendMarginTop) + "px";

    logoImageMarginTop = window.innerHeight - 59 - 20;
    logoImage.style.marginTop = String(logoImageMarginTop) + "px";
  }
  else {
    document.getElementById("div-slider-layer-2").style.left = "330px";
    document.getElementById("div-slider-layer-2").style.top = "10px";

    document.getElementById("div-slider-trans-2").style.left = "510px";
    document.getElementById("div-slider-trans-2").style.top = "15px";

    document.getElementById("layer-name-hist-1").style.left = "10px";
    document.getElementById("layer-name-hist-2").style.left = "10px";

    var runoffLegendMarginLeft = window.innerWidth - 180 - 312;
    var runoffLegendMarginTop = window.innerHeight - 62 - 20;
    runoffImage.style.marginLeft = String(runoffLegendMarginLeft) + "px";
    runoffImage.style.marginTop = String(runoffLegendMarginTop) + "px";

    logoImageMarginTop = window.innerHeight - 59 - 20;
    logoImage.style.marginTop = String(logoImageMarginTop) + "px";
  }

  legendHeight = $("div#legend")[0].scrollHeight;
  adjustLegendHeight(legendHeight);
});
