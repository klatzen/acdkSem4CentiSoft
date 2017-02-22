function showTaskById(task){
    var element = document.getElementById("taskBody");
    element.innerHTML ="";
            var rowElement = document.createElement("tr");
            var firstColumn = document.createElement("td");
            var secondColumn = document.createElement("td");
            var thirdColumn = document.createElement("td");
            var fourthColumn = document.createElement("td");
            var fifthColumn = document.createElement("td");
            var sixthColumn = document.createElement("td");
            
            var firstColumnText = document.createTextNode(task.Id);
            var secondColumnText = document.createTextNode(task.Name);
            var thirdColumnText = document.createTextNode(task.Description);
            var fourthColumnText = document.createTextNode(task.Created);
            var fifthColumnText = document.createTextNode(task.Duration);
            var sixthColumnText = document.createTextNode(task.ProjectId);

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