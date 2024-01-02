import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Navbar1 from './Navbar1';

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),

    collage: Yup.string()
        .required('Required'),

    year: Yup.string()
        .required('Required'),

    degree: Yup.string()
        .required('Required'),

    course: Yup.string()
        .required('Required'),

    number: Yup.string()

        .required('Required')
});

const CtestForm = () => {

    const navigate = useNavigate();



    const Form = useFormik({
        initialValues: {
            name: '',
            email: '',
            collage: '',
            year: '',
            degree: '',
            course: '',
            number: ''


        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);

            const res = await fetch("http://localhost:5000/form/add", {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);


            if (res.status === 200) {


                Swal.fire({
                    icon: 'success',
                    title: 'Nice',
                    text: 'you have registerd now'
                })
                navigate('/test');
            } else {
                Swal.fire({
                    icon: 'erroe',
                    title: 'opps',
                    text: 'somthing wrong'
                })
            }
        },
        validationSchema: FormSchema
    });
    return (
        <div>
            <Navbar1/>
            <div className="container my-3">

                <div >
                    <span>Dashboard &gt; Certification Test</span>

                </div>
                <div>
                    <span className='fw-bold fs-3'>Angular (Basic) Skills Certification Test</span>
                </div>


            </div>
            <hr />
            <div className="container">
                <div className="card ">
                    <div className="card-header">
                        <div className="row my-5">
                            <div className="col-2 p-0 ms-4">
                                <img src="https://www.itview.in/img/features/certificate.png" alt="" height={100} />
                            </div>
                            <div className="col-8">
                                <p className='fs-1'>Angular (Basic) Skills Certification Test</p>
                                <div>
                                    <span><img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="" height={20} /> 60 min</span>
                                    <button className='rounded ms-2'><span>AngularJS</span></button>
                                    <button className='rounded ms-2'><span>JavaScript</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='d-flex justify-content-start my-5'>
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Eo_circle_blue_number-1.svg/2048px-Eo_circle_blue_number-1.svg.png" alt="" height={30} className='ms-2' />
                                <span className='fw-bold text-primary ms-2'>Review Profile </span>
                            </div>
                            <div>
                                <img src="https://www.solutionblades.com/wp-content/uploads/2022/12/blue-arrow-Snapchat-icon-300x169.png" alt="" height={30} />
                            </div>
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eo_circle_light-blue_white_number-2.svg/1024px-Eo_circle_light-blue_white_number-2.svg.png" alt="" height={30} className='ms-2' />
                                <span className='fw-bold text-primary ms-2'>Certification Test </span>
                            </div>
                        </div>

                        <form  onSubmit={Form.handleSubmit}>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" className='form-control w-25 mb-2'
                            id='name'
                             values={Form.values.name}
                             onChange={Form.handleChange} />
                            <span className='text-danger'>{Form.errors.name}</span>

                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="text" className='form-control w-25 mb-2'
                            id='email'
                            values={Form.values.email}
                            onChange={Form.handleChange} />
                            <span className='text-danger'>{Form.errors.email}</span>

                            <label htmlFor="colage" className="foem-label">Collage</label>
                            <input type="text" className='form-control w-25 mb-2'
                            id='collage'
                            values={Form.values.collage}
                            onChange={Form.handleChange} />
                            <span className='text-danger'>{Form.errors.collage}</span>

                            <label htmlFor="year" className="form-label">Passing Year</label>
                            <input type="text" className='form-control w-25 mb-2'
                            id='year'
                            values={Form.values.year}
                            onChange={Form.handleChange} />
                            <span className='text-danger'>{Form.errors.year}</span>

                            <label htmlFor="degree" className="form-label">Degree</label>
                            <input type="text" className='form-control w-25 mb-2'
                            id='degree'
                            values={Form.values.degree}
                             onChange={Form.handleChange}/>
                            <span className='text-danger'>{Form.errors.degree}</span>

                            <label htmlFor="course" className="form-label">Course</label>
                            <input type="text" className='form-control w-25 mb-2'
                            id='course' 
                            values={Form.values.course}
                            onChange={Form.handleChange} />
                            <span className='text-danger'>{Form.errors.course}</span>

                            <label htmlFor="number" className="form-label">Number</label>
                            <input type="text" className='form-control w-25 mb-3'
                            id='number'
                            values={Form.values.number}
                            onChange={Form.handleChange} />
                            <span className='text-danger'>{Form.errors.number}</span>

                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="container">

                <div className="links d-flex justify-content-center my-5">
                    <a className='mx-2' href="">Blog</a>
                    <a className='mx-2' href="">Scoring</a>
                    <a className='mx-2' href="">Environment</a>
                    <a className='mx-2' href="">FAQ</a>
                    <a className='mx-2' href="">About Us</a>
                    <a className='mx-2' href="">Careers</a>
                    <a className='mx-2' href="">Terms of Service</a>
                    <a className='mx-2' href="">Privacy Policy</a>

                </div>
            </div>
        </div>
    )
}

export default CtestForm