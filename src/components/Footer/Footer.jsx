

const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 text-base-content">
 <div className="footer mx-6xl mx-auto">
 <aside>
    
    <h2 className="text-4xl font-bold">CareerHub</h2>
    <p className="">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.    </p>
   <div>
   <img className="h-14 w-40" src="../../assets/icons/social.png" alt="" />
   </div>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 </div>
</footer>
    );
};

export default Footer;