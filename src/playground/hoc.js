// Higher Order Component - a component that renders another component
import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Profile informations</h1>
      <p>The info is : {props.info}</p>
    </div>
  );
};

const restrictedAccessInfo = WrappedComponent => {
  return props => (
    <div>
      {props.jeCoucou && <p>Restricted info. Don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const infoWithAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <div>
          <p>Your profile infos</p>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <p>Please login to see your profile informations</p>
      )}
    </div>
  );
};

const AdminInfo = restrictedAccessInfo(Info);
const AuthInfo = infoWithAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo jeCoucou={true} info="These are the details" />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <AuthInfo
    isAuthenticated={false}
    info="Informations regarding you profile"
  />,
  document.getElementById("root")
);
