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
let massage = "boom";
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
    console.log(count);
}