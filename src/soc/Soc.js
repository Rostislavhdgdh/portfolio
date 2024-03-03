import React from "react";
import { IconButton, SvgIcon } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';


const Soc = () =>{
    return(
        <div className="soc">
            <IconButton aria-label="facebook"
                color="primary"
            >
                <GitHubIcon fontSize="large" htmlColor="#000000" />
            </IconButton>
            <IconButton aria-label="twitter"
                color="primary"
            >
                <TwitterIcon fontSize="large" htmlColor="#000000" />
            </IconButton>
            <IconButton aria-label="instagram"
                color="primary"
            >
                <InstagramIcon fontSize="large" htmlColor="#000000" />
            </IconButton>
               
        </div>
    );
}
export default Soc;