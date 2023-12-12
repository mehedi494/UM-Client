import * as yup from "yup";
export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string().required("Middle name is required"),
      lastName: yup.string().required("Last name is required"),
    }),
    gender: yup.string().required("gender is required"),
    department: yup.string().required("Department is required"),
    email: yup.string().email().required("Email is required"),
    contactNo: yup.string(),
    emergencyContactNo: yup.string(),
    bloodGroup: yup.string(),
    designation: yup.string().required("Designation is required"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    presentAddress: yup.string(),
    permanentAddress: yup.string(),
  }),
});
