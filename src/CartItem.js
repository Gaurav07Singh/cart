 import React from 'react';

 class CartItem extends React.Component {
    // constructor ()
    // {
    //     super();
    //     this.state = {
    //         price:999,
    //         title:'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // To bind
    //    // this.increaseQuantity = this.increaseQuantity.bind(this);
    //    // or use arrow functions
    // }


    increaseQuantity = () =>
    {
        // this.state.qty += 1;
       // console.log('this', this.state);
        // setState form 1
        this.setState({
            qty: this.state.qty +1
        })

        // setState form 2 - if prevState is required use this.

        // this.setState((prevState) => {
        //     return {
        //         qty:prevState.qty + 1
        //     }
        // });


    }
    decreaseQuantity = () =>
    {
        const{qty} = this.state;
        if(qty == 0) 
        {
            return;
        }
        // this.state.qty += 1;
       // console.log('this', this.state);
        // setState form 1
        this.setState
        ({
             qty: this.state.qty - 1
        })
    }
    render()
    {
        console.log('this.prop' , this.props);
        const {price , title, qty} = this.props.product;
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        } = this.props;
        return (
            <div className="cart-item">
                {this.props.jsx}
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
                           onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                           />
                        <img
                         alt = "decrease"
                          className="action-icons"
                           src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                           onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                            />
                        <img
                         alt = "delete"
                          className="action-icons"
                           src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                           onClick={() => onDeleteProduct(product.id)} />

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