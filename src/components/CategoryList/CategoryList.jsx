import { useEffect, useState } from "react";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  console.log(category);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-5xl text-center">This is job category list</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" flex flex-wrap gap-10">
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="../../assets/icons/accounts.png" alt="jobs card img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Account & Finance</h2>
            <p>300 Jobs Available</p>
          </div>
        </div>
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="../../assets/icons/accounts.png" alt="jobs card img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Creative Design</h2>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="../../assets/icons/accounts.png" alt="jobs card img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Marketing & Sales</h2>
            <p>150 Jobs Available</p>
          </div>
        </div>
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img src="../../assets/icons/accounts.png" alt="jobs card img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Engineering Job</h2>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
