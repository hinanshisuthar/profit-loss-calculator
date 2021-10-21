//referencing HTML elements
var buyingPrice = document.querySelector("#buying-price");
var stockVolume = document.querySelector("#stock-volume");
var sellingPrice = document.querySelector("#selling-price");
var checkBtn = document.querySelector("#check-btn");
var result  = document.querySelector("#result");
var inputDiv = document.querySelector("#input-div");
var headIng = document.querySelector(".heading");

checkBtn.addEventListener('click',clickHandler); //listen to click event

function clickHandler(){
  //calculations
  if(Number(buyingPrice.value) > 0 && ( Number(stockVolume.value) > 0 &&  Number(sellingPrice.value) > 0)){
    var totalBuyingPrice = Number(buyingPrice.value) * Number(stockVolume.value);
     var totalSellingPrice = Number(sellingPrice.value) * Number(stockVolume.value);
     if(totalBuyingPrice < totalSellingPrice){
         var profit = totalSellingPrice - totalBuyingPrice ;
        var profitPercent = (profit / totalBuyingPrice) * 100 ;
         result.innerText = "Hey! this trade was profitable. You earned " + profitPercent + "% profit. Which is total Rs. " + profit + "." 
         if(profit > 50){
           headIng.style.color = "#65A30D";
           result.style.color = "#65A30D";
         }  
     }
     else if(totalBuyingPrice > totalSellingPrice){
         var loss = totalBuyingPrice - totalSellingPrice;
         var lossPercent = ( loss/totalBuyingPrice)*100;
         result.innerText = "Hey! this trade was not profitable." //display message
        + " And you lost " + lossPercent + "% . Which is total Rs. " + loss + "."  //display profit and loss %tage and values
         if(lossPercent > 50){
            headIng.style.color = "#DC2626"; //change color
            result.style.color = "#DC2626" //change color
         }
     }
     else{
         result.innerText = "This trade was neither Profitable nor Lossy-making." //display message
     }
    }
 else{
     result.innerText = "Are you trying to fool me here -_- ? Enter values greater than 0" //display message
 }
}
