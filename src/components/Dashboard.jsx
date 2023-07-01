import { useCurrentUser } from "../auth/useCurrentUser.js";
// eslint-disable-next-line import/no-unresolved
import "@passageidentity/passage-elements/passage-profile";

import "../App.css";

function Dashboard() {
  const [isLoading, isAuthorized] = useCurrentUser();

  if (isLoading) {
    return null;
  }

  const authorizedBody = (
    <>
      <h1>You successfully signed into Passage.</h1>
      <code>
        <passage-profile
          app-id={process.env.REACT_APP_PASSAGE_APP_ID}
        ></passage-profile>
      </code>
    </>
  );

  const unathorizedBody = (
    <>
      <h1>You have not logged in and cannot view the dashboard.</h1>
      <p>
        <a href="/" className="dashboard link">
          Login to continue.
        </a>
      </p>
    </>
  );

  return (
    <div className="dashboard">
      <h1>Welcome to the Hackathon app!</h1>
      <div className="title">
        {isAuthorized
          ? "Welcome to the Hacakthon!"
          : "You have not authenticated yourself"}
      </div>
      <div className="message">
        {isAuthorized ? authorizedBody : unathorizedBody}
      </div>
    </div>
  );
}

export default Dashboard;
