import { useFormik } from 'formik';
import React, { useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Addsolution = () => {
    const navigate = useNavigate();

    const solutionForm = useFormik({
        initialValues: {
            solution: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            values.solution = markdowmContent;
            setSubmitting(true);
            console.log(values);

            const res = await fetch("http://localhost:5000/addsolution/add", {
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
                    text: 'you have registered now'
                })
                navigate('/questions');
            } else {
                Swal.fire({
                    icon: 'erroe',
                    title: 'opps',
                    text: 'somthing wrong'
                })
            }
        },

    });



    const [markdowmContent, setMarkdownContent] = useState();

    return (
        <div>

            <div className='container'>
                <MDEditor value={markdowmContent} onChange={(v) => setMarkdownContent(v)} />
                
               
            </div>
           

            <form action="" onSubmit={solutionForm.handleSubmit}>
                <label htmlFor="question" className='form-label'>Question</label>
               
                <textarea type="text" id='solution' rows={10}  values={solutionForm.values.solution} onChange={solutionForm.handleChange} className='form-control w-50 mb-2' />
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Addsolution