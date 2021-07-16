import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const RedirectElement = (props) => {
    const { redirect } = props;
    if (!redirect) return <p>Can not find redirect, sorry</p>;
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardHeader>
                                <div>
                                    <Typography
                                        component="p"
                                        color="textPrimary"
                                    >
                                        {JSON.stringify(redirect)}
                                    </Typography>
                                </div>
                            </CardHeader>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default RedirectElement;
