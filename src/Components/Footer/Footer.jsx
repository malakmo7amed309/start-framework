

export default function Footer() {
  return (
    <>
       <div className="footer ">
            <div className="card-group m-4">
              <div className="card">
                <div className="card-body text-center">
                  <h3>LOCATION</h3>
                  <p>Fayoum, Egypt</p>
                  <p>Demo address</p>
                </div>
              </div>
              <div className="card text-white">
                <div className="card-body text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons">
                    <i className="fa-brands fa-facebook mx-1 icon"></i>
                    <i className="fa-brands fa-twitter mx-1 icon"></i>
                    <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                  
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <h3>ABOUT</h3>
                  <p>
                    {" "}
                    A small React and Bootstrap starter template by Malak Mohamed{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
       <div className=" footer1 text-center  ">
            <p>Start Framework 2026</p>
          </div>
          
    </>
  )
}
