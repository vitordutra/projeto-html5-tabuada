function calcMultTable() {
  // Obtendo do DOM o tbody da tabela
  let multTable = document.querySelector("#mult-table tbody");
  // Obtendo o valor A do campo input number e convertendo em inteiro.
  let valorA = parseInt(document.querySelector("#valorA").value);

  // Limpando o conteúdo do tbody
  multTable.innerHTML = "";

  for (let valorB = 0; valorB <= 10; valorB++) {
    let template = `
        <td>${valorA}</td>
        <td>X</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${valorA * valorB}</td>
        `;

    // Criando o elemento tr
    let tr = document.createElement("tr");

    // Inserindo a linha na tabela
    tr.innerHTML = template;
    multTable.append(tr);
  }
}

calcMultTable();

// Adicionando o Evento de Alteração ao Campo Número
document.querySelector("#valorA").addEventListener("change", calcMultTable);
