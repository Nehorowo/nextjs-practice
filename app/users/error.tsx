"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.error("Error:", error);
  return (
    <div>
      ErrorPage
      <div>
        <button className="btn btn-primary" onClick={reset}>
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
