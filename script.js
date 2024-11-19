const menu= [
  {
    id: 1,
    title: "Akupunktur Tubuh",
    category: "Akupunktur",
    price: 100000,
    image: "./images/akupunktur.jpg",
    desc: "Ini adalah jenis akupunktur yang paling umum. Melibatkan jarum baja yang sangat halus yang dimasukkan ke berbagai titik akupunktur pada tubuh. Setiap titik akupunktur memiliki efek terapi yang berbeda. Jenis akupunktur ini digunakan sebagai pengobatan berbagai penyakit"
  },  
  {
   id: 2,
    title: "Auriculo",
    category: "Akupunktur",
    price: 50000,
    image: "./images/akp_2.png",
    desc: "Pengobatan tradisional Tiongkok percaya bahwa ada titik akupunktur yang mewakili semua area tubuh yakni di telinga. Ini dapat distimulasi dengan menggunakan jarum baja kecil yang sangat halus atau seed (biji-bijian). Metode ini sangat berguna untuk mengobati kecanduan seperti merokok atau alkohol."
  },
  {
    id: 3,
    title: "Elektrostimulator",
    category: "Akupunktur",
    price: 100000,
    image: "./images/akp_3.jpg",
    desc: "Elektrostimulator atau Akupunktur elektro digunakan bersama dengan akupunktur tubuh. Di sinilah mesin akupunktur elektro terhubung ke bagian atas jarum akupunktur tubuh. Jarum kemudian distimulasi dengan arus listrik. Pasien merasakan sensasi ringan, kesemutan. Ini berguna untuk banyak kondisi tetapi tidak cocok untuk semua pasien"
  },
  {
    id: 4,
    title: "Acupressure",
    category: "Akupunktur",
    price: 70000,
    image: "./images/akp_4.jpg",
    desc:"Di sinilah titik akupunktur ditekan atau dipijat oleh ahli akupunktur. Dalam perawatan kondisi tertentu, terapis akan memberikan pijatan atau tekanan di titik-titik yang spesifik. Ini sangat berguna untuk mengobati sakit kepala dan mual di pagi hari"
  },
  {
    id: 5,
    title: "Moxibusi",
    category: "Akupunktur",
    price: 10000,
    image: "./images/akp_5.jpg",
    desc: "Bagian atas jarum akupunktur dibubuhkan ramuan khusus. Ramuan ini memberikan efek hangat pada jarum dan area tubuh. Manfaatnya untuk mengobati rasa dingin."
  },
  {
    id: 6,
    title: "cupping/bekam api",
    category: "Akupunktur",
    price: 100000,
    image: "./images/akp_6.jpg",
    desc: "Gelas atau gelas bambu digunakan bersamaan dengan akupunktur. Terapis menyalakan api dan menempatkannya di cangkir sebentar. Tujuannya adalah oksigen dalam cawan tersebut dan menciptakan efek vakum. Cangkir kemudian dengan cepat ditempatkan di area yang diinginkan."
  },
  {
    id: 7,
    title: "Fish Bone Moringa Kripss",
    category: "Herbal",
    price: 18000,
    image: "./images/nut_1.jpg",
    desc: "- Merupakan camilan organik berbentuk keripik 'chips' yang renyah, enak dan bergizi tinggi (1 Pouch berisikan 43 g chips, Ada 3 varian rasa; BBQ, Seaweed dan Spicy)",
  },
  {
    id: 8,
    title: "Sambal Udang Alamak Ciamik",
    category: "Makanan Sehat",
    price: "30000",
    image: "./images/nut_2.jpg",
    desc: "Sambal cocol dengan udang crispy yang alamak ciamik, tanpa bahan pengawet",
  },
  {
    id: 9,
    title: "sambal I-wak Kepala Ikan",
    category: "Makanan Sehat",
    price: "25000",
    image: "./images/nut_3.jpg",
    desc: "Sambal dengan campuran ikan tuna dan kepala ikan dan rempah rempah dengan rasa khas nusantara dan nilai gizi yang lebih (Tanpa pengawet, Dengan ikan tuna, Rempah- rempah)",
  },
  {
    id: 10,
    title: "Pijat Jawa 90 menit full body",
    category: "Massage",
    price: "300000",
    image: "./images/pijat.jpg",
    desc: "pjat tradisional ala tradisi jawa dengan menggunakan oil dari minyak kelapa dan hot oil (seluruh tubuh dengan durasi 90 menit)"
  },
  {
    id: 11,
    title: "Totok Wajah",
    category: "Massage",
    price: "50000",
    image: "./images/totokwajah.jpg",
    desc: "Totok wajah adalah metode pijat akupresur yang berasal dari Tiongkok. Fungsinya untuk melancarkan energi positif yang mengalir di sekitar wajah. Untuk itu, teknik memijat wajah ini dilakukan di sepanjang jalur meridian alias jalur sirkulasi energi (chi atau qi). Jalur meridian menghubungkan otak dengan berbagai organ",
  }
  ];
