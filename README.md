# Alışveriş Sepeti Uygulaması

### 💡 Kazanımlar

- useState, useEffect, useDispatch, useSelector kullanımı

- Redux ile uygulama durumunu (state) merkezi bir depoda (store) tutmak, bileşenler
  arasında veri paylaşımı yapmak.

### 🛠️ Fonksiyonlar

- Seçilen ürünlerin sepete eklenmesi

- Ürün adetinin güncellenmesi

- Toplam tutarın güncellenmesi

**[Buradan](https://cenkmerk.github.io/Note-Alma-Uygulamasi/) projenin çalışır halini inceleyebilirsiniz.**

### Proje Adımları

Projenizin için bir klasör oluşturun ve bu klasör içinde React projenizi oluşturun.

`npx create-react-app .`

Sondaki nokta bulunduğunuz klasör içinde projenizi kurmak için gereklidir. Bu komutu kullandığınız klasör boş olmalıdır.

Projeniz kurulduktan sonra `src` klasörü içindeki şu dosyalar hariç diğer dosyaları silin: `App.css`, `App.js`,`index.css`, `index.js`.

`public` klasörü içindeki `index.html` hariç diğer dosyaları silin.

Şimdi de bu dosyaların içlerini temizleyelim.

`App.css` içini tamamen silin.

`App.js`

```javascript
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
```

`index.css`

```css
body {
  margin: 0;
}
```

`index.js`

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

`index.html`

```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Alışveriş Sepeti Uygulaması</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Uygulamamızı en basit haliyle çalışır hale getirdik. Şimdi terminalden uygulamamızı başlatalım.

`npm start`

Şimdi `src` klasörünün altına `components` adlı klasör açalım.

İlk olarak `header` kısmını yapacağız. `components` klasörünün altına gelip `Header.js` dosyamızı
oluşturalım. Bu dosyayı daha sonra `App.js` de import edelim.

`App.js`

```javascript
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
```

İkonları kullanabilmek için terminale:

`npm install react-icons`

React Redux yapısı için terminale:

`npm install @reduxjs/toolkit react-redux`

Bootstrap kullanımı için:

`npm install bootstrap`

İlk olarak `src` klasörünün altına gelip `img` klasörü oluşturup tüm resimlerimizi buraya atalım.

`src` klasörünün altına gelip `ProductItems.jsx` dosyasını oluşturalım. Burada
her bir ürünümüz için `title`, `id`, `price`, `img1`, `img2`, `quantity` değerlerinden oluşan bir dizi yapalım.

`ProductItems.jsx`

```javascript
const ProductItems = [
  {
    id: "1",
    title: "Kolsuz Midi Elbise",
    price: "299",
    img1: P1,
    img2: P2,
    quantity: 1,
  },
  {
    id: "2",
    title: "Askılı Midi Elbise",
    price: "299",
    img1: P3,
    img2: P4,
    quantity: 1,
  },
  .
  .
  .
```

`src` nin altına gelip `components` klasörünü oluşturalım. Buraya ilk olarak ürünlerimizi
listeleyeceğimiz `ProductList.jsx` dosyasını oluşturalım. `ProductList.jsx` dosyamızı `App.js`
import ettikten `ProductList.jsx` i düzenlemeye başlayalım.

Her bir ürünümüzü bilgilerini başka bir component yapıp oraya gönderelim. `components` in
altına gelip `ProductItem.jsx` dosyamızı da oluşturalım.

`ProductList.jsx`

```javascript
//bu kısımda her bir ürünümüzün bilgilerini göstermek için
//ProductItem componentine gönderdik
<div className="d-flex flex-wrap gap-2 justify-content-center pt-5">
  {ProductItems.map((item) => {
    return <ProductItem key={item.id} {...item} />;
  })}
</div>
```

`ProductItem.jsx`

```javascript
<div
  className="d-flex flex-column align-items-center gap-2"
  style={{ width: "200px" }}
  onMouseEnter={() => setfirst(item.img2)}
  onMouseLeave={() => setfirst(item.img1)}
>
  <img src={first} alt="" width="100%" />
  <h5 style={{ fontWeight: "400" }}>{item.title}</h5>
  <h6 style={{ fontWeight: "700" }}>{item.price} TL</h6>
  <button className="AddCartButton">Sepete Ekle</button>
</div>
```

Ürünlerimizi listeledikten sonra şimdide sepet kısmını yapabiliriz.
Bunun için `src` nin altında `Cart.jsx` componentini oluşturalım.
Aynı şekilde bunu da `App.js` e import edelim.

`Cart.js` componenti için bootstrap deki offcanvas yapısını kullanacağım.
[Buradan](https://getbootstrap.com/docs/5.0/components/offcanvas/) inceleyebilirsiniz.

Şimdi react redux yapısını oluşturmaya geldi. `src` nin altına gidip `store.js` i oluşturalım.

`store.js`

```javascript
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

`index.js` e gidip `App.js` i sarmalayalım.

`index.js`

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

`src` nin aştına gidip `control` adlı klasörümüzü oluşturalım. Onun da altına
`CartSlice.js` dosyamızı oluşturalım. Burada tüm veri ve durum yöneetimini yapacağız.

Bu kısmın son halini bırakacağım.

`CartSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit";

//başlangıc durumları
const initialState = {
  selectItems: [], //sepetteki ürünlerimi tutan dizi
  quantity: 0, //sepetteki toplam ürün sayısı
  total: 0, //sepetteki ürünlerin toplam fiyatı
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //sepeti boşaltır
    clearCart: (state) => {
      state.selectItems = [];
    },
    //sepete ürün ekler
    addItem: (state, action) => {
      //burada eklenen ürün sepette var mı diye kontrol ediyorum
      //varsa o ürünün ürün adetini artırıyorum
      //yoksa ürünü sepete ekliyorum
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.selectItems = [
          ...state.selectItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            quantity: action.payload.quantity,
            img: action.payload.img1,
          },
        ];
      }
    },
    //ürünü sepetten kaldırır
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.selectItems = state.selectItems.filter(
        (item) => item.id !== itemId
      );
    },
    //sepetteki ürünün adet miktarını artırır
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.selectItems.find((item) => item.id === itemId);
      cartItem.quantity += 1;
    },
    //sepetteki ürünün adet miktarını azaltır
    descrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.selectItems.find((item) => item.id === itemId);
      cartItem.quantity -= 1;
    },
    //sepetteki toplam ürün sayısını ve toplam fiyatı bulur
    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.selectItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const {
  addItem,
  removeItem,
  increase,
  descrease,
  calculateTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
```

Şimdi `Cart.jsx` gidelim ve sepetteki ürünleri listeşeyelim. Aynı zamanda
sepetteki ürün sayısını ve toplam tutarı bulalım.

`Cart.jsx`

```javascript
import React from "react";
import "../style/Cart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../control/CartSlice";
function Cart() {
  //ürünlerimizin olduğu diziyi, ürün miktarını ve toplam tutarı
  //tutan stateleri alalım
  const { selectItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //ödeme tutarını ekrana basar ve sepeti temizler
  const HandleClick = () => {
    dispatch(clearCart());
    alert(`Ödenen Tutar: ${total} TL`);
  };

  return (
    <div>
      <button
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <AiOutlineShoppingCart size={30} />
        <span>{quantity}</span>
      </button>

      <div
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div>
          <h5 id="offcanvasRightLabel">Sepetim</h5>
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <AiOutlineClose size={22} />
          </button>
        </div>
        <div>
          <div>
            {/* sepetteki ürünlerin bilgilerini CartItems a gönderir*/}
            {selectItems.map((item) => {
              return <CartItems {...item} key={item.id} />;
            })}
          </div>
          <div>
            <div>
              <h4>Sepet Tutarı</h4>
              <h4>total} TL</h4>
            </div>
            <button onClick={HandleClick}>Ödeme Yap</button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

Sepetteki ürünlerin bilgilerini yazacağımız `CartItems.jsx` dosyasını düzenleyelim.

`CartItems.jsx`

```javascript
import React from "react";
import "../style/CartItem.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increase, descrease, removeItem } from "../control/CartSlice";

function CartItems({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h6>{title}</h6>
        <h6>{price}</h6>
      </div>
      <div>
      {/* sepetteki ürünün adetini artırır*/}
        <button
          onClick={() => {
            dispatch(increase(id));
          }}
        >
          <AiOutlinePlus size={22} />
        </button>
        <p>{quantity}</p>
        {/* sepetteki ürünün adeti 1 den büyükse azaltma butonunu 1 ise silme butonunu gösterir*/}
        {quantity > 1 ? (
            {/* sepetteki ürünün adetini azaltır*/}
          <button
            onClick={() => {
              dispatch(descrease(id));
            }}
          >
            <AiOutlineMinus size={22} />
          </button>
        ) : (
            {/* sepetteki ürünü siler*/}
          <button
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Sil
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItems;
```

`App.jsx` e gidelim ve useeffect ile sepet güncellendiğinde değerleri yeniden hesaplatalım.

`App.jsx`

```javascript
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./control/CartSlice";

function App() {
  const cartItem = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItem]);

  return (
    <div className="d-flex justify-content-center p-2">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
```
