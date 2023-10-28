
/** This function checks the validity of form data, & incase the validation fails, shows the Error Msg */

export const checkValidData = (email, password, name)=>{

    //const isNameValid= /^[a-zA-Z ]{2,30}$/.test(name);

    const isEmailValid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    
    const isPasswordValid=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";

    if(!isPasswordValid) return "Password is not valid";

   // if(!isNameValid) return "Name is not Valid"


    return null;



}