import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";



const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, salary, location} = job
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="jobs-logo" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
    </div>
    <div className="my-4 flex my-auto">
        <h1 className="text-2xl flex mr-2"><IoLocationOutline className="mr-2 my-auto"></IoLocationOutline>{location}</h1>
        <h2 className="text-2xl flex "><HiOutlineCurrencyDollar className="my-auto"></HiOutlineCurrencyDollar>{salary}</h2>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Job;