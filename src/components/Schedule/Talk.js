import React from "react";

class Talk extends React.Component {
    static defaultProps = {
        colSize: 1,
        rowSize: 1,
        color: "stage-important",
        room: "Salle 1",
        duration: "45 min",
        category: "DevOps",
        speaker: ""
    }

    render() {
        const speaker = this.props.speaker
        let displaySubjectSpeaker = <p><strong>{this.props.subject}</strong></p>;
        if (speaker.length > 0) {
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
