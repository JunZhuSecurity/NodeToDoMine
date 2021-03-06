App = Ember.Application.create({
  rootElement: '#app'
});

//App.ApiData = [
//  {
//    "label"             : "Network Requests",
//    "start"             : 1347800918,
//    "end"               : 1347801818,
//    "className"         : "network"
//  },
//  {
//    "label"             : "Layout",
//    "start"             : 1347801100,
//    "end"               : 1347801918,
//    "className"         : "layout"
//  },
//  {
//    "label"             : "index.html",
//    "start"             : 1347800918,
//    "end"               : 1347801818,
//    "className"         : "network",
//    "parent"            : 0
//  },
//  {
//    "label"             : "Paint",
//    "start"             : 1347801118,
//    "end"               : 1347801818,
//    "className"         : "layout",
//    "sections"          : [{
//                            "start"     : 1347801118,
//                            "end"       : 1347801218
//                          }, {
//                            "start"     : 1347801618,
//                            "end"       : 1347801718
//                          }],
//    "parent"            : 1
//  },
//  {
//    "label"             : "Reflow",
//    "start"             : 1347801756,
//    "end"               : 1347801907,
//    "className"         : "layout",
//    "parent"            : 1
//  },
//  {
//    "label"             : "screen.css",
//    "start"             : 1347801218,
//    "end"               : 1347801618,
//    "className"         : "network",
//    "parent"            : 2
//  },
//  {
//    "label"             : "app.js",
//    "start"             : 1347801418,
//    "end"               : 1347801818,
//    "className"         : "network",
//    "parent"            : 2
//  },
//  {
//    "label"             : "JavaScript",
//    "start"             : 1347801619,
//    "end"               : 1347801920,
//    "className"         : "javascript"
//  },
//  {
//    "label"             : "domready",
//    "start"             : 1347801664,
//    "end"               : 1347801670,
//    "className"         : "javascript",
//    "parent"            : 7
//  },
//  {
//    "label"             : "eval",
//    "start"             : 1347801447,
//    "end"               : 1347801920,
//    "className"         : "javascript",
//    "sections"          : [{
//                            "start"     : 1347801447,
//                            "end"       : 1347801497
//                          }, {
//                            "start"     : 1347801831,
//                            "end"       : 1347801920
//                          }],
//    "parent"            : 7
//  },
//  {
//    "label"             : "load",
//    "start"             : 1347801820,
//    "end"               : 1347801830,
//    "className"         : "javascript",
//    "parent"            : 7
//  }
//];

d3.json("data/mperday.json", function(error, flare) {
	App.ApiData = flare;
	});

//	function update(source) {
//
//	  // Compute the flattened node list. TODO use d3.layout.hierarchy.
//	  var nodes = tree.nodes(root);
//
//	  var height = Math.max(500, nodes.length * barHeight + margin.top + margin.bottom);
//
//	  d3.select("svg").transition()
//	      .duration(duration)
//	      .attr("height", height);
//
//	  d3.select(self.frameElement).transition()
//	      .duration(duration)
//	      .style("height", height + "px");
//
//	  // Compute the "layout".
//	  nodes.forEach(function(n, i) {
//	    n.x = i * barHeight;
//	  });
//
//	  // Update the nodes…
//	  var node = svg.selectAll("g.node")
//	      .data(nodes, function(d) { return d.id || (d.id = ++i); });
//
//	  var nodeEnter = node.enter().append("g")
//	      .attr("class", "node")
//	      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
//	      .style("opacity", 1e-6);
//
//	  // Enter any new nodes at the parent's previous position.
//	  nodeEnter.append("rect")
//	      .attr("y", -barHeight / 2)
//	      .attr("height", barHeight)
//	      .attr("width", barWidth)
//	      .style("fill", color)
//	      .on("click", click);
//
//	  nodeEnter.append("text")
//	      .attr("dy", 3.5)
//	      .attr("dx", 5.5)
//	      .text(function(d) { return d.name; });
//
//	  // Transition nodes to their new position.
//	  nodeEnter.transition()
//	      .duration(duration)
//	      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
//	      .style("opacity", 1);
//
//	  node.transition()
//	      .duration(duration)
//	      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
//	      .style("opacity", 1)
//	    .select("rect")
//	      .style("fill", color);
//
//	  // Transition exiting nodes to the parent's new position.
//	  node.exit().transition()
//	      .duration(duration)
//	      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
//	      .style("opacity", 1e-6)
//	      .remove();
//
//	  // Update the links…
//	  var link = svg.selectAll("path.link")
//	      .data(tree.links(nodes), function(d) { return d.target.id; });
//
//	  // Enter any new links at the parent's previous position.
//	  link.enter().insert("path", "g")
//	      .attr("class", "link")
//	      .attr("d", function(d) {
//	        var o = {x: source.x0, y: source.y0};
//	        return diagonal({source: o, target: o});
//	      })
//	    .transition()
//	      .duration(duration)
//	      .attr("d", diagonal);
//
//	  // Transition links to their new position.
//	  link.transition()
//	      .duration(duration)
//	      .attr("d", diagonal);
//
//	  // Transition exiting nodes to the parent's new position.
//	  link.exit().transition()
//	      .duration(duration)
//	      .attr("d", function(d) {
//	        var o = {x: source.x, y: source.y};
//	        return diagonal({source: o, target: o});
//	      })
//	      .remove();
//
//	  // Stash the old positions for transition.
//	  nodes.forEach(function(d) {
//	    d.x0 = d.x;
//	    d.y0 = d.y;
//	  });
//	}
//	

App.ChromeDevToolsTimetreeView = Ember.Timetree.TimetreeView.extend({
  timeTickFormat: Ember.computed(function() {
    var minTime = this.get('xScale').domain()[0];
    var minTime = d3.min(this.content.mapProperty('start'));
    return function(d){ return parseInt(d - minTime) + 'ms'; };
  }).property(),

  durationFormatter: function(n) { return (n.end - n.start) + 'ms'; }
});