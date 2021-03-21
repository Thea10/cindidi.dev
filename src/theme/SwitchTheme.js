const SwitchTheme = ({ switchTheme, checked, toggleCheck }) => {
    return (
      <div style={{position: "fixed", bottom: "25%"}}>
        <button className="btn btn-deep-purple border-round" 
          title={checked ? "Dark Mode" : "Light Mode"}
          onClick={() => {
            switchTheme();
            toggleCheck();
          }}
        >
          {checked ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
      </div>
    );
  };
  
  export default SwitchTheme;
  