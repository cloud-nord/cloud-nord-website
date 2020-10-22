import React from "react";

class Talk extends React.Component {
    static defaultProps = {
        colSize: 1,
        rowSize: 1,
        color: "stage-important",
        room: "Salle 1",
        duration: "45 min",
        category: "Orga 2020",
        speaker: "",
        company: ""
    }

    render() {
        const speaker = this.props.speaker
        const company = this.props.company
        let displaySubjectSpeaker = <p><strong>{this.props.subject}</strong></p>; 
        if (speaker.length > 0) {
            if(company.length > 0){
                displaySubjectSpeaker = <p><strong>{this.props.subject}</strong><br/>{speaker} {company}</p>;
            }
            else
                displaySubjectSpeaker = <p><strong>{this.props.subject}</strong><br/>{speaker}</p>;
        }
        return (
            <td
                colSpan={this.props.colSize}
                rowSpan={this.props.rowSize}
                className={this.props.color}
            >
                {displaySubjectSpeaker}
                <div>
                    <span>{this.props.duration}</span>
                    <span>{this.props.category}</span>
                    <span>{this.props.room}</span>
                </div>
            </td>
        );
    }
}

export default Talk;
