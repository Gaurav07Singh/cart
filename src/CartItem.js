 import React from 'react';

 class CartItem extends React.Component {
    render()
    {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div> 
                <div className="right-block">
                    <div style={ {fontSize:25} }>Item</div>
                    <div style={ {color:'#777'} }>Rs 999</div>
                    <div style={ {color:'#777' , fontSize:20} }>Qty :1</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
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