const section2 = document.querySelector(".section2");
console.log (section2);

const btnContainer= document.querySelector(".button");
console.log (btnContainer);

function displayMenuItems (menuItems){
let displayMenu = menuItems.map(function(item){
  return ` <div class="menu1">
      <img src= ${item.image} class="gambarmenu1">
      <div class="menuinfo1">
        <header>
          <h2 class="namaproduk1"> ${item.title} </h2>
          <h2 class="hargaproduk1"> ${item.price} </h2>
        </header>
        <p>${item.desc} </p>
        <button class="btnproduk" id="chartbutton" Onclick="addToCart('${item.title}',${item.price},'${item.image}')"> Masukkan Keranjang </button>
      </div>
    </div>`;
});
  displayMenu = displayMenu.join("");
 section2.innerHTML=displayMenu;
}
     function displayMenuButtons(){
    const categories=menu.reduce(function(values, item){
        if(!values.includes(item.category)){
          values.push(item.category);
        }
        return values;
      },["All"]
    ); 
    const categoryBtns = categories.map(function (category) {
      return `<button type ="button" class= "filter-btn" data-id="${category}">${category}</button>`;
    }).join("");
    
    //btnContainer.innerHTML=categoryBtns;
    
 const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    
    filterBtns.forEach(function(btn) {
      btn.addEventListener("click",function(e) {
        //console.log("target", e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem){
          if (menuItem.category===category);
          return menuItem;
        }
      );
      if (category ==="All"){
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
  }
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayMenuButtons();
});
const image = document.getElementById("gbrkeranjang");
const maksimal = 5
let berhitung = 0

const imageSources = [
  "keranjang.png",
  "keranjang1.png",
  "keranjang2.png",
  "keranjang3.png",
  "keranjang4.png",
  "keranjang5.png",
];
function changeimage(){
  image.src= imageSources[5]
}
const btnproduk = document.getElementById("chartbutton");
console.log (btnproduk)
//btnproduk.addEventListener('click', changeimage);
console.log("selesai") 
//Menginisiasi Chart (Keranjang) dari localStorage atau membuat array list kosong, jika tidak ada Chart
let cart= JSON.parse(localStorage.getItem('cart')) || [];
// Menginisiasi perhitungan cart yang benar (agar cart dipastikan dimulai dari 0)
let cartCount = cart.length>0?cart.reduce((total, item) => total + item.quantity,0) : 0;
function updateCartCount(){
  document.getElementById("numberChart").textContent= cartCount
}
window.onload= updateCartCount;
//meanambah function Chart untuk index.html
function addToCart (item, price, image){
//cek apakah item sudah ada
  let found=cart.find(cartItem=>cartItem.item===item);
  if (found){
    found.quantity += 1; //increase quantity if item exists
  } else {
    cart.push({item, price, quantity:1, image}); //Add new item to cart if not found
  }
  cartCount++; //Increment cart count when is added

  //Save the updated cart to localStorage
  localStorage.setItem('cart',JSON.stringify(cart));

  //Update the cart count on screen
  updateCartCount();

}
function loadCart(){
  console.log("kode ini sudah dipanggil")
  const cart = JSON.parse(localStorage.getItem('cart'))||[];
  const cartItemsDiv=document.getElementById('cart-items');
  cartItemsDiv.innerHTML=''; // clear any existing items

  let grandTotal=0;
  cart.forEach((item, index)=>{
    const totalPrice = (item.price*item.quantity).toFixed(2);
    grandTotal+=parseFloat(totalPrice);
    const row=document.createElement('tr');
    row.innerHTML=`
     <td>
          <div class="cekout1">
            <img src="${item.image}" class="gbrcekout1">
            <div class="akpnote"> 
              <h2> ${item.item} </h2>
              <p> ${item.price}</p>
              <button onclick="removeFromCart(${index})">Remove</button>
            </div>
          </div>
        </td>
        <td>
        <input type="number" value="${item.quantity}"min="1"onchange="updateQuantity(${index},this.value)">
        </td>
        <td>
          <p class="subtotal1" id=total-${index}>${totalPrice}</p>
        </td>`;
        cartItemsDiv.appendChild(row);
  });
  document.getElementById(`grandTotal`).textContent=grandTotal.toFixed(2);
}
function updateQuantity (index, newQuantity) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  //Update the quantity for the item
  cart [index].quantity=parseInt(newQuantity);
  localStorage.setItem('cart', JSON.stringify(cart));
  //Update the total price for this item
  const updatedTotalPrice = (cart[index].price*cart[index].quantity).toFixed(2);
  document.getElementById(`total-${index}`).textContent = updatedTotalPrice;
  //Update the cart count at the top
  cartCount = cart.reduce((total,item)=>total+item.quantity,0);
    //Update the grand total
  updateGrandTotal();
  updateCartCount();

}
//function to calculate and update the grand total
function updateGrandTotal(){
  const cart = JSON.parse(localStorage.getItem('cart'));
  let grandTotal = 0;

  cart.forEach(item=>{
    grandTotal += item.price*item.quantity;
  });
  document.getElementById('grandTotal').textContent=grandTotal.toFixed(2);
}
if (document.getElementById('cart-items')){
  window.onload=loadCart;
}
function removeFromCart(index){
  let cart = JSON.parse(localStorage.getItem('cart'));

  //remove the item from the cart
  cart.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cart));

  //reload the cart to reflect changes
  loadCart();

  //update the cart count after removing an item
  cartCount=cart.reduce((total,item)=>total+item.quantity,0);
  updateCartCount();
}
function closeForm() {
  let chatbotPanel= document.getElementById("kartu");
  console.log (chatbotPanel)
 chatbotPanel.style.display = chatbotPanel.style.display === "none" ? "block" : "none";
}

