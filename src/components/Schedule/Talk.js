import React from "react";
import Modal from 'react-modal';

class Talk extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    static defaultProps = {
        colSize: 1,
        rowSize: 1,
        color: "stage-default",
        room: "Salle 1",
        duration: "45 min",
        category: "Orga 2020",
        speaker: "",
        company: "",
        badgesColor: "badge-color",
        description: ""
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        const customStylesModal = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };
        const speaker = this.props.speaker
        const company = this.props.company
        let displaySubjectSpeaker = <p><strong>{this.props.subject}</strong></p>; 
        if (speaker.length > 0) {
            if(company.length > 0){
                displaySubjectSpeaker = <p><a onClick={this.handleOpenModal}><strong>{this.props.subject}</strong></a><br/>{speaker} {company}</p>;
            }
            else
                displaySubjectSpeaker = <p><a onClick={this.handleOpenModal}><strong>{this.props.subject}</strong></a><br/>{speaker}</p>;
        }
        return (
            <td
                colSpan={this.props.colSize}
                rowSpan={this.props.rowSize}
                className={this.props.color}
            >
                {displaySubjectSpeaker}
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    style={customStylesModal}
                >
                    <section className="main style1">
                        <div className="grid-wrapper">
                            <div className="col-12">
                                <header className="major">
                                    <h3>{this.props.subject}</h3>
                                    <h5>{this.props.speaker}</h5>
                                </header>
                                <p>{this.props.description}</p>
                                <div className="modal-footer">
                                    <a className="button special" onClick={this.handleCloseModal}>Close</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </Modal>
                <div className={this.props.badgesColor}>
                    <span>{this.props.duration}</span>
                    <span>{this.props.category}</span>
                    <span>{this.props.room}</span>
                </div>
            </td>
        );
    }
}

export default Talk;
