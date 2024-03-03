import React from "react";
import { IconButton, SvgIcon } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Soc = () =>{
    return(
        <div className="soc">
            <IconButton aria-label="facebook"
                color="primary"
            >
                <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="twitter"
                color="primary"
            >
                <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="instagram"
                color="primary"
            >
                <InstagramIcon fontSize="large" />
            </IconButton>
        </div>
    );
}
export default Soc;