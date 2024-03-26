import * as Yup from 'yup'

const Rule = Yup.object({
    name :  Yup.string().required('نام الزامی میباشد'),
    email : Yup.string().email('ایمیل نا معتبر میباشد').required('ایمیل الزامی میباشد'),
    password : Yup.string().required('رمز عبور الزامی میباشد'),
})

export default Rule;