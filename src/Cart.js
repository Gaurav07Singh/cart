import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component {

    constructor ()
    {
        super();
        this.state = {
            products: [
                {
                    price:499,
                    title:'Watch',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price:28999,
                    title:'Phone',
                    qty: 1,
                    img: '',
                    id:3
                },
                {
                    price:49999,
                    title:'Laptop',
                    qty: 1,
                    img: '',
                    id:4
                },
                {
                    price:499,
                    title:'Charger',
                    qty: 1,
                    img: '',
                    id:6
                }
            ]
        }
    }

    // handle increse quqntity

    handleIncreaseQuantity = (product) => 
    {
        console.log("hey, please increase the quantity of" , product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            product: products
        })
    }

    handleDecreaseQuantity = (product) =>
    {
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty > 0){
        products[index].qty -= 1;}
        this.setState(
            { products:products}
        )
    }

    handleDeleteProduct = (id) =>
    {
        const {products} = this.state;
        const items = products.filter((item) =>item.id !== id);
        this.setState({
            products:items
        })
    }
    render() {
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((products) => {
                    return <CartItem 
                    product={products}
                     key = {products.id}
                     onIncreaseQuantity={this.handleIncreaseQuantity}
                     onDecreaseQuantity = {this.handleDecreaseQuantity}
                     onDeleteProduct  = {this.handleDeleteProduct}

                     />
                })}
            </div>
        );
   }
}


export default Cart;