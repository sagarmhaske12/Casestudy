import { connect } from 'react-redux'
import WizardLandingPage from './WizardLandingPage'
import { wizardModalStateChanged } from '../../actions'

const mapStateToProps = state => {
    return {
        open: state.wizardModalState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartClick: () => {
            dispatch(wizardModalStateChanged(true))
        }
    }
}

// let WizardLandingPageCont = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(WizardLandingPage)

let WizardLandingPageCont = connect(mapStateToProps)(WizardLandingPage)

export default WizardLandingPageCont;
