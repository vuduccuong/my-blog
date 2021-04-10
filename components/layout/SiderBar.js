const SiderBar = () =>{
    return(
      <aside className="container__siderbar">
        <nav>
          <div className="navbar__list">
            <div className="navbar__list-item">
              <a href="#">Blog</a>
            </div>
            <div className="navbar__list-item">
              <a href="#">Project</a>
            </div>
            <div className="navbar__list-item">
              <a href="#">About</a>
            </div>
          </div>
        </nav>
        <nav>
          <header className="navbar__header">
            <h3>My Tags</h3>
            <span
              ><a href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="crayons-icon"
                >
                  <path
                    d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                  ></path></svg></a
            ></span>
          </header>
          <div className="navbar__list">
            <div className="navbar__list-item">
              <a href="#">#Javascript</a>
            </div>
            <div className="navbar__list-item">
              <a href="#">#dotNET</a>
            </div>
            <div className="navbar__list-item">
              <a href="#">#Java</a>
            </div>
          </div>
        </nav>
      </aside>
    )
};

export default SiderBar;