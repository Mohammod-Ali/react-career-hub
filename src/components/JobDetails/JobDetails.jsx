import {useLoaderData, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';

const JobDetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied Successfully')
    }

    return (
        <div>
            {/* <h1>Job details of : {id}</h1> */}
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className='text-4xl'>Details</h2>
                    <p>{job.job_title}</p>
                    <p>{job.company_name}</p>
                </div>
                <div className='border'>
                    <h2 className='text-2xl'> Side things</h2>
                    <button onClick={handleApplyJob} className='btn btn-primary w-full'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;