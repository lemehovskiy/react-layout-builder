import React from 'react'
import textPanelStyle from './TextPanel.module.scss';

const buttonsConfig = [
    {
        value: 'left',
        label: 'Left',
    },
    {
        value: 'center',
        label: 'Center',
    },
    {
        value: 'right',
        label: 'Right',
    }
]

class TextAlignPanel extends React.Component {
    onClick(e) {
        this.props.setTextAlign(e.target.value);
    }

    render() {
        let self = this;

        return (
            <div>
                Text Align

                <div className="text-align-btn-group">

                    {
                        buttonsConfig.map((button) => {
                            return (
                                <button
                                    className={self.props.activeValue === button.value ? `${textPanelStyle['text-align-btn-group__btn_active']}` : null}
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

export default TextAlignPanel;
