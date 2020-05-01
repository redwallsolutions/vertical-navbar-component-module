import React, { useState } from "react";
import { render } from "react-dom";
import VerticalNavbarComponent, { useVerticalNavbarController } from "./lib";
import { createGlobalStyle } from "styled-components";
import {
  MdAccessTime,
  MdAirlineSeatFlat,
  MdWbSunny,
  MdFlare,
  MdLens,
  MdAccountBalance,
  MdAdjust,
  MdAcUnit,
  MdAllInclusive,
  MdAlbum,
} from "react-icons/md";
import { IThemeMode } from "@redwallsolutions/common-interfaces-ts";

const Reset = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
	box-sizing: border-box;
  }
`;

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <div style={{ height: "100vh" }}>
      <Reset />
      <VerticalNavbarComponent
        items={[
          {
            icon: <MdFlare size="1.5em" />,
            name: "Light",
            handler: () => setThemeMode("light"),
          },
          {
            icon: <MdLens size="1.5em" />,
            name: "Dark",
            handler: () => setThemeMode("dark"),
          },
          {
            icon: <MdAccessTime size="1.5em" />,
            name: "Time",
          },
          {
            icon: <MdAirlineSeatFlat size="1.5em" />,
            name: "Seat",
          },
          {
            icon: <MdWbSunny size="1.5em" />,
            name: "Sunny",
          },
          {
            icon: <MdAccountBalance size="1.5em" />,
            name: "Balance",
          },
          {
            icon: <MdAdjust size="1.5em" />,
            name: "Adjust",
          },
          {
            icon: <MdAcUnit size="1.5em" />,
            name: "AcUnit",
          },
          {
            icon: <MdAllInclusive size="1.5em" />,
            name: "All Inclusive",
          },
          {
            icon: <MdAlbum size="1.5em" />,
            name: "Album",
          },
        ]}
        appearance="primary"
        theme={{
          mode: themeMode as IThemeMode,
          primaryContrastDark: "#2b324c",
          primaryDark: "rgb(238, 238, 238)",
          secondaryDark: "rgb(106, 140, 147)",
          secondaryContrastDark: "rgb(238, 238, 238)",
        }}
      >
        <Content />
      </VerticalNavbarComponent>
    </div>
  );
};
let progress = 0;
const Content = () => {
  const controller = useVerticalNavbarController();
  controller.setActiveItem(3);
  return (
    <div style={{ height: "5000px" }}>
      Hello World!
      <button onClick={()=>controller.hideNavbar()}>Hide</button>
      <button onClick={()=>controller.showNavbar()}>Show</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
