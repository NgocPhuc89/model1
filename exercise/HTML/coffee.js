let menu = [
    {
        name: "BlackCoffee ",
        image: "https://cdn-www.vinid.net/2020/07/f0c049fa-h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-c%C3%A1ch-pha-cafe-phin-ngon.jpg",
        price: 12000
    },
    {
        name: "Bạc Xỉu",
        image: "https://images.foody.vn/res/g112/1115849/prof/s1242x600/file_restaurant_photo_mczd_16392-4cefe95a-211212113530.jpeg",
        price: 19000 
    },
    {
        name: "Espresso",
        image: "https://deal.utop.vn/uploads/deal_galleries/2_303664772_20210406.jpg",
        price: 21000
    },
    {
        name: "Cappuchino",
        image: "https://caphenguyenchat.vn/wp-content/uploads/2017/11/tim-hieu-ve-ca-phe-y-ca-phe-cappuccino-do-uong-thinh-hanh-3.png",
        price: 59000
    },
    {
        name: "Trà Đào",
        image: "https://nguyenlieuphache.com/wp-content/uploads/2015/10/2-13.jpg",
        price: 29000
    },
    {
        name: "Nước Ép Cam",
        image: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/2/19/cach-lam-nuoc-cam-ep-ngon-va-thom-ket-hop-voi-le-va-gung-5-1645248090817401855254.jpg",
        price: 29000
    },
    {
        name: "Nước Ép Dưa Hấu",
        image: "https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/nuoc-ep-luu-dua-hau-thumbnail.jpg",
        price: 29000 
    },
    {
        name: "MiklTea",
        image: "https://mccoffeetanphu.com/uploads/source/mccoffee/b45-3-min.jpg",
        price: 39000
    }
]
// for ( let i = 0 ; i < menu.length ; i++){
//     document.getElementById('coffee').innerHTML +=
//     `
//     <tr>
//         <td><img src="${menu[i].image}"></td>
//     </tr>
//     <tr>
//         <td>${menu[i].name}</td>
//     </tr>
//     <tr>
//         <td>${menu[i].price}<td>
//     </tr>
//     ` 
// }

for (let i = 0; i < menu.length; i++) {
    document.getElementById('coffee').innerHTML +=
        `
        <div>
            <img src = "${menu[i].image}" alt="đang load"}
            <p></p>
            <h2>${menu[i].name}</h2>
            <p>${formatCurrency(menu[i].price)}</p>
            <button>Mua</button>
        </div>
        
        `
    }
    function formatCurrency(number){
        return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
    }
        // <img src="${menu[i].image}" alt="">
        // <h2>${menu[i].name}</h2>
        // <p>${menu[i].price}</p>