import * as yup from 'yup'

const initialValues = {
    category: "",
    location: "",
    useLocation: false,
    distance: "",
    price: "",
    openNow: true
}

const validationSchema  = yup.object().shape({ 
    category: yup
        .string()
        .required(),
    location: yup
        .string()
        .required(),
    distance: yup
        .number()
})

export { initialValues, validationSchema }