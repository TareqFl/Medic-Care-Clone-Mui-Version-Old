import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { HamburgerCollapse } from 'react-animated-burgers'
import { Link, Stack, Typography } from '@mui/material';

export default function TemporaryDrawer() {

    //'Home', 'About', 'Timeline', 'Testimonials', 'Booking', 'Contact'
    {/* <HamburgerCollapse onClick={() => setActive(!active)} isActive={active} buttonWidth={40} /> */ }

    const [state, setState] = React.useState({
        top: false,

    });

    const [active, setActive] = React.useState(false)

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        setActive(!active)
    };


    const centerText = () => (<>

        <Stack display="flex" directio="column" justifyContent="center" alignItems="center" spacing={-1}>
            <Link href='/dashboard' sx={{ textDecoration: "none" }}>
                <Typography variant="h6" sx={{
                    fontWeight: "bold", fontSize: "1.5rem", fontFamily: "sans-serif", textAlign: "center", color: "#247cff", padding: 0, margin: 0
                }}>
                    Medic Care
                </Typography>
            </Link>

            <Link href="/" sx={{ textDecoration: "none" }}>
                <Typography paragraph sx={{
                    color: "gray", textAlign: "center", fontWeight: "bold", fontFamily: "sans-serif", fontSize: "0.75rem", padding: 0, margin: 0
                }}>
                    Health Specialist
                </Typography>
            </Link>
        </Stack>

    </>)

    const ListText = (text) => {
        const stylez = {
            color: "gray", fontSize: "1rem",
            fontFamily: "roboto", fontWeight: "500",
            textTransform: "none", ":hover": { color: "black", backgroundColor: "white" }
        }
        return (<>
            <Button variant='Text' sx={{ ...stylez }}>
                {text}
            </Button>
        </>)
    }


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {centerText()}
                <ListItem disablePadding>
                    {ListText("Home")}
                </ListItem>

                <ListItem disablePadding>
                    {ListText("About")}
                </ListItem>

                <ListItem disablePadding>
                    {ListText("Timeline")}
                </ListItem>

                <ListItem disablePadding>
                    {ListText("Testimonials")}
                </ListItem>

                <ListItem disablePadding>
                    {ListText("Bookings")}
                </ListItem>

                <ListItem disablePadding>
                    {ListText("Contacts")}
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <HamburgerCollapse onClick={toggleDrawer(anchor, true)} isActive={active} buttonWidth={40} />

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Box>
    );
}
