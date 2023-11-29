// block scope ใช่ let เพื่อประกาศตัวแปร
// const ประกาศค่าตัวแปรคงที่

// arrow function คือการลดโค้ดให้กระชับมากขึ้น
fullname=(fname,laname)=>fname+laname
setage=(age)=>"อายุ ="+age

console.log(fullname("boom","jark"));
console.log(setage(20));

// Object
const customer={
    cusname : "booom",
    age : 20,
    addres:"bankok",
}
console.log(customer);

// String 
// multiline String สามารถใช้กับข้อความยาวๆได้ขึ้นบรรทัดใหม่โดยไม่เกิดข้อผิดพลาด
// interpolaiton สามารถแทรกตัวแปร

let customename ="เด็กชาย"

const addres=`ชื่อลูกค้า : ${customename}
ที่อยู่ 555/100 ถนนสุสาน อำเภอ`

console.log(addres);

// spread operator

// const newArr= [100,200,300]
// const data = [10,20,newArr] 
// console.log(data.length);

// rest parameter ใช้ในการส่งค่า เข้าไปทำงานในโดยไม่จำกัดจำนวน
// summation=(x,y)=>{
//     return x+y
// }
// summation=(x,y,z)=>{
//     return x+y+z
// }
summation=(...numberArr)=>{
    let total=0
    for(let number of numberArr) total+=number
    return total
}

console.log(summation(500,1000));

// destructuring การสลายโครงสร้าง
// คือกำกำหนดค่าที่อยู่ภายใน อาเรย์

// default parameter

getdatacustomer=(cusname,cusadd="non")=>{
    const add =`ชื่อ : ${cusname}
    ที่อยู่ : ${cusadd}
    `
    return add
}
console.log(getdatacustomer("boom"));


// ทำงานกัน Array
// const data=[100,200,300]

// console.log(data)

// เพิ่มลบ Array push pop shift unshift spile slice

// const data=[100,200,300]
// data.push(500) เพิ่มหลัง
// data.pop() ลบด้านหลัง
// data.shift() ลบด้านหน้า
// data.unshift(999)  เพิ่มหน้า
// data.splice(1,2) ลบตัวที่เลือก
// const lastdata=data.slice(1)
// console.log(data)

// loop Array forloop foreach forof
// const data=[10,20,30,40,50]
// for (let i = 0; i < data.length; i++) {
//     if(data[i]>=30) break
//     console.log(`No. ${i}=${data[i]}`);
// }
// data.forEach(e=>{
//     if (e>=30) {
//         console.log('error');
//     }
//     console.log(`cus = ${e}`);
// })
// for(const e of data){
//     if(e >= 30 ){
//         break
//     }
//     console.log(`empolyees = ${e}`);
// }

// ค้นหาข้อมูลใน Array
// indexof = ผลการค้นหาตำแหน่ง i ทีค้นเจอถ้าไม่เจอลย -1
// find =  ผลการค้นหาตำแหน่งข้อมูล ไม่เจอ undefined
// findindex = ผลการค้นหาจะได้ตำแหน่ง i ถ้าไม่เจอจะ -1
const data=[10,20,30,40,50]

const index= num.indexof(20)
console.log(index);