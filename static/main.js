function render() {
  const ducks = [
    { name: "Wouter", points: "" },
    { name: "Greg", points: "" },
    { name: "Philippe", points: "" },
    { name: "Jay", points: "d" },
    { name: "Pierre", points: "" },
    { name: "Laura", points: "" },
    { name: "Loris", points: "" },
    { name: "Andrey", points: "" }
  ];

  const icons = {
    u: "unicorn",
    d: "duck",
    p: "pizza"
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
      uni.src = `static/icons/${icons[c] || icons.d}.png`;
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
