// let Iphone14 = {
//     name : "iphone14",
//     color : "yellow",
//     capacities : ["128gb","256gb","512gb"],
//     price : "100$",
//     producer : "VN"
// }
// ip 14
// tên
// màu sắc
// dung lượng
// giá
// nhà sản xuất

// let dell = {
//     name : "Dell inspiron 3525",
//     image : "https://philong.com.vn/media/product/250-29493-laptop-dell-insprion-3525-n5r758-phi-long-1.jpg",
//     cpu : "AMD ryzen 7-5825u",
//     ram : "8gb ddr4 3200 mhz",
//     hashtags : "Khuyến mãi",
//     discount :  0.16 ,
//     price : 18990000,
//     pricesale : 18990000 - (18990000 * 0.16),

// }
// console.log(dell);

let c0223G2 = [
    {
        name : "Phúc",
        dateofbirth : "10/1/2000" ,
        gender : true,
        email : "phuc@gmail.com",
        phone : "0935567890"
    },
    {
        name : "Khoa",
        dateofbirth : "12/2/2000" ,
        gender : true,
        email : "khoa@gmail.com",
        phone : "0936123456" 
    },
    {
        name : "Duy",
        dateofbirth : "20/3/2000" ,
        gender : true,
        email : "duy@gmail.com",
        phone : "0989123456" 
    }
]
for (let i = 0 ; i < c0223G2.length; i++){
    document.getElementById('tbstudent').innerHTML += 
    `
    <tr>
        <td>${c0223G2[i].name}</td>
        <td>${c0223G2[i].dateofbirth}</td>
        <td>${c0223G2[i].gender == true ? "Nam" : "Nữ"}</td>
        <td>${c0223G2[i].email}</td>
        <td>${c0223G2[i].phone}</td>
    </tr>
    `
}