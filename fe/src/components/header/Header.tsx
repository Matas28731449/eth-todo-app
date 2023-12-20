import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <h1 className="ui header">
        <i className="tasks icon"></i>
        <div className="content">
          Todo App
          <div className="sub header">
            Make your order of tasks and maintain a steady routine!
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Header;
