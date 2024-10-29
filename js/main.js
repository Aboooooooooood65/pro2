let App = {
  data: function () {
    return {
      products: products,
      path: "product",
      cart: [], // { pro: pro, count: 1 }
      
    };
  },

  methods: {
    addToCart: function (pro) {
      let check = this.cart.some(function (ele) {
        return ele.pro.id == pro.id;
      });

      if (check == false) {
        this.cart.push({ pro, count: 1 });
      } else {
        let addedPro = this.cart.find(function (ele) {
          return ele.pro.id == pro.id;
        });
        addedPro.count++;
      }

      pro.count--;
    },

    removeFromCart: function (pro) {
      let deletee = this.cart.findIndex(function (ele) {
        return ele.pro.id == pro.id;
      });
      if (deletee !== -1) {
        let item = this.cart[deletee];
        pro.count += item.count;
        this.cart.splice(deletee , 1);
      }
    },
  },


};


Vue.createApp(App).mount("#App");
  











