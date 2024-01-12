// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const ListQuestion = () => {

//     const [questionList, setQuestionList] = useState([]);

//     const fetchquestiondata = async () => {
//         const res = await fetch("http://localhost:5000/addsolution/getall");
//         console.log(res.status);

//         const data = await res.json();
//         console.log(data);
//         setQuestionList(data);

//     };

//     useEffect(() => {
//         fetchquestiondata();
//     }, []);

//     return (
//         <div>
//             {
//                 questionList.map((ques) => (


//                     <div className="container">
//                         <div className="row">
//                             <div className="col-12">
//                                 <Link to={`/solutions/${ques._id}`}>Solution</Link>
//                                {ques.solution}
//                             </div>
//                         </div>
//                     </div>

//                 ))
//             }
//         </div>
//     )
// }

// export default ListQuestion