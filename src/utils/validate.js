export const checkValidation =(email,password)=>{
    const isEmailvalid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid= /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!isEmailvalid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;

} 