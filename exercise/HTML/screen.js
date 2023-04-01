class Screen {
    constructor (id, img, logo, hashtag, name, price,){
        this.id = id;
        this.img = img;
        this.logo = logo;
        this.hashtag = hashtag;
        this.name = name;
        this.price = price;

    }
}
let screens = [
    new Screen (1, "https://philong.com.vn/media/product/250-28187-32un650-w-1.png","https://philong.com.vn/media/brand/lg.png", "Hàng mới", "Màn Hình LG 4K 32inch 32UN650-W Tấm Nền IPS, UHD, 60Hz, HDMI, DisplayPort", 8690000, 
                ["Tai nghe ZIDLI ZH6 Trị giá 280.000đ","Lót chuột cao cấp P02 trị giá 50.000đ"]),
    new Screen (2, "https://philong.com.vn/media/product/250-29254-22t370-1.jpg","https://philong.com.vn/media/brand/samsung.jpg", "Bán chạy", "Màn hình 21.5 inch SAMSUNG LF22T370, Tấm nền IPS, độ phân giải Full HD, tần số quét 75Hz, Hàng chính hãng, bảo hành 24 Tháng", 2890000),
    new Screen (3, "https://philong.com.vn/media/product/250-20714-m--n-h--nh-lcd-samsung-27-inch-lc27r500fhexxv-2.jpg", "https://philong.com.vn/media/brand/samsung.jpg", "Bán chạy", "Màn hình cong 27 SAMSUNG LC27R500FHE (Tấm Nền VA, Full HD, DSUB, HDMI, 4MS, 60HZ, Hàng chính hãng, Bảo hành 2 năm", 4490000),
    new Screen (4, "https://philong.com.vn/media/product/250-27120-3.jpg", "https://philong.com.vn/media/brand/samsung.jpg", "Hàng mới", "Màn hình 23.8inch Samsung LS24R350FZEXXV (FHD, IPS, 75Hz, 5ms, 250nits, HDMI+VGA, bảo vệ mắt) Hàng chính hãng", 3140000),
    new Screen (5, "https://philong.com.vn/media/product/250-28089-vz249ehe-8.jpg","https://philong.com.vn/media/brand/asus.png","Bán chạy","Màn hình siêu mỏng 24 inch ASUS VZ24EHE, Tấm nền IPS, Full HD, 75Hz, 1MS, Tính năng bảo vệ mắt,Hàng chính hãng bảo hành 36 tháng", 3090000),
    new Screen (6, "https://philong.com.vn/media/product/250-29610-man-hinh-lenovo-q27q-20-66efgac3-philong3.png", "https://philong.com.vn/media/brand/lenovo.jpg", "Bán chạy", "Màn Hình Lenovo 2K 27 inch Q27q-20 66EFGAC3VN (QHD, IPS, 75Hz, 300nits, 4ms-6ms, DP, HDMI", 5990000),
    new Screen (7, "https://philong.com.vn/media/product/250-21101-27r350-5.jpg", "https://philong.com.vn/media/brand/samsung.jpg", "Bán chạy", "Màn hình 27 SAMSUNG LS27R350FHE, tấm nền IPS, Full HD, 75Hz, Bảo vệ mắt, Hàng chính hãng, bảo hành 24 tháng", 4090000),
    new Screen (8, "https://philong.com.vn/media/product/250-14672-c27f397fhe.jpg", "https://philong.com.vn/media/brand/samsung.jpg", "Hàng mới", "Màn hình cong 27 SAMSUNG C27F397FHE, màu trắng, tấm nền VA, độ phân giải full HD, 60Hz, Hàng chính hãng, Bảo hành 2 năm", 4490000, )
]
function computerScreen(){
for ( let i = 0 ; i < screens.length ; i++) {
    document.querySelector('.computer').innerHTML +=
    `
        <div class="product">
            <div class="invi">
                <p class="edit" onclick="editinfo()">Edit</p>
                <p class="delete" onclick="deleteinfo()">Delete</p>
            </div>
            <div class="img">
                <img class="img_1"src="${screens[i].img}" alt="">
            </div>
            <img class="logo" src="${screens[i].logo}">
            <p class="hashtag">${screens[i].hashtag}</p>
            <h3 class="name">${screens[i].name.toLocaleUpperCase().substring(0, 50)}...</h3>
            <p class="price">${formatCurrency(screens[i].price)}</p>
        </div>     
    `
}
}
// //let computer = document.getElementsByClassName('computer');
computerScreen();
function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
function addinfo(){
    document.getElementsByClassName('table_add')[0].style.display = "block";
}
function editinfo(){
    document.getElementsByClassName('table_edit')[0].style.display = "block";
}
function cancelinfo_1(){
    document.getElementsByClassName('table_add')[0].style.display = "none";
}
function cancelinfo_2(){
    document.getElementsByClassName('table_edit')[0].style.display = "none";
}
function addInfomation(){
    let img = document.getElementsByClassName('img-add')[0].innerHTML;
    let logo = document.getElementsByClassName('logo-add')[0].innerHTML;
    let hashtag = document.getElementsByClassName('hashtag-add')[0].innerHTML;
    let name = document.getElementsByClassName('name-add')[0].innerHTML;
    let price = +document.getElementsByClassName('price-add')[0].innerHTML;
    let p = new Screen(id, img, logo, hashtag, name, price);
    screens.push(p);
    computerScreen();
}

