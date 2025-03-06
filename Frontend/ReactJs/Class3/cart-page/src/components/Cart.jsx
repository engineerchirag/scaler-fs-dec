import { useState } from "react";
import Counter from "./Counter";

const Cart = () => {
    const [products, setProducts] = useState([
        { id: '1', name: 'Product 1', price: 100, quantity: 1 }, 
        { id: '2', name: 'Product 2', price: 150, quantity: 2 }, 
        { id: '3', name: 'Product 3', price: 200, quantity: 4 }
    ]);

    const handleCheckout = () => {
        console.log(products);
    };

    const handleQuantityChange = (id, quantity) => {
        console.log('Quantity changed', id, quantity);
        const updatedProducts = products.map(product => {
            return product.id === id ? {...product, quantity: quantity} : product;
        })
        setProducts(updatedProducts);
    }

    return (
        <div>
            <ul>
                {
                    products.map(product => (
                        <li>{product.name} - Rs. {product.price} <Counter productId={product.id} quantity={product.quantity} onUpdate={handleQuantityChange}/></li>
                    ))
                }
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
        </div>

    )
}


export default Cart;