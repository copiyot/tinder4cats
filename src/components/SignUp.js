import React from "react";

const SignUp = props => {
  return (
    <div className="center-signup mt-4">
      <div className="card">
        <form class="text-center border border-light px-5 py-2" action="#!">
          <p class="text-uppercase h4 mb-4">Register with Tinder 4 Cats</p>

          <div class="form-row mb-4">
            <div class="col">
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                class="form-control"
                placeholder="First name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                id="defaultRegisterFormLastName"
                class="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <input
            type="email"
            id="defaultRegisterFormEmail"
            class="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            type="password"
            id="defaultRegisterFormPassword"
            class="form-control mb-4"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />

          <input
            type="text"
            id="defaultRegisterPhonePassword"
            class="form-control mb-4"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />

          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
          </div>

          <button
            onClick={e => {
              e.preventDefault();
              props.history.push("/login");
            }}
            class="btn btn-info my-2 btn-block"
            type="submit"
          >
            Sign Up
          </button>

          <a href="#" class="mx-2" role="button">
            <i class="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" class="mx-2" role="button">
            <i class="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" class="mx-2" role="button">
            <i class="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="#" class="mx-2" role="button">
            <i class="fab fa-github light-blue-text"></i>
          </a>

          <hr />

          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">
              terms of service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
