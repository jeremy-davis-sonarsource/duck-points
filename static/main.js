function render() {
  const ducks = [
    { name: "Wouter", points: "ddd" },
    { name: "Siegfried", points: "dd" },
    { name: "Greg", points: "dddd" },
    { name: "Philippe", points: "d" },
    { name: "Jay", points: "ddu" },
    { name: "Pierre", points: "u" }
  ];

  const icons = {
    u: "unicorn.png",
    d: "duck.png"
  };

  const body = document.body;

  const background = document.createElement("background");
  background.className = "background";
  body.appendChild(background);

  const table = document.createElement("table");
  body.appendChild(table);

  console.log(document.body);

  ducks.sort(byPoints).forEach(duck => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const points = document.createElement("td");
    row.appendChild(name);
    row.appendChild(points);
    table.appendChild(row);

    name.innerText = duck.name;
    duck.points.split("").forEach((c, i) => {
      const uni = document.createElement("img");
      uni.src = "/static/" + (icons[c] || icons.d);
      points.appendChild(uni);
    });
  });

  function byPoints(a, b) {
    if (a.points.length === b.points.length) {
      return a.name > b.name ? 1 : -1;
    } else {
      return b.points.length - a.points.length;
    }
  }
}

render();
