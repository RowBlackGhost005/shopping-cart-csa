import React , {useState , createContext , useContext} from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems , setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const alreadyInCart = prev.find((item) => item.id === product.id);

            if(alreadyInCart){
                return prev.map((item) => 
                    item.id === product.id ? {...item , quantity: item.quantity + 1} : item
                )
            }

            return [...prev , {...product , quantity: 1}]
        })
    }

    const subFromCart = (product) => {
        if(product.quantity === 1){
            removeFromCart(product.id);
            return;
        }

        setCartItems((prev) => {
            const alreadyInCart = prev.find((item) => item.id === product.id);

            if(alreadyInCart){
                return prev.map((item) => 
                    item.id === product.id ? {...item , quantity: item.quantity -1 } : item
                )
            }
        })
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                subFromCart
            }}>
            {children}
        </CartContext.Provider>
    );
};