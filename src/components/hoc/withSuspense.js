import React from "react";
import Preloader from "../common/Preloader/Preloader";

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />} {...props}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
