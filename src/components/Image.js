import React, { Component } from "react";
import Modal from "react-modal";

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: this.props.path,
            showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <a onClick={this.handleOpenModal}>
                    <img
                        src={this.state.img}
                        alt={this.props.title}
                        style={{ width: "100%", height: "250px" }}
                        onMouseEnter={() => {
                            this.setState({
                                img: this.props.hover
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                                img: this.props.path
                            })
                        }}

                    />
                </a>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Closing image modal"
                    onRequestClose={this.handleCloseModal}
                >
                    <img
                        src={this.props.path}
                        alt={this.props.title}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
            </div>
        )
    }

}

export default Image;