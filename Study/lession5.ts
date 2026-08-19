// name function
/*function totalBill(qty:number , price :number)
{
    console.log("Total Price is = " + (qty*price));
}
totalBill(5,6); // call function by name 
*/

/* //Anonymous Function
let getTotalBill = function(qty:number , price :number)
{
    console.log("Total Price is = " + (qty*price));
}
getTotalBill(15,6); //Call by variable name  */

//Arrow Function
let getTotalBill = (qty:number , price :number) =>
{
    console.log("Total Price is = " + (qty*price));
}
getTotalBill(15,15)