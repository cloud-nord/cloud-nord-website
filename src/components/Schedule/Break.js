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
                <p>{this.props.text}</p>
            </td>
        );
    }
}

export default Break;
