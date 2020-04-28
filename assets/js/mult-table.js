function calcMultTable() {
  let multTable = document.querySelector("#mult-table tbody");
  let valorA = parseInt(document.querySelector("#valorA").value);

  multTable.innerHTML = "";

  for (let valorB = 0; valorB <= 10; valorB++) {
    let template = `
        <td>${valorA}</td>
        <td>X</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${valorA * valorB}</td>
        `;
    let tr = document.createElement("tr");

    tr.innerHTML = template;
    multTable.append(tr);
  }
}

calcMultTable();

document.querySelector("#valorA").addEventListener("change", calcMultTable);
