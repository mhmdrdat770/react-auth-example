import * as Yup from 'yup'

const Rule = Yup.object({
    email : Yup.string().email('ایمیل نا معتبر میباشد').required('ایمیل الزامی میباشد'),
    password : Yup.string().required('رمز عبور الزامی میباشد'),
})

export default Rule;