import React from "react";
import {
  MenuItem,
  Popper,
  MenuList,
  ClickAwayListener,
  Grow,
  Paper,
} from "@mui/material";

import { Link } from "react-router-dom";
import { routePath } from "../../constants/route";

function HeaderMenu({ open,  handleToggle,anchorRef}) {
  const openMenu = Boolean(open);
  return (
    <div>
      <Popper
        open={openMenu}
        anchorEl={anchorRef.current}
            placement="bottom-start"
            transition
            disablePortal
            style={{ zIndex: 9999 }}

      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "left top" }}>
            <Paper>
            <ClickAwayListener onClickAway={handleToggle}>
              <MenuList>
                <Link to={`${routePath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit'}}><MenuItem  onClick={handleToggle}>Popular</MenuItem></Link>
                <Link to={`${routePath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit'}} ><MenuItem  onClick={handleToggle}>Top Rated</MenuItem></Link>
                <Link to={`${routePath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit'}}><MenuItem  onClick={handleToggle}>Upcoming</MenuItem></Link>
              </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default HeaderMenu;
