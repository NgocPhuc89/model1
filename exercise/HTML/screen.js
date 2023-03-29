class Screen {
    constructor (img, logo, hashtag, name, price){
        this.img = img;
        this.logo = logo;
        this.hashtag = hashtag;
        this.name = name;
        this.price = price
    }
}
let screens = [
    new Screen ("https://philong.com.vn/media/product/250-28187-32un650-w-1.png","SAMSUNG", "Bán chạy", "màn hình SAMSUNG 4K 32inch", 8690000),
    new Screen ("https://philong.com.vn/media/product/250-29254-22t370-1.jpg","SAMSUNG", "Bán chạy", "màn hình 21.5 inch SAMSUNG", 2890000),
    new Screen ("https://philong.com.vn/media/product/250-20714-m--n-h--nh-lcd-samsung-27-inch-lc27r500fhexxv-2.jpg", "SAMSUNG", "Bán chạy", 
                "Màn hình cong 27inch SAMSUNG", 4490000),
    new Screen ("https://philong.com.vn/media/product/250-27120-3.jpg", "SAMSUNG", "Bán chạy", "Màn hình 23.8 inch SAMSUNG", 3140000)
]
function computerScreen(){
for ( let i = 0 ; i < screens.length ; i++) {
    document.querySelector('.computer').innerHTML +=
    `
        <div class="product">
            <div class="img">
                <img src="${screens[i].img}" alt="">
            </div>
            <p class="logo">${screens[i].logo}</p>
            <p class="hashtag">${screens[i].hashtag}</p>
            <p class="name">${screens[i].name}</p>
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