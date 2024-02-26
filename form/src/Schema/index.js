import * as yup from 'yup';

const PasswordRegex =
  '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$';

export const basicSchema = yup.object().shape({
  fullname: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email required'),
  password: yup
    .string()
    .min(8)
    .matches(PasswordRegex, {
      message: 'Min 8 - At least 1 letter, 1 number and 1 special',
    })
    .required('Password required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords doesn't match")
    .required('Required'),
});
