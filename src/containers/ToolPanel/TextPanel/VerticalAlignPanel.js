import React from 'react'
import textPanelStyle from './TextPanel.module.scss';

const buttonsConfig = [
    {
        value: 'top',
        label: 'Top',
    },
    {
        value: 'middle',
        label: 'Middle',
    },
    {
        value: 'bottom',
        label: 'Bottom',
    }
]

class VerticalAlignPanel extends React.Component {
    onClick(e) {
        this.props.setVerticalAlign(e.target.value);
    }

    render() {
        let self = this;

        return (
            <div>
                Vertical Align

                <div className="vertical-align-btn-group">

                    {
                        buttonsConfig.map((button) => {
                            return (
                                <button
                                    className={self.props.activeValue === button.value ? `${textPanelStyle['vertical-align-btn-group__btn_active']}` : null}
                                    key={button.value} value={button.value}
                                    onClick={self.onClick.bind(this)}>{button.label}</button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default VerticalAlignPanel;
