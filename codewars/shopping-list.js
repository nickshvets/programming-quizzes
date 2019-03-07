
function shoppingListCost(arr) {
  console.log(groceries);
  return arr.reduce((acc, el) => {
    const store = groceries[el[0]];
    const quantity = el[1];
    const discount = +(store.discount === 0 ? 1 : (1 - store.discount / 100).toFixed(2));
    const adjustedQuantity = +(store.bogof ? Math.round(quantity / 2) : quantity).toFixed(2);
    let price = +((store.price * discount * adjustedQuantity).toFixed(2));
    console.log(`${el[0]} => ${discount} => ${adjustedQuantity} => ${price}`);
    acc += price;
    return acc
  }, 0);

}