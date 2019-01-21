import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import HomeWizardCont from '../HomeWizard/HomeWizardCont';
import CompanyProfileSubwizardCont from '../../../company_module/components/CompanyProfileSubwizard/CompanyProfileSubwizardCont';

const styles = theme => ({
    root: {
        flexGrow: 1,
        border: '1px',
        borderRadius: '3px'
    },
    button: {
        margin: '3px',
    }
})

function View(props) {
    return (<div>
        <HomeWizardCont></HomeWizardCont>
        <CompanyProfileSubwizardCont></CompanyProfileSubwizardCont>
    </div>);
}
export default withStyles(styles)(View);