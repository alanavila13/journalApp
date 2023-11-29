import { useMemo } from "react";
import { useDispatch } from 'react-redux'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import {setActiveNote} from '../../store/journal'

export const SidebarItem = ({ title, body, id, date, imgUrls = [] }) => {

  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({title, body, id, date, imgUrls}))

  }

  const newTitle =  useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title
  }, [title])
  return (
    <ListItem onClick={onClickNote}  disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
