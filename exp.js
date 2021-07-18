function exp(){
    var itemName=document.getElementById("item").value;
    var itemDate=document.getElementById("date").value;
    var itemCost=Number(document.getElementById("amount").value);
    var tableName=document.getElementById("exptable");
    var button=document.createElement("button");
    button.innerHTML="Clear";
    button.addEventListener("click",rem);
    var row=tableName.insertRow(1);
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
        //alert("hi");
    cell0.innerHTML=itemDate;
    cell1.innerHTML=itemName;
    cell2.innerHTML=itemCost;
    cell3.appendChild(button);
    document.getElementById("item").value=" ";
    document.getElementById("date").value=" ";
    document.getElementById("amount").value=" ";
}
function rem(){
    var item=this.closest("tr");
    item.remove();
}
function total(){
    var table=document.getElementById("exptable");
    var i;
    var a,tot=0;
    var rowLength=table.rows.length;
    for(i=1;i<rowLength;i++){
        a=table.rows[i].cells[2].innerHTML;
        tot=+tot + +a;
    }
    document.getElementById("total").innerHTML=tot;
}