import Star from "../Star/Star";

export default function Contact() {
  return (
    <div className="mb-4 p-5">
      <div className="pt-3 container">
        <div className="text-center pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            Contact section
          </h2>
          <Star color="black" />
        </div>
        <form
          className="w-50 p-3 mx-auto mt-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="userName"
            type="text"
            placeholder="Name"
            name="userName"
            className="form-control border-0 border-bottom py-3"
          />
          <input
            id="userAge"
            type="number"
            placeholder="Age"
            name="userAge"
            className="form-control border-0 border-bottom py-3"
          />
          <input
            id="userEmail"
            type="email"
            placeholder="Email"
            name="userEmail"
            className="form-control border-0 border-bottom py-3"
          />
          <input
            id="userPassword"
            type="password"
            placeholder="Password"
            name="userPassword"
            className="form-control border-0 border-bottom py-3"
          />
          <button className="btn btn-primary mt-4 text-white" type="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
