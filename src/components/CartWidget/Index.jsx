import { Icon } from '@iconify/react';

const CartWidget = ({quantity}) => {

  return (

    <div className='cart-widget'>
      <span className='pill'>{ quantity }</span>
      <Icon className='cart-widget__icon' icon="f7:cart" />
    </div>
  );
};

export default CartWidget;