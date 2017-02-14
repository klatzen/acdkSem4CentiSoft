function findDeveloperFunc() {
    var oReq = new XMLHttpRequest();
    var id = document.getElementById("findDeveloperIDInput").value;
    oReq.addEventListener("load", showDeveloper);
    oReq.open("GET", "http://www.centisoft.dk/api/developer/" + id);
    oReq.send();
}

function showDeveloper() {
    var developerList = JSON.parse(this.responseText);
    var element = document.getElementById("showDeveloperTBody");
    element.innerHTML = "";
    var rowElement = document.createElement("tr");
    var firstColumn = document.createElement("td");
    var secondColumn = document.createElement("td");
    var thirdColumn = document.createElement("td");
    var firstColumnText = document.createTextNode(developerList[0].Id);
    var secondColumnText = document.createTextNode(developerList[0].Name);
    var thirdColumnText = document.createTextNode(developerList[0].Email);
    rowElement.appendChild(firstColumn);
    rowElement.appendChild(secondColumn);
    rowElement.appendChild(thirdColumn);
    firstColumn.appendChild(firstColumnText);
    secondColumn.appendChild(secondColumnText);
    thirdColumn.appendChild(thirdColumnText);
    element.appendChild(rowElement);
}