/*function findProjects() {
    var req = new XMLHttpRequest();
    req.addEventListener("load", showProjects);
    req.open("GET", "http://www.centisoft.dk/api/Project");
    req.send();
}
*/


function showProjects(data) {
    //var projectList = JSON.parse(this.responseText);
    var element = document.getElementById("ProjectBody");
    element.innerHTML ="";
    for(var i = 0; i < data.length; i++) {
            var rowElement = document.createElement("tr");
            var firstColumn = document.createElement("td");
            var secondColumn = document.createElement("td");
            var thirdColumn = document.createElement("td");
            var fourthColumn = document.createElement("td");
            var fifthColumn = document.createElement("td");
            var firstColumnText = document.createTextNode(data[i].Id);
            var secondColumnText = document.createTextNode(data[i].Name);
            var thirdColumnText = document.createTextNode(data[i].DueDate);
            var fourthColumnText = document.createTextNode(data[i].CustomerId);
            var fifthColumnText = document.createTextNode("Tasks");            

            rowElement.appendChild(firstColumn);
            rowElement.appendChild(secondColumn);
            rowElement.appendChild(thirdColumn);
            rowElement.appendChild(fourthColumn);
            rowElement.appendChild(fifthColumn);

            firstColumn.appendChild(firstColumnText);
            secondColumn.appendChild(secondColumnText);
            thirdColumn.appendChild(thirdColumnText);
            fourthColumn.appendChild(fourthColumnText);
            fifthColumn.appendChild(fifthColumnText);
            fifthColumn.title = "Tasks";
            var url = "http://www.centisoft.dk/project/" + data[i].Id + "/tasks/";
            fifthColumn.href = url;
            document.body.appendChild(fifthColumn);
            
            element.appendChild(rowElement);
    }
}

function addList(selectbox, text, value){
    var opt = document.createElement("OPTION");
    opt.text = text;
    opt.value = value;
    selectbox.options.add(opt);
}

function showOneProject(data){
    var element = document.getElementById("ProjectBody");
    element.innerHTML ="";
            var rowElement = document.createElement("tr");
            var firstColumn = document.createElement("td");
            var secondColumn = document.createElement("td");
            var thirdColumn = document.createElement("td");
            var fourthColumn = document.createElement("td");
            var firstColumnText = document.createTextNode(data.Id);
            var secondColumnText = document.createTextNode(data.Name);
            var thirdColumnText = document.createTextNode(data.DueDate);
            var fourthColumnText = document.createTextNode(data.CustomerId);

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

function showTaskById(data){
    var element = document.getElementById("taskBody");
    element.innerHTML ="";
            var rowElement = document.createElement("tr");
            var firstColumn = document.createElement("td");
            var secondColumn = document.createElement("td");
            var thirdColumn = document.createElement("td");
            var fourthColumn = document.createElement("td");
            var fifthColumn = document.createElement("td");
            var sixthColumn = document.createElement("td");
            
            var firstColumnText = document.createTextNode(data.Id);
            var secondColumnText = document.createTextNode(data.Name);
            var thirdColumnText = document.createTextNode(data.Description);
            var fourthColumnText = document.createTextNode(data.Created);
            var fifthColumnText = document.createTextNode(data.Duration);
            var sixthColumnText = document.createTextNode(data.ProjectId);

            rowElement.appendChild(firstColumn);
            rowElement.appendChild(secondColumn);
            rowElement.appendChild(thirdColumn);
            rowElement.appendChild(fourthColumn);
            rowElement.appendChild(fifthColumn);
            rowElement.appendChild(sixthColumn);

            firstColumn.appendChild(firstColumnText);
            secondColumn.appendChild(secondColumnText);
            thirdColumn.appendChild(thirdColumnText);
            fourthColumn.appendChild(fourthColumnText);
            fifthColumn.appendChild(fifthColumnText);
            sixthColumn.appendChild(sixthColumnText);
            
            element.appendChild(rowElement);
}

function showTasksById(data){
            var element = document.getElementById("taskBody");
            element.innerHTML ="";
            for(var i = 0; i < data.length; i++){
                var rowElement = document.createElement("tr");
                var firstColumn = document.createElement("td");
                var secondColumn = document.createElement("td");
                var thirdColumn = document.createElement("td");
                var fourthColumn = document.createElement("td");
                var fifthColumn = document.createElement("td");
                var sixthColumn = document.createElement("td");
                
                var firstColumnText = document.createTextNode(data[i].Id);
                var secondColumnText = document.createTextNode(data[i].Name);
                var thirdColumnText = document.createTextNode(data[i].Description);
                var fourthColumnText = document.createTextNode(data[i].Created);
                var fifthColumnText = document.createTextNode(data[i].Duration);
                var sixthColumnText = document.createTextNode(data[i].ProjectId);

                rowElement.appendChild(firstColumn);
                rowElement.appendChild(secondColumn);
                rowElement.appendChild(thirdColumn);
                rowElement.appendChild(fourthColumn);
                rowElement.appendChild(fifthColumn);
                rowElement.appendChild(sixthColumn);

                firstColumn.appendChild(firstColumnText);
                secondColumn.appendChild(secondColumnText);
                thirdColumn.appendChild(thirdColumnText);
                fourthColumn.appendChild(fourthColumnText);
                fifthColumn.appendChild(fifthColumnText);
                sixthColumn.appendChild(sixthColumnText);
                
                element.appendChild(rowElement);
            }
}


function updatemessageProject() {
    alert("detvirker");
}


