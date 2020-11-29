import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <div>
      <nav>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
        </button>
        <h1>Master Blaster</h1>
      </nav>
    </div>
  );
};

export default Nav;
