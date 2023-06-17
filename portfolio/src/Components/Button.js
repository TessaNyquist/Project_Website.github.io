import "./Button.css";

//functional component called "Button" using arrow function syntax. 
//The component takes in three props: className, value, and onClick.
/**const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
*/

const Button = ({ className}) => {
  return (
    <button className={className}>
    </button>
  );
};
export default Button;