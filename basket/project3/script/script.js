function Header({ itemCount }) {
    return /*#__PURE__*/(
      React.createElement("header", { className: "container" }, /*#__PURE__*/
      React.createElement("h1", null, "Shopping Cart"), /*#__PURE__*/
  
      React.createElement("ul", { className: "breadcrumb" }, /*#__PURE__*/
      React.createElement("li", null, "Home"), /*#__PURE__*/
      React.createElement("li", null, "Shopping Cart")), /*#__PURE__*/
  
  
      React.createElement("span", { className: "count" }, itemCount, " items in the bag")));
  
  
  }
  
  function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
    return /*#__PURE__*/(
      React.createElement("section", { className: "container" }, /*#__PURE__*/
      React.createElement("ul", { className: "products" },
      products.map((product, index) => {
        return /*#__PURE__*/(
          React.createElement("li", { className: "row", key: index }, /*#__PURE__*/
          React.createElement("div", { className: "col left" }, /*#__PURE__*/
          React.createElement("div", { className: "thumbnail" }, /*#__PURE__*/
          React.createElement("a", { href: "#" }, /*#__PURE__*/
          React.createElement("img", { src: product.image, alt: product.name }))), /*#__PURE__*/
  
  
          React.createElement("div", { className: "detail" }, /*#__PURE__*/
          React.createElement("div", { className: "name" }, /*#__PURE__*/
          React.createElement("a", { href: "#" }, product.name)), /*#__PURE__*/
  
          React.createElement("div", { className: "description" }, product.description), /*#__PURE__*/
          React.createElement("div", { className: "price" }, formatCurrency(product.price)))), /*#__PURE__*/
  
  
  
          React.createElement("div", { className: "col right" }, /*#__PURE__*/
          React.createElement("div", { className: "quantity" }, /*#__PURE__*/
          React.createElement("input", {
            type: "text",
            className: "quantity",
            step: "1",
            value: product.quantity,
            onChange: event => onChangeProductQuantity(index, event) })), /*#__PURE__*/
  
  
  
          React.createElement("div", { className: "remove" }, /*#__PURE__*/
          React.createElement("svg", {
            onClick: () => onRemoveProduct(index),
            version: "1.1",
            className: "close",
            x: "0px",
            y: "0px",
            viewBox: "0 0 60 60",
            enableBackground: "new 0 0 60 60" }, /*#__PURE__*/
  
          React.createElement("polygon", { points: "38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" }))))));
  
  
  
  
  
      }))));
  
  
  
  }
  
  function Summary({
    subTotal,
    discount,
    tax,
    onEnterPromoCode,
    checkPromoCode })
  {
    const total = subTotal - discount + tax;
  
    return /*#__PURE__*/(
      React.createElement("section", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "promotion" }, /*#__PURE__*/
      React.createElement("label", { htmlFor: "promo-code" }, "Have A Promo Code?"), /*#__PURE__*/
      React.createElement("input", { type: "text", onChange: onEnterPromoCode }), /*#__PURE__*/
      React.createElement("button", { type: "button", onClick: checkPromoCode })), /*#__PURE__*/
  
  
      React.createElement("div", { className: "summary" }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, "Subtotal ", /*#__PURE__*/
      React.createElement("span", null, formatCurrency(subTotal))),
  
      discount > 0 && /*#__PURE__*/
      React.createElement("li", null, "Discount ", /*#__PURE__*/
      React.createElement("span", null, formatCurrency(discount))), /*#__PURE__*/
  
  
      React.createElement("li", null, "Tax ", /*#__PURE__*/
      React.createElement("span", null, formatCurrency(tax))), /*#__PURE__*/
  
      React.createElement("li", { className: "total" }, "Total ", /*#__PURE__*/
      React.createElement("span", null, formatCurrency(total))))), /*#__PURE__*/
  
  
  
  
      React.createElement("div", { className: "checkout" }, /*#__PURE__*/
      React.createElement("button", { type: "button" }, "Check Out"))));
  
  
  
  }
  
  const PRODUCTS = [
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 1",
    description: "Description for product item number 1",
    price: 5.99,
    quantity: 2 },
  
  {
    image: "https://via.placeholder.com/200x150",
    name: "PRODUCT ITEM NUMBER 2",
    description: "Description for product item number 1",
    price: 9.99,
    quantity: 1 }];
  
  
  const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%" },
  
  {
    code: "AUTUMN",
    discount: "40%" },
  
  {
    code: "WINTER",
    discount: "30%" }];
  
  
  const TAX = 5;
  
  function Page() {
    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
    const [products, setProducts] = React.useState(CLONE_PRODUCTS);
    const [promoCode, setPromoCode] = React.useState("");
    const [discountPercent, setDiscountPercent] = React.useState(0);
  
    const itemCount = products.reduce((quantity, product) => {
      return quantity + +product.quantity;
    }, 0);
    const subTotal = products.reduce((total, product) => {
      return total + product.price * +product.quantity;
    }, 0);
    const discount = subTotal * discountPercent / 100;
  
    onChangeProductQuantity = (index, event) => {
      const value = event.target.value;
      const valueInt = parseInt(value);
      const cloneProducts = [...products];
  
      // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
      if (value === "") {
        cloneProducts[index].quantity = value;
      } else if (valueInt > 0 && valueInt < 100) {
        cloneProducts[index].quantity = valueInt;
      }
  
      setProducts(cloneProducts);
    };
  
    onRemoveProduct = i => {
      const filteredProduct = products.filter((product, index) => {
        return index != i;
      });
  
      setProducts(filteredProduct);
    };
  
    onEnterPromoCode = event => {
      setPromoCode(event.target.value);
    };
  
    checkPromoCode = () => {
      for (var i = 0; i < PROMOTIONS.length; i++) {
        if (promoCode === PROMOTIONS[i].code) {
          setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
  
          return;
        }
      }
  
      alert("Sorry, the Promotional code you entered is not valid!");
    };
  
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Header, { itemCount: itemCount }),
  
      products.length > 0 ? /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(ProductList, {
        products: products,
        onChangeProductQuantity: onChangeProductQuantity,
        onRemoveProduct: onRemoveProduct }), /*#__PURE__*/
  
  
      React.createElement(Summary, {
        subTotal: subTotal,
        discount: discount,
        tax: TAX,
        onEnterPromoCode: onEnterPromoCode,
        checkPromoCode: checkPromoCode })) : /*#__PURE__*/
  
  
  
      React.createElement("div", { className: "empty-product" }, /*#__PURE__*/
      React.createElement("h3", null, "There are no products in your cart."), /*#__PURE__*/
      React.createElement("button", { onClick: () => setProducts(PRODUCTS) }, "Shopping now"))));
  
  
  
  
  }
  
  ReactDOM.render( /*#__PURE__*/React.createElement(Page, null), document.getElementById("root"));
  
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD" });
  
  }