let chatState = {
  CategorySelection: true, 
  MenuSelection: false
}
//For User Input Pesan
function inputpesan(){
  let userInput= document.getElementById("idteks").value;
  let Jawaban=document.getElementById("divmechat");
  console.log(userInput);
  console.log(Jawaban);
  let PesanPengguna=document.createElement("p");
  PesanPengguna.textContent="You: "+userInput;
  PesanPengguna.classList.add("JawabanPengguna");
  Jawaban.appendChild(PesanPengguna);
  document.getElementById("idteks").value="";
  let response = generateBotResponse(userInput);
  DisplayBotResponse(response)
}
//Function for Generate Respon
function generateBotResponse(userInput){
  userInput = userInput.toLowerCase().trim();
  console.log(userInput);
  if(chatState.CategorySelection){
  chatState.CategorySelection=false;
    //Update state after menu interaction
    let response = "Selamat Datang, Silahkan pilih opsi:<br><br>\n1.Product Information \n2.WhatsApp Admin<br><br>Silahkan ketik angka!";
    console.log(response)
     return response;
  }

 //Handle Menu Option
  if(userInput==="1"){
    chatState.MenuSelection=true;
    //Update state to expect category selection 
    return "Silahkan pilih produk kategori: <br>\n1.Akupunktur <br>2.Herbal <br>3.Massage <br>4.Makanan Sehat";}
  else if(userInput==="2"){
    return "You can chat with our WhatsApp admin using the link below.";
  }





}

function DisplayBotResponse(response){
  let responsebot=document.getElementById("divmechat");
  let chattMessage=document.createElement("div");
  chattMessage.classList.add("chatt-message")
  //Buat Element Gambar Avatar
  let avatar=document.getElementById("avatarpict");
  avatar.alt="ChatBot"
  //Buat Element untuk Teks
  let messageText=document.createElement("p");
  messageText.classList.add("message-text")
  messageText.innerHTML="ChatBot:"+response;
  //Tambah Gambar dan Teks ke Container
  chattMessage.appendChild(avatar);
  chattMessage.appendChild(messageText);
  //Tambah Container ke area Chat
  responsebot.appendChild(chattMessage);
}


