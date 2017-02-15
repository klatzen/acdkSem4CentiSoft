function showDeveloper(data) {
    var element = document.getElementById("showDeveloperTBody");
    element.innerHTML = "";
    var rowElement = document.createElement("tr");
    var firstColumn = document.createElement("td");
    var secondColumn = document.createElement("td");
    var thirdColumn = document.createElement("td");
    var firstColumnText = document.createTextNode(data.Id);
    var secondColumnText = document.createTextNode(data.Name);
    var thirdColumnText = document.createTextNode(data.Email);
    rowElement.appendChild(firstColumn);
    rowElement.appendChild(secondColumn);
    rowElement.appendChild(thirdColumn);
    firstColumn.appendChild(firstColumnText);
    secondColumn.appendChild(secondColumnText);
    thirdColumn.appendChild(thirdColumnText);
    element.appendChild(rowElement);
}