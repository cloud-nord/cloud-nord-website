import React from "react";

class Break extends React.Component {
    static defaultProps = {
        colSize: 4,
        rowSize: 1,
        color: "stage-break",
        text: "Pause"
    }

    render() {
        return (
            <td
                colSpan={this.props.colSize}
                rowSpan={this.props.rowSize}
                className={this.props.color}
            >
                <span>{this.props.text}</span>
            </td>
        );
    }
}

export default Break;
