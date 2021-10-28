d3.select("main").selectAll("li")
  .data(data)
  .enter()
  .append("li")
  .text((d) => JSON.stringify(d) );

