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
