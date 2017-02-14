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

function InsertDeveloperFunc() {
    var oReq = new XMLHttpRequest();
    var parameters = {"Name": document.getElementById("name"), "Email": document.getElementById("email") };
    var jsonParam = JSON.stringify(parameters);
    oReq.addEventListener("load", RequestMsg);
    oReq.open("POST", "http://centisoft.dk/api/Developer/");
    oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    oReq.send(jsonParam);
}

function UpdateDeveloperFunc() {
    var oReq = new XMLHttpRequest();
    var parameters = {"Id": document.getElementById("id"), "Name": document.getElementById("name"), "Email": document.getElementById("email") };
    var jsonParam = JSON.stringify(parameters);
    oReq.addEventListener("load", RequestMsg);
    oReq.open("PUT", "http://centisoft.dk/api/Developer/");
    oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    oReq.send(jsonParam);
}

function DeleteDeveloper(){
    var oReq = new XMLHttpRequest();
    var id = document.getElementById("id").value;

    oReq.addEventListener("load", RequestMsg);
    oReq.open("DELETE", "http://centisoft.dk/api/Developer/" + id);
    oReq.send();
}

function RequestMsg() {
    alert("Success!");
}