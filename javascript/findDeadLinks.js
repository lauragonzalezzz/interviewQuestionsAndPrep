/*Write a method that accepts a general domain ("www.domain.com")
which returns a list of dead links.
Anything without the 200 header is considered a dead link. */
//This was a whiteboard problem so I didn't flesh out the ajax request or the string parsing. **TODO**

function findDeadLinks(domain){
  if (typeof domain !== "string") {
    throw new Error("Please enter a domain string.");
  }
  var toVisit = [];
  var visited = {};
  var deadLinks = [];

  toVisit.push(domain);
  while (true) {
    if (toVisit.length === 0) {
      break;
    }
    var current = toVisit.pop();
    if (visited.hasOwnProperty(current)) {
      current = toVisit.pop();
      continue;
    }
    var response = "ajax get request to link()";
    if (!response.status(200)) {
      deadLinks.push(current);
      visited[current] = true;
    }
    else {
      var newLinks = getLinks(current);
      newLinks.foreach(function(link) {
        toVisit.push(link);
      });
    };
  };
  return deadLinks;
}

function getLinks(){
  //get the links via string parsing
}