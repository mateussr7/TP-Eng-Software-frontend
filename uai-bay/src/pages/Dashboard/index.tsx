import { AppBar, Divider, Drawer, Grid, IconButton, List, Toolbar, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { FC, useState } from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { ItemsList } from '../../components/MenuItems'
import { Route, Switch } from 'react-router-dom'
import User from '../../components/User'

const Dashboard: FC = () => {

    const classes = useStyles()
    const [open, setOpen] = useState<boolean>(false)

    function handleOpenChange(){
        setOpen(!open)
    }

    return <div className={classes.root}>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    onClick={handleOpenChange}
                >
                <MenuIcon />
                </IconButton>
                <Typography className={classes.title}>Uai-Bay</Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            open={open}
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
        >
            <div>
                <IconButton onClick={handleOpenChange}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List><ItemsList /></List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer}>
                <Container className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12}>
                            <Switch>
                                <Route path="/user" component={User}/>
                            </Switch>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </main>
    </div>
}

export default Dashboard