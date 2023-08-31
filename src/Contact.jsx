const Contact = () => {
    
  function HandleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <h2 className="text-center text-primary py-2">Contact Us</h2>
          <div className="col-6">
            <h2>Location</h2>
            <address>
              No. 1, Akshaya Today, Kelambakkam, Chennai - 603103.
            </address>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.405604034435!2d80.21261739610438!3d12.788155975729932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52509116b4ba75%3A0x94d4211ea4900d05!2sKelambakkam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1693504488264!5m2!1sen!2sin"
              title="location"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-6">
            <h4 className="text-center">Get In Touch</h4>
            <form onSubmit={HandleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="form-control border-primary border-1"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control border-1 border-primary"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control border-1 border-primary"
                  name="message"
                  rows="3"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
