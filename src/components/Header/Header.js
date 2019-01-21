import React, { Component } from 'react'
import View from './WizardContainer.view'

class WizardContainer extends Component {
    render() {
        return <View currentSubwizardIndex={this.props.currentSubwizardIndex}/>;
    }
}

export default WizardContainer;