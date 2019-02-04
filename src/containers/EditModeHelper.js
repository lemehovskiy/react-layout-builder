import React from 'react'
import {connect} from 'react-redux'

class EditModeHelper extends React.Component {
    render() {

        const helperConfig =
            {
                dots: [
                    {
                        name: 'nw',
                        x: this.props.x,
                        y: this.props.y
                    },
                    {
                        name: 'n',
                        x: this.props.x + this.props.width / 2,
                        y: this.props.y
                    },
                    {
                        name: 'ne',
                        x: this.props.x + this.props.width,
                        y: this.props.y
                    },
                    {
                        name: 'w',
                        x: this.props.x,
                        y: this.props.y + this.props.height / 2
                    },
                    {
                        name: 'e',
                        x: this.props.x + this.props.width,
                        y: this.props.y + this.props.height / 2
                    },
                    {
                        name: 'sw',
                        x: this.props.x,
                        y: this.props.y + this.props.height
                    },
                    {
                        name: 's',
                        x: this.props.x + this.props.width / 2,
                        y: this.props.y + this.props.height
                    },
                    {
                        name: 'se',
                        x: this.props.x + this.props.width,
                        y: this.props.y + this.props.height
                    }
                ]
            }

            const rotateIcon = {
                x: this.props.x + this.props.width / 2 - 6,
                y: this.props.y - 20
            }


        return (
            <g>
                <rect
                    width={this.props.width}
                    height={this.props.height}
                    x={this.props.x}
                    y={this.props.y}
                    fill="none" stroke="#00a8ff" strokeDasharray="3 3" pointerEvents="none"/>

                            <path transform={'translate(' + rotateIcon.x + ' ' + rotateIcon.y +')'} stroke="#ffffff" strokeWidth="0.2" d="M5.1,0.2L4.4,0.8c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1C4.2,2.1,2.8,2.5,1.7,3.5c-2,1.8-2.1,4.9-0.3,6.8
                c1.8,2,4.8,2.1,6.8,0.3c0.9-0.8,1.4-1.9,1.5-3.1c0-0.1-0.1-0.3-0.2-0.3l-0.9,0c-0.1,0-0.2,0.1-0.2,0.2C8.3,8.2,7.9,9,7.2,9.6
                c-1.4,1.3-3.6,1.2-4.8-0.2C1.1,8,1.2,5.8,2.6,4.5c0.9-0.8,2-1.1,3.1-0.8L4.2,5c-0.1,0.1-0.1,0.2,0,0.3L4.8,6c0.1,0.1,0.2,0.1,0.3,0
                L8,3.4c0.1-0.1,0.1-0.2,0-0.3L5.4,0.2C5.3,0.1,5.2,0.1,5.1,0.2z"/>


                {helperConfig.dots.map(function (dot) {
                    return <circle key={dot.name} cx={dot.x} cy={dot.y} fill="#34B7EF" r="5"/>
                })}

            </g>
        )
    }
}

// const mapStateToProps = ({ svgRender }) => ({
//
// })
//
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({
//             updateHandlerObjectIndex,
//             increment
//         },
//         dispatch
//     )

export default connect(
    null,
    null
)(EditModeHelper)
