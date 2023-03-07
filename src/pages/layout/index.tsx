import DrawerAppBar from "@/libs/material-ui/components/header";
import React from "react";


export default function Layout(props) {
  return (
    <div >
      <div>
      <DrawerAppBar/>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
