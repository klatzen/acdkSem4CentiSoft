// Shows all projects
function showProjects(data) {
    var element = document.getElementById("ProjectBody");
    //var link = '<a href="http://centisoft.dk/Project/">Tasks</a>';
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

            rowElement.appendChild(firstColumn);
            rowElement.appendChild(secondColumn);
            rowElement.appendChild(thirdColumn);
            rowElement.appendChild(fourthColumn);
            rowElement.appendChild(fifthColumn);

            var link = document.createElement("a");
            //link.href = "http://centisoft.dk/Project/" + data[i].Id + "/tasks/";
            link.href = "ProjectShowTask.html";
            link.textContent = "Tasks";
            
            firstColumn.appendChild(firstColumnText);
            secondColumn.appendChild(secondColumnText);
            thirdColumn.appendChild(thirdColumnText);
            fourthColumn.appendChild(fourthColumnText);
            fifthColumn.appendChild(link);
        
            element.appendChild(rowElement);
    }
}

//Shows on project based on ProjectId
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

//Shows task based on ProjectId and TaskId
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

//Shows all tasks based on projectId
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




