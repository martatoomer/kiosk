import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Nav extends React.Component {

    state = {
        open: false
    }

    links = [
        {title: "Events", children: [
            {title: "Productions", link: "/productions"},
            {title: "Special Events", link: "/productions"},
            {title: "Performances", link: "/productions"},
            {title: "Packages", link: "/productions"}
        ]},
        {title: "Contributions", children: [
            {title: "Funds/Contribution", link: "/productions"},
            {title: "Membership Levels", link: "/productions"}
        ]}
    ];

    toggleDrawer = () => () => {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer()}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.open} onClose={this.toggleDrawer()}>
                    <div
                        tabIndex={0}
                        role="button"
                    >
                        <List>
                            <ListItem button key="Dashboard">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                        </List>

                        {this.links.map((link, index) => (
                            <ExpansionPanel style={{margin: 0}}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>{link.title}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{padding: 0}}>
                                    <List style={{width: "100%"}}>
                                        {link.children.map((child, index) => (
                                            <ListItem button key={child.title}>
                                            <ListItemIcon><InboxIcon /></ListItemIcon>
                                            <ListItemText primary={child.title} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Nav);

