import React from 'react';
import { Link } from 'react-router-dom';  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SurveyListItemResponseType } from '../../types/survey';

const useStyles = makeStyles(theme=>({
  card: {
    minWidth: 275,
    marginBottom: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  link: {
    textDecoration: 'none',
  },
  pos: {
    marginBottom: theme.spacing(1.5),
  },
}),{
    name: 'SurveyListItem'
});

const SurveyListItem: React.SFC<SurveyListItemResponseType> = ({
    author,
    createdAt,
    extProjectId,
    jobNumber,
    state,
    stateLastUpdatedAt,
    title,
    updatedAt,
})  => {
  const classes = useStyles({});
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project
        </Typography>
        <Typography variant="h5" component="h2">
        {jobNumber} - {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Created: {createdAt}<br/>
         Updated: {updatedAt}<br/>
        </Typography>
        <Typography variant="body2" component="p">
        by {author.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/surveys/${extProjectId}`} className={classes.link}>
            <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default SurveyListItem;