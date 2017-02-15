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