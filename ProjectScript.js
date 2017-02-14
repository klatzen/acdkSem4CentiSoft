function findProjects() {
    var req = new XMLHttpRequest();
    req.addEventListener("load", showProjects);
    req.open("GET", "http://www.centisoft.dk/api/Project");
    req.send();
}

function findProjectOnID() {
    var oReq = new XMLHttpRequest();
    var projID = document.getElementById("idField").value;
    oReq.addEventListener("load", showProjects(projID));
    oReq.open("GET", "http://www.centisoft.dk/api/Project/?Id="+ projID);
    oReq.send();

}

function showProjects(id) {
    var projectList = JSON.parse(this.responseText);
    var element = document.getElementById("ProjectBody");
    element.innerHTML ="";
    for(var i = 0; i < projectList.length; i++) {
    //if(projectList[i].Id === id || id === null) {
            var rowElement = document.createElement("tr");
            var firstColumn = document.createElement("td");
            var secondColumn = document.createElement("td");
            var thirdColumn = document.createElement("td");
            var fourthColumn = document.createElement("td");
            var firstColumnText = document.createTextNode(projectList[i].Id);
            var secondColumnText = document.createTextNode(projectList[i].Name);
            var thirdColumnText = document.createTextNode(projectList[i].DueDate);
            var fourthColumnText = document.createTextNode(projectList[i].CustomerId);

            rowElement.appendChild(firstColumn);
            rowElement.appendChild(secondColumn);
            rowElement.appendChild(thirdColumn);
            rowElement.appendChild(fourthColumn);

            firstColumn.appendChild(firstColumnText);
            secondColumn.appendChild(secondColumnText);
            thirdColumn.appendChild(thirdColumnText);
            fourthColumn.appendChild(fourthColumnText);
            
            element.appendChild(rowElement);
        }
    //}
}

function InsertProject() {
    var oReq = new XMLHttpRequest();
    var parameters = {"Id": document.getElementById("id"), "Name": document.getElementById("name"),"DueDate": document.getElementById("dueDate"), "CustomerId": document.getElementById("customerID") };
    var jsonParam = JSON.stringify(parameters);
    oReq.addEventListener("load", updatemessageProject);
    oReq.open("POST", "http://centisoft.dk/api/Project/");
    oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    oReq.send(jsonParam);
}


function updatemessageProject() {
    alert("detvirker");
}

function updateProject() {
    var oReq = new XMLHttpRequest();
    var parameters = {"Id": document.getElementById("id"), "Name": document.getElementById("name"),"DueDate": document.getElementById("dueDate"), "CustomerId": document.getElementById("customerID") };
    var jsonParam = JSON.stringify(parameters);
    oReq.addEventListener("load", updatemessageProject);
    oReq.open("PUT", "http://centisoft.dk/api/Project/");
    oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    oReq.send(jsonParam);
}

function DeleteProject(){
    var oReq = new XMLHttpRequest();
    var projId = document.getElementById("id").value;
    oReq.addEventListener("load", updatemessageProject);
    oReq.open("DELETE", "http://centisoft.dk/api/Project/" + id);
    oReq.send();
}


