 import React from 'react';

 class CartItem extends React.Component {
    constructor ()
    {
        super();
        this.state = {
            price:999,
            title:'Phone',
            qty: 1,
            img: ''
        }
        // To bind
       // this.increaseQuantity = this.increaseQuantity.bind(this);
       // or use arrow functions
    }
    increaseQuantity = () =>
    {
        console.log('this', this.state);
    }
    render()
    {
        const {price , title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div> 
                <div className="right-block">
                    <div style={ {fontSize:25} }>{title}</div>
                    <div style={ {color:'#777'} }>{price}</div>
                    <div style={ {color:'#777' , fontSize:20} }>{qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img
                         alt = "increase"
                          className="action-icons"
                           src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                           onClick={this.increaseQuantity}
                           />
                        <img
                         alt = "decrease"
                          className="action-icons"
                           src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img
                         alt = "delete"
                          className="action-icons"
                           src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
                    </div>

                </div>
            </div>
        )
    }
 }

 // javascript objects for styling
 const styles = {
    image: {
        height:200,
        width:200,
        borderRadius:4,
        background: '#cccc'
        
    }
 }

 export default CartItem;