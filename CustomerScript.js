function findCustomerFunc() {
    var oReq = new XMLHttpRequest();
    var id = document.getElementById("findCustomerIDInput").value;
    oReq.addEventListener("load", showCustomer);
    oReq.open("GET", "http://www.centisoft.dk/api/customer/" + id);
    oReq.send();
}

function showCustomer() {
    var customerList = JSON.parse(this.responseText);
    var element = document.getElementById("showCustomerTBody");
    element.innerHTML = "";
    var rowElement = document.createElement("tr");
    var firstColumn = document.createElement("td");
    var secondColumn = document.createElement("td");
    var thirdColumn = document.createElement("td");
    var fourthColumn = document.createElement("td");
    var fifthColumn = document.createElement("td");
    var sixthColumn = document.createElement("td");
    var seventhColumn = document.createElement("td");
    var eighthColumn = document.createElement("td");
    var ninethColumn = document.createElement("td");
    var tenthColumn = document.createElement("td");
    var eleventhColumn = document.createElement("td");
    var firstColumnText = document.createTextNode(customerList[0].Id);
    var secondColumnText = document.createTextNode(customerList[0].Name);
    var thirdColumnText = document.createTextNode(customerList[0].Address);
    var fourthColumnText = document.createTextNode(customerList[0].Address2);
    var fifthColumnText = document.createTextNode(customerList[0].Zip);
    var sixthColumnText = document.createTextNode(customerList[0].City);
    var seventhColumnText = document.createTextNode(customerList[0].Country);
    var eighthColumnText = document.createTextNode(customerList[0].Email);
    var ninethColumnText = document.createTextNode(customerList[0].Phone);
    var tenthColumnText = document.createTextNode(customerList[0].ClientId);
    var eleventhColumnText = document.createTextNode(customerList[0].Projects);
    rowElement.appendChild(firstColumn);
    rowElement.appendChild(secondColumn);
    rowElement.appendChild(thirdColumn);
    rowElement.appendChild(fourthColumn);
    rowElement.appendChild(fifthColumn);
    rowElement.appendChild(sixthColumn);
    rowElement.appendChild(seventhColumn);
    rowElement.appendChild(eighthColumn);
    rowElement.appendChild(ninethColumn);
    rowElement.appendChild(tenthColumn);
    rowElement.appendChild(eleventhColumn);
    firstColumn.appendChild(firstColumnText);
    secondColumn.appendChild(secondColumnText);
    thirdColumn.appendChild(thirdColumnText);
    fourthColumn.appendChild(fourthColumnText);
    fifthColumn.appendChild(fifthColumnText);
    sixthColumn.appendChild(sixthColumnText);
    seventhColumn.appendChild(seventhColumnText);
    eighthColumn.appendChild(eighthColumnText);
    ninethColumn.appendChild(ninethColumnText);
    tenthColumn.appendChild(tenthColumnText);
    eleventhColumn.appendChild(eleventhColumnText);
    element.appendChild(rowElement);
}

function InsertCustomerFunc() {
    var oReq = new XMLHttpRequest();
    var element = document.getElementById("CustomerForm").elements;
    var parameters = {"Name": element.Name, "Address": element.Address, "Address2": element.Address2,"Zip": element.Zip, "City":element.City, "Country":element.Country, "Email":element.Email, "Phone":element.Phone,"ClientId":element.ClientId,"Projects":element.Projects};
    var jsonParam = JSON.stringify(parameters);
    oReq.addEventListener("load", RequestMsg);
    oReq.open("POST", "http://centisoft.dk/api/Customer/");
    oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    oReq.send(jsonParam);
}

function UpdateCustomerFunc() {
    var oReq = new XMLHttpRequest();
    var element = document.getElementById("CustomerForm").elements;
    var parameters = {"Id":element.id, "Name": element.Name, "Address": element.Address, "Address2": element.Address2,"Zip": element.Zip, "City":element.City, "Country":element.Country, "Email":element.Email, "Phone":element.Phone,"ClientId":element.ClientId,"Projects":element.Projects};
    var jsonParam = JSON.stringify(parameters);
    oReq.addEventListener("load", RequestMsg);
    oReq.open("PUT", "http://centisoft.dk/api/Customer/");
    oReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    oReq.send(jsonParam);
}

function DeleteCustomer(){
    var oReq = new XMLHttpRequest();
    var id = document.getElementById("id").value;

    oReq.addEventListener("load", RequestMsg);
    oReq.open("DELETE", "http://centisoft.dk/api/Customer/" + id);
    oReq.send();
}

function RequestMsg() {
    alert("Success!");
}