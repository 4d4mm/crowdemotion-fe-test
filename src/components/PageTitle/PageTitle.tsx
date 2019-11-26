import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles}  from '@material-ui/core/styles'

const useStyles = makeStyles(theme=> ({
    main: {
        marginBottom: theme.spacing(3)
    }
}), {
    name: 'PageTitle'
})

type PageTitleProps = {
    title: string,
    children?: React.ReactNode, 
}

const PageTitle:React.SFC<PageTitleProps> = ({ title, children }) => {
    const { main } = useStyles({})
    return (
        <Grid container direction="row" justify="space-between" alignItems="center" className={main}>
            <Grid item>
                <Typography component="h1" variant="h3">
                    {title}
                </Typography>
            </Grid>
            <Grid item>{children}</Grid>
        </Grid>
    )
}

export default PageTitle