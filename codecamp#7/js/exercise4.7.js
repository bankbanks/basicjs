// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop 
// และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา

let fruit=prompt('Enter fruit:')
let obj={};
while (fruit!=='stop') {
    let amount = prompt('enter value:')

    if(amount>1){
        fruit+='s';
    }
    obj[fruit]=Number(amount);// เป็นการ pair

        fruit=prompt('Enter key:')
}
console.log(receiveInfo)