
import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Please, Enter Your Email!!'),
    msg: Yup.string().required("Please, Enter your message!!")
});