import React from 'react';
import { Link } from 'react-router-dom';
import { SurveyResponseType } from '../../types/survey';
import PageTitle from '../../components/PageTitle/PageTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Button/Button';

const useStyles = makeStyles(theme=> ({
    paper: {
        padding: theme.spacing(2)
    },
    subtitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    }
}), {
   name: "SurveyDisplay"
})

const SurveyDisplay:React.SFC<SurveyResponseType> = ({
    author,
    category,
    createdAt,
    devices,
    exclusions,
    extProjectId,
    jobNumber,
    lineItems,
    notificationEmails,
    state,
    stateLastUpdatedAt,
    title,
    updatedAt,
}) => {
    const classes = useStyles({})
    return (
    <div>
        <PageTitle title={`${title} (Project)`} >
            <Link to="/">
                <Button variant="secondary">Back to Project List</Button>
            </Link>
        </PageTitle>
    <Grid container direction="column" spacing={3}>
    <Paper className={classes.paper}>
        
        <Grid container component="dl" spacing={3}>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">Project ID</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {extProjectId}
            </Grid>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">Job Number</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {jobNumber}
            </Grid>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">Author</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {author.name}
            </Grid>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">Created At</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {createdAt}
            </Grid>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">Updated At</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {updatedAt}
            </Grid>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">Category</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {category.surveyTopic.map((topic, index)=><Chip key={`topic_${index}`} label={topic} />)}
            </Grid>
            <Grid item xs={6} component="dd">
                <Typography variant="body1">Devices</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {devices.map((device, index)=><Chip key={`device_${index}`} label={device} />)}
            </Grid>
            <Grid item xs={6} component="dt">
                <Typography variant="body1">State</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                <Chip label={state} />
            </Grid>
            <Grid item xs={6} component="dd">
                <Typography variant="body1">Exclusions</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {exclusions.list.map((exclusion, index)=><Chip key={`exclusion_list_${index}`} label={exclusion} />)}
            </Grid>
            <Grid item xs={6} component="dd">
                <Typography variant="body1">Notification Emails</Typography>
            </Grid>
            <Grid item xs={6} component="dd">
                {notificationEmails.map((email, index)=><Chip key={`notification_email_${index}`} label={email} />)}
            </Grid>
        </Grid>
        
        </Paper>
        <Typography variant="h5" className={classes.subtitle}>Line Items</Typography>
        {lineItems.map((lineItem, lineItemIndex) => (
            <Paper key={`line_item_${lineItemIndex}`} className={classes.paper}>
                <Grid container component="dl" spacing={3}>
                <Grid item xs={6} component="dt">
                    <Typography variant="body1">Title</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.title} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">CountryISOCode</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.countryISOCode} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Created At</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    {lineItem.createdAt}
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Days In Field</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.daysInField} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Delivery Type</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.deliveryType} />
                </Grid>
                    
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Ext Line Item Id</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.extLineItemId} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Indicative Incidence</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.indicativeIncidence} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Ianguage ISO Code</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.languageISOCode} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Launched At</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    {lineItem.launchedAt}
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Length Of Interview</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.lengthOfInterview} />
                </Grid>
                    
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Quota Plan</Typography>
                </Grid>
                
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.requiredCompletes} />
                </Grid>
                    
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">State</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.state} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">State Last Updated At</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    {lineItem.stateLastUpdatedAt}
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Survey Test URL</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.surveyTestURL} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">Survey URL</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    <Chip label={lineItem.surveyURL} />
                </Grid>
                    
                
                <Grid item xs={6} component="dt">
                    <Typography variant="body1">Updated At</Typography>
                </Grid>
                <Grid item xs={6} component="dd">
                    lineItem.updatedAt
                </Grid>
                    {/* <Grid item xs={6} component="dd">
                    <Chip label={lineItem.quotaPlan} />
                </Grid>
                    <Grid item xs={6} component="dt">
                <Typography variant="body1">requiredCompletes</Typography>
                </Grid>endLinks: Array<SurveyEndlink>,
                    targets: Array<SurveyTarget>,
                    sources: Array<SurveySource>; */}
                </Grid>
            </Paper>
        ))}
        </Grid>    
    </div>
)
}

export default SurveyDisplay;