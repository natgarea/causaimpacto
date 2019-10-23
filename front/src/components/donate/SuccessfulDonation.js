import React, { Component } from 'react';
import DonationService from '../../services/DonationService'
import { withRouter } from "react-router-dom";

class SuccessfulDonation extends Component {
    constructor(props){
        super(props);
        this.state={
            comment: ""
        }
        this.service = new DonationService();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          ...this.state,
          [name]: value
        });
      };

      handleSubmit = donationComment => {
        this.service.addComment(this.props.match.params.id, donationComment)
        this.props.history.push("/home")
      };

    render() {
        return (
            <div>
                <h1 className="title">¡Gracias por tu donación {this.props.userInSession.userFirstname ? `, ${this.props.userInSession.userFirstname}!` : `, ${this.props.userInSession.username}!` }</h1>
                <form>
                <div className="field">
              <label className="label">¿Te gustaría añadir un comentario a tu donación?</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="comment"
                  onChange={e => this.handleChange(e)}
                  value={this.state.comment}
                  placeholder="Tu comentario (opcional)."
                ></textarea>
              </div>
            </div>
            <button type="submit" onClick={() => this.handleSubmit(this.state.comment)} className="button is-link">Enviar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(SuccessfulDonation);