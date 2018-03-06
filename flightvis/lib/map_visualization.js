

(function(){

  /******************************Global Variables **********************************/
  let header = document.getElementById("map")

  let margin = { top: 0, left: 0, right: 0, down: 0},
    height = 690 - margin.top - margin.down,
    width = header.clientWidth;

  let zoom = d3.zoom()
    .scaleExtent([.5, 8])
    .translateExtent([[0, 0], [width, height]])
    .on("zoom", zoomed);

  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;
/******************************Global Variables **********************************/

  let drag = d3.drag()
                .on("start", dragstart)
                .on("drag", dragged)
                .on("end", dragend)

  let vInit, o0;


  let play = true;

  function dragstart(){
  	vInit = projection.invert(d3.mouse(this));
  	svg.insert("path")
       .datum({type: "Point", coordinates: vInit})
       .attr("class", "point")
       .attr("d", path);

   gMap.selectAll(".plane").remove()
    if (play) {
      clearInterval(time)
    }

  }

  function dragged(){
  	var vFin = projection.invert(d3.mouse(this));
  	o0 = projection.rotate();

  	var o1 = eulerAngles(vInit, vFin, o0);
  	projection.rotate(o1);

  	svg.selectAll(".point")
  	 		.datum({type: "Point", coordinates: vFin});
    svg.selectAll("path").attr("d", path);

  }

  function dragend(){
  	svg.selectAll(".point").remove();
    if (play) {
      time = setInterval(
        interval, intSpeed)
    }
  }
//


  let svg = d3.select("#map")
              .append("svg")
              .attr("height", height + margin.top + margin.down)
              .attr("width", width + margin.left + margin.right)
              .call(drag)
              .call(zoom)


  let rectSVG = svg.append("pattern")
                    .attr("class", "rect-svg")
                    .attr("height", height + margin.top + margin.down)
                    .attr("width", width + margin.left + margin.right)


  let gMap = svg.append("g")
                .attr("class", "g-map")
                .attr("transform", "translate("+ margin.left + "," + margin.top +")")
  //
  // function startDrag(d){
  //   d3.select(this).
  // }

  let earthScale = 250;


  let circGMap = gMap.append("circle")
                .attr("class", "circ-g-map")
                .attr("height", 100)
                .attr("width", 100)
                .attr("cx", width/2)
                .attr("cy", height/2)
                .attr("r", earthScale)
                .attr("fill", "grey")


  let projection = d3.geoOrthographic()
                .translate([ width / 2, height / 2 ])
                .rotate([245, -18, 0])
                .scale(earthScale);




    function zoomed() {
      gMap.attr("transform", d3.event.transform );
    }

    d3.queue()
      .defer(d3.json, "countries.topojson")
      .defer(d3.json, "airports.topojson")
      .defer(d3.csv, "flights.csv")
      .await(ready);





    var path = d3.geoPath()
      .projection(projection);



    let intSpeed = 10;

    let time;

    let timer = 0;
    let timeToFlight = {};
    let airport = 0;

    const interval = function(){
      // debugger
      //
      
      

        if (timeToFlight[timer]) {
          // console.log(timer);
          // console.log(timeToFlight);
          
          timeArr = timeToFlight[timer];
          console.log(timeArr);
          // console.log(flight);
          for (var i = 0; i < timeArr.length; i++) {
            
            timeArr[i];
            // console.log(timeArr[i]);
            flight = flightDatas[timeArr[i]]
            
            transition(
              gMap.datum(flight)
                  .append("path")
                  .attr("class", "plane")
                  .attr("d", path)
              ,
              gMap.datum({type: "LineString", coordinates: [flight.coordinates, flight.DESTCOORD]})
                  .append("path")
                  .attr("class", "route")
                  .attr("d", path)
                  .attr('opacity', 0.6)
                  .attr('fill', "none")
                  .transition()
                  .duration(intSpeed*gMap.select(".route").node().getTotalLength())
                  );
        }

      }
      timer += 10
      if (timer%100 >= 60) {
        timer += 100 - timer%100
      }
      if (timer >= 2400) {
        timer = 0;
      }
    }

    let flightDatas;


    function transition(plane, route) {
      let l = route.node().getTotalLength();
      plane.attr('opacity', 1)
            .transition()
            .duration(intSpeed*route.node().getTotalLength())
            .attrTween("transform", translateAttr(route.node()))
            .attr("d", path)
            .remove()
      ;
    }

    function translateAttr(path) {
      var l = path.getTotalLength();
      return function(d, i, a) {
        return function(t) {
          var p = path.getPointAtLength(t * l);
          var po = path.getPointAtLength(0);
          return "translate(" + (p.x-po.x) + "," + (p.y-po.y) + ")";
        };
      };
    }

    function ready(error, countriesData, airportsData, flightData) {
      var countriesParsed = topojson.feature(countriesData, countriesData.objects.countries).features;

      gMap.selectAll(".country")
        .data(countriesParsed)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path)
        .on("mouseover", function(d){
          d3.select(this)
          .attr("class", "activeCountry")
          .attr("fill", "lightgrey");

          // debugger
          let dCoord;
          gDet= svg.append("g")
          .attr("class", "rect-details")
          .attr("transform", "translate(0, 0)")
          .style("pointer-events", "all")

          gDet.append("rect")
          .attr("height", 70)
          .attr("width", 250)
          .attr("x", 25)
          .attr("y", 25)
          .style("pointer-events", "all")

          gDet.append("text")
          .attr("class", "countrydetails")
          .attr("x", 30)
          .attr("y", 55)
          .text(
            "• Country: " + d.properties.NAME
          )
          gDet.append("text")
          .attr("class", "countrydetails")
          .attr("x", 30)
          .attr("y", 75)
          .text(
            "• Continent: " + d.properties.CONTINENT
          )
        })
        .on("mouseout", function(d){
          d3.selectAll(".activeCountry")
          .attr("class", "country")

          d3.selectAll(".rect-details").remove()
        });




      let airports = topojson.feature(airportsData, airportsData.objects.airports).features;

      airport= airports


      //Importing Airport coordinates 
      let airportsNameCoord = {};
      for (var i = 0; i < airports.length; i++) {
        let iata = airports[i].properties.iata_code;
        let coord = airports[i].geometry.coordinates
        airportsNameCoord[iata] = {coord: coord}
      }

      
      flightDatas = flightData;
      // console.log(flightData);
      for (var i = 0; i < flightData.length; i++) 
      {
        let orgAir = flightData[i]["ORIGIN"];
        let destAir = flightData[i]["DEST"];
        let depTime = flightData[i]["DEP_TIME"];
        if (airportsNameCoord[orgAir] && airportsNameCoord[destAir]) {
          flightData[i]["type"] = "Point";
          flightData[i]["coordinates"] = airportsNameCoord[orgAir]["coord"];
          flightData[i]["DESTCOORD"] = airportsNameCoord[destAir]["coord"];
          // flights.push(flightData[i])

          //Importing time data
          if (!timeToFlight[parseInt(flightData[i].DEP_TIME)]) {
            timeToFlight[parseInt(flightData[i].DEP_TIME)] = []
          }
          timeToFlight[parseInt(flightData[i].DEP_TIME)].push(i)
        }

        
        
       
        
      }



      time = setInterval(
        interval, intSpeed)
        

      gMap.selectAll(".airport")
      .data(airports)
      .enter()
      .append("path")
      .attr("class", "airport")
      .attr("d", path.pointRadius(2))
      // .attr("scale", 100)
      .on("mouseover", function(d){
        //
        d3.select(this)
        .attr("class", "activeAirport")
        .attr("fill", "red")

        gDet= svg.append("g")
        .attr("class", "rect-details")
        .attr("transform", "translate(0, 0)")
        .style("pointer-events", "all")

        gDet.append("rect")
        .attr("height", 70)
        .attr("width", 250)
        .attr("x", 25)
        .attr("y", 25)
        .style("pointer-events", "all")

        gDet
        .append("text")
        .attr("class", "countrydetails")
        .attr("x", 30)
        .attr("y", 55)
        .text(
          "• Airport: " + d.properties.name
        )
        gDet
        .append("text")
        .attr("class", "countrydetails")
        .attr("x", 30)
        .attr("y", 75)
        .text(
          "• IATA: " + d.properties.iata_code
        )
        //
      })
      // .on("click", )
      .on("mouseout", function(d){
        d3.selectAll("text.countrydetails").remove()

        d3.selectAll(".activeAirport")
        .attr("class", "airport")
        .attr("d", path.pointRadius(2));

      });
    }
})();
