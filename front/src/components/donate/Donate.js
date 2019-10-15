//https://www.robinwieruch.de/react-paypal-payment
import React, { Component } from "react";
import PayPalButton from "./PayPalButton";


const CLIENT = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID
};
const ENV = "sandbox";

export default class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: 10,
      anonymous: false,
      contact: true
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleCheckboxChange = event => {
    const { name, checked } = event.target;
    this.setState({
      ...this.state,
      [name]: checked
    });
  };

  render() {
    return (<div></div>) }
  //   const onSuccess = payment => {
      
  //   }
    
  //   console.log("Successful payment!", payment);
  //   const onError = error =>
  //     console.log("Erroneous payment OR failed to load script!", error);
  //   const onCancel = data => console.log("Cancelled payment!", data);
  //   return (
  //     <div>
  //       <form>
  //         <div className="field">
  //           <label className="label">Cantidad:</label>
  //           <div className="control">
  //             <input
  //               name="donation"
  //               className="input is-large"
  //               type="text"
  //               placeholder="Text input"
  //               value={this.state.donation}
  //               onChange={e => this.handleChange(e)}
  //             />
  //           </div>
  //         </div>
  //         <div className="field">
  //           <label className="checkbox">
  //             <input
  //               type="checkbox"
  //               name="anonymous"
  //               checked={this.state.anonymous}
  //               onChange={e => this.handleCheckboxChange(e)}
  //             />
  //             <span>Donar de forma anónima.</span>
  //           </label>
  //         </div>
  //         <div className="field">
  //           <label className="checkbox">
  //             <input
  //               type="checkbox"
  //               name="contact"
  //               checked={this.state.contact}
  //               onChange={e => this.handleCheckboxChange(e)}
  //             />
  //             <span>Quiero que la organización me pueda contactar.</span>
  //           </label>
  //         </div>
  //         <PayPalButton
  //           client={CLIENT}
  //           env={ENV}
  //           commit={true}
  //           currency={"EUR"}
  //           total={this.state.donation}
  //           onSuccess={onSuccess}
  //           onError={onError}
  //           onCancel={onCancel}
  //         />
  //         {/* <Link to="#" className="button is-primary is-large">
  //           Donar
  //         </Link> */}
  //       </form>
  //     </div>
  //   );
  // }
}
