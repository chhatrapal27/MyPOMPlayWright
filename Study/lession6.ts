//call back function
function prepaerfood(callback: ()=> void)
{
    setTimeout(() => {
    console.log("Chef Prepaering the food");   
    callback();
    }, 5000);
}

function notifyCustomer()
{
    console.log("Food is ready, Please collect it ");
}
prepaerfood(notifyCustomer);