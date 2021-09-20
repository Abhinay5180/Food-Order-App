import classes from './Checkout.module.css';
import {useRef, useState} from 'react';

const isEmpty = value =>value.trim()=== '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
   
    const [formInputValidity, setFormInputValidty] = useState({
      name:true,
      street:true,
      city:true,
      postalCode:true
    });

    const nameInputRef =useRef();
    const streetInputRef =useRef();
    const postalInputRef =useRef();
    const cityInputRef =useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredcity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredcity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputValidty({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode:enteredPostalCodeIsValid
    })

    const formIsValid=
     enteredCityIsValid &&
      enteredNameIsValid &&
       enteredPostalCodeIsValid &&
       enteredStreetIsValid;
       
       if(!formIsValid){
       return;
       }
     props.onConfirm({
         name:enteredName,
         street:enteredStreet,
         city: enteredcity,
         postalCode: enteredPostalCode,
     });
  };

  const nameContolClasses = `${classes.control} ${
      formInputValidity.name ? '' : classes.invalid
  }`;
  const streetContolClasses = `${classes.control} ${
      formInputValidity.street ? '' : classes.invalid
  }`;
  const cityContolClasses = `${classes.control} ${
      formInputValidity.city ? '' : classes.invalid
  }`;
  const postalContolClasses = `${classes.control} ${
      formInputValidity.postalCode ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameContolClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetContolClasses}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}

      </div>
      <div className={postalContolClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={postalInputRef} type='text' id='postal' />
        {!formInputValidity.postalCode && <p>Please enter a valid postal code ( 5 characters long)</p>}

      </div>
      <div className={cityContolClasses}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;