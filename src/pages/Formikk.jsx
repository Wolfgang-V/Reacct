import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"



const Formikk = () => {
    let formik=useFormik({
      initialValues:{
        firstname:"",
        lastname:"",
        email:"",
        password:""
      },
      onSubmit:(values)=>{
        console.log(values);
      },

      validationSchema:yup.object({
        firstname:yup.string().required("first name is required"),
        lastname:yup.string().required("last name is required"),
        email:yup.string().required("invalid email format").email("email is required"),
        password: yup.string().required("password is required").matches(
        /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      )
      })
        
    })
     console.log(formik.values);
    console.log(formik.errors);
    console.log(formik.touched);
  return (
    <div>
<input type="text"  placeholder='first name' name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur}
  /> {(formik.touched.firstName&&formik.errors.firstName)&&<small className='text-danger'>{formik.errors.firstName}</small>}<br /><br />
<input type="text"  placeholder='last name' name='lastName' onChange={formik.handleChange}onBlur={formik.handleBlur}
 />{(formik.touched.lastName&&formik.errors.lastName)&&<small className='text-danger'>{formik.errors.lastName}</small>} <br /><br />
<input type="text"  placeholder='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}
 />{(formik.touched.email&&formik.errors.email)&&<small className='text-danger'>{formik.errors.email}</small>} <br /><br />
<input type="text"  placeholder='password' name='password' onChange={formik.handleChange}onBlur={formik.handleBlur}
 />{(formik.touched.password&&formik.errors.password)&&<small className='text-danger'>{formik.errors.password}</small>} <br /><br />

<button type='submit' className='btn btn-primary' onClick={formik.handleSubmit}>submit</button>
    </div>
  )
}

export default Formikk