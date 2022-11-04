import * as React from "react";
import { Link } from "react-router-dom";
import { PiletApi } from "app";
import { getGlobalValue } from "lib";
import { setPiletValue } from "./value";

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  // this function can be used anywhere
  // just sets / manipulates the value
  setPiletValue("foo", "qxz");

  // can also be a callback to use the "app" anywhere
  setPiletValue("bar", () => app.getData("bar"));

  app.showNotification(
    `Hello from Piral! Shared value is "${getGlobalValue("foo")}"`,
    {
      autoClose: 2000,
    }
  );

  app.registerMenu(() => <Link to="/example">Example</Link>);

  app.registerPage("/example", Page);

  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
