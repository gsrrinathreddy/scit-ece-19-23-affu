import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SREE CHAITANYA" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPcHLQr7yXRS3xTzz-fDmcbo_3WbimLnvW5-w8r5IJQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="SREE CHAITANYA INSTITUTE OF TECHNOLOGY AND SCIENCES,THIMMAPUR,KARIMNAGAR"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                67% CGPA
              </Typography>
              {" — ELECTRONICS & COMMUNICATION ENGINEERING, "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ALPHORES" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="ALPHORES JUNIOR COLLEGE(S6),VAVILALAPALLY,KARIMNAGAR"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — TS BOARD OF INTERMEDIATE "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="GREEN LAND" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="GREEN LAND HIGH SCHOOL,KHALEELPURA,KARIMNAGAR"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                82% CGPA
              </Typography>
              {' — SECONDARY SCHOOLS EDUCATION'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}