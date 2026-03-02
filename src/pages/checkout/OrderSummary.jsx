
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";
import { DeliveryDate } from "./DeliveryDate";
import axios from "axios";


export function OrderSummary({ deliveryOptions, cart , loadCart}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const deleteItem = async()=>{
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          }
          return (
            <div className="cart-item-container" key={cartItem.product.id}>
              <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem}/>

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem}  deleteItem={deleteItem}/>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
