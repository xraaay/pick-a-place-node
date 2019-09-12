import * as yup from 'yup'

const initialValues = {
    category: "",
    location: "",
    useLocation: false,
    radius: "1609",
    price: "",
    openNow: false
}

const validationSchema  = yup.object().shape({ 
    category: yup
        .string()
        .required("Category is required"),
    location: yup
        .string()
        .when("useLocation", {
            is: false,
            then: yup.string().required("Location is required"),
            otherwise: yup.string()
        }),
    useLocation: yup
        .boolean()
})

export { initialValues, validationSchema }