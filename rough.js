let obj = {
  customer : {} ,
  item : []
}


let det = {
  name: "Customer",
  lastName: "King",
  mobile: 8511760893
}
let to = 1500;

let list = { brand: "Apple", product: "iPhone", quantity: 5 , price: 90 }


obj.customer = det; // adding det to customer
 obj.item.push(list); // adding list to item
 obj = to


console.log(obj);
