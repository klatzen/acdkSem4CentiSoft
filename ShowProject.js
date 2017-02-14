function showProjectOnID() {
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
        //}
    }
}


var loadAllBtn = document.getElementById("loadAll");
loadAllBtn.addEventListener("click", function() {
    var req = new XMLHttpRequest();
    req.addEventListener("load", showProjectOnID);
    req.open("GET", "http://www.centisoft.dk/api/Project");
    req.send();
});

/*var submitBtn = document.getElementById("projectSubmit");
submitBtn.addEventListener("click", function() {
    var projID = document.getElementById("idField").value;
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", showProjectOnID(projID));
    oReq.open("GET", "http://www.centisoft.dk/api/Project/{Id}");
    oReq.send();
});*/