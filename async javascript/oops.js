// what is this
class stundentDetails {
  constructor(name, rollno, age, marks, totalMark) {
    this.name = name;
    this.rollno = rollno;
    this.age = age;
    this.precent = () => {
      let percentage = (marks / totalMark) * 100;
      return percentage;
    };
  }
}

let stu = {};
stu.name = "sdfds";


let student1 = new stundentDetails("sajid", "dx897", 21, 400, 500);
let student2 = new stundentDetails("ankita", "dx4545", 20);
console.log(student1.precent());
console.log(student2.name);

//constructor function

function orderStatus(status, message, time, date, error) {
  this.status = status;
  this.message = message;
  this.deliveryTime = time;
  this.deliveryDate = date;
  this.error = error;
}

let order1 = new orderStatus("pending","order is delayed due to bad weather","3pm","2-12-2025","late delivery")
let order2 = new orderStatus("delivered","thanks for shopping with us","00:15","30-jul-2025")
console.log(order1,order2)

console.log(`your order has been ${order1.status} the delivery thime is ${order1.deliveryTime}`)


class HTMLcollection{
    constructor(element){
        function map(array){
            let dupArry = []
            for (let i=0;i<array.length;i++){
                dupArry.push(array[i]+outerHtml)
            }

            return dupArry

        }
    }




}


(function (){
    console.log("hello world");
})()
