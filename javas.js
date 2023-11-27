document.write("<h1>boom</h1>");
// datatype ชนิดข้อมูล
// ิboolean ค่าตรรกศาสตร์ true/false
// Number ตัวเลข
// String ข้อความ
// Object ข้อมูลวัตถุ {}
// Array ชุดข้อมูล []
// ชนิดข้อมูลที่เกี่ยวข้องกับตัวแปร
// typeof เช็คชนิดข้อมูล
// null ไม่มีการกำหนดค่า
// undefined ค่าเริ่มต้นที่ไม่ได้กำหนด

let money_two = 500;
// แปลงค่าเป็นnumberเป็นstring
let price = 99.99.toString();
// let massage = "boom";
let name_two = "boomboom"
// แปลงค่าเป็นstringgเป็นnumber
// let age = parseInt("20.15");

// console.log(age);
// console.log(typeof(age));
// การใช้ array
let num = Array(1, 2, 3, 4, 5)
// console.log(num);
// การไล่ลำดับ
// console.log("ตัวแรก =",num[0]);
let colors = ["แดง", "เขียว", "เหลือง"];
colors[1] = "เหลือง";
colors[2] = "เขียว";
// console.log(colors);

// operater คือการบวกผสมกัน
// +
// -
// *
// /
// %
// ตัวการเปรียบเทียบ
// ==
// !=
// >
// <
// >=
// <=
// && และ
// || หรือ
// ! ไม่
// ++a เพิ่มค่า a ก่อนแล้วนำไปใช้
// a++ นำ a ไปใช้ก่อนแล้วค่อยบวก
// --b ลดค่า b ก่อนแล้วนำไปใช
// b-- นำ b ไปใช้ก่อนแล้วค่อยลด

// compund assignment
// +=
// -=
// *=
// /=
// %=
// let x=10,y=20;
// console.log("ก่อน =",x);
// x+=y ;
// x-=y;
// x*=y;
// x/=y;
// x%=y;
// console.log("หลัง =",x);

// เงื่อนไข condition
// if เป็นเงื่อนไขการตัดสินใจของโปรแกรม
// switch..case
// if (เงื่อนไข) {

// } else {

// }
// age= 15;
// let result= (age >= 15 && age<=25);
// if (result) {
//     console.log('นายหรือนางสาว');

// }
let balace = 9000;
let withdraw = 5000;
let bank = (withdraw <= balace);
if (bank) {
    console.log('ถอนเงิน =', withdraw);
    balace -= withdraw
    console.log('คงเหลือ =', balace);
} else {
    console.log('ยอดไม่พอ =', balace);
}
// ternary oparator ifแบบรัดรูป
let nomoney = balace < 100 ? "ไม่มีเงิน" : "มีเงิน";
console.log(nomoney);
// ifซ้อนif
age = 20
if (age <= 15) {
    if (age == 15) {
        console.log('ม3');
    } else if (age == 14) {
        console.log('ม2');
    }
    else if (age <= 13) {
        console.log('ม1');
    } else {
        console.log('xit5,');
    }

} else {
    console.log('โตแล้ว');
}


// switch..case ต้องใส่ break ไม่งั้นจะทำเรื่อย
let month = 4;
let name_three;

switch (month) {
    case 1: name_three = "มกราคม";

        break;
    case 2: name_three = "กุมภา";

        break;
    case 3: name_three = "มีนา";

        break;
    case 4: name_three = "เมษา";

        break;
    default: name_three = "ไม่พบ";

}
console.log(name_three);

// loop ทำซ้ำจะทำงานไปเรื่อยจนเป็นเท็จถึงจะหยุด
// while
// for
// do..while
let count = 1;
// while(count<=5){
//     console.log("ชิ้นที่",count);
//     if (count==4) {
//         break;
//     }
//     count++;
// }
for (count = 1; count <= 5; count++) {
    console.log("boom");
}
// do..while
while (true) {
    if (count == 200) break;
    count++;
    // cog(count);onsole.l
}

// function การใช้งาน

function massage(){
    alert("แจ้งเตือนโอน")
}

// function การรับค่า
function fullname(fname,lname,city){
    console.log("ชื่อจริง =",fname,"นามสกุล =",lname,"ที่อยู่ =",city)
}

// function ส่งค่า

function getComputeIP(){
    return "127.0.0.1"
}
function getnumber(){
    return 100*100
}
function getaddress(){
    let city="ระยอง";
    return city
}
let myIp=getComputeIP();
// let total = getnumber();
// console.log(myIp);
// console.log(total);
// console.log(getaddress());
//รับและส่ง
function setSalary(salary){
    let bonus= 1000;
    return salary+bonus;
}
let total = setSalary(15000);
// console.log(total);

// ขอบเขตตัวแปร
// local variable ตัวแปรที่ทำงานในฟังชั่น
// global variable ตัวแปรที่ทำงานอยู่นอกฟังชั่น

let a = 100;
function display(){
    let a = 50;
    console.log('ตัวแปร =', a);
    console.log('ค่าอื่นๆ =', a);
}
console.log('global =', a);
console.log('logal =', a);
display()

// Array propertie function &sort
let colors_two =["แดง" ,'เขียว', "ขาว", "ฟ้า", "ม่วง"]
// console.log(colors_two.sort());

// Array forloop & push
let colors_three =["แดง" ,'เขียว', "ขาว", "ฟ้า", "ม่วง"];
colors_three.push("ดำ");
for (let i = 0; i < colors_three.length; i++) {
    // const element = array[index];
    // console.log((i+1),colors_three[i]);
    
}

// Array foreach

let colors_four =["แดง" ,'เขียว', "ขาว", "ฟ้า", "ม่วง"];
colors_four.forEach(myData);
function myData(item)
{
console.log("สี",item)
}

// แปลง Array เป็น String
// toString() แปลงString
// join นำค่าใน Arrayมาเป็นข้อความตัวคั่น
// pop()เอาลบตัวท้ายสุด
// การรวม array
let z =["แดง" ,'เขียว', ];
let m =["แรด" ,'ช้าง', ];

 z=z.concat(m)
 console.log("รวม",z)

//  เรียงลำดับ array
let point=[20,10,5,9,8,100]

point.sort(function(a,b)
{
    return a-b
});
console.log(point);
// 1.if else คำสั่งที่จะกำหนดเงื่อนไข true false เป็นตัวกำหนด
// ถ้าเป็น true จะเข้าเงื่อนไข เป็น false จะเข้า else แต่ถ้าไม่มีจะไม่ทำ
// 2.switch case คำสังที่ทำงานได้หลายแบบ คล้าย if แต่ จะจำกัดกว่า
// จะทำการเปรียบเทียบกันมากกว่าการใช้ Boolean
// 3.loop การทำซ้ำกะนหลายๆรอบจนกว่าเงื่อนไขนั้นจะทำการหยุด
// 4.Function คือเป็นชุดคำสั่งที่นำมาใช่ส่งหรือรับข้อมูลสามารถใช่ได้หลายตัวพร้อมๆกันได้


// object
let product ={
    name: "guy",
    price: 1000,
    color : "black",
    category:"computer",
    size:"L",
    displayproduct:function () {
        return "ชือสินค้า = " + product.name + " ราคา = " + product.price + " หมวดหมู่ = " + product.category
    },
    discount:function(){
        return this.price - 1000;
    }
}

document.write(product.displayproduct());



// document.getElementById ชื่อไอดี
// document.getElementsByTagName ชื่อแท็ก
// document.getElementsByName ชื่อคลาส

