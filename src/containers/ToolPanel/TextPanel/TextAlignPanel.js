import React from 'react'

class VerticalAlignPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e){
        this.props.setTextAlign(e.target.value)
    }

    render() {
        return (
            <div>
                Vertical Align

                <div className="btn-group">
                    <button value="left" onClick={this.onClick.bind(this)}>Left</button>
                    <button value="center" onClick={this.onClick.bind(this)}>Center</button>
                    <button value="right" onClick={this.onClick.bind(this)}>Right</button>
                </div>
            </div>
        )
    }
}



export default VerticalAlignPanel;
