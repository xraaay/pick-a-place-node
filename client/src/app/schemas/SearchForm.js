import * as yup from 'yup'

const initialValues = {
    category: "",
    location: "",
    useLocation: false,
    radius: "1609",
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
    useLocation: yup.bool(),
    price: yup.string(),
    radius: yup.string(),
    openNow: yup.bool()
})

export { initialValues, validationSchema }