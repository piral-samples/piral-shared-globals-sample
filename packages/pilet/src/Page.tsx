import * as React from "react";
import { getPiletValue } from "./value";

export default () => {
  // note we use these functions here in a component, but they are not hooks and could be used *anywhere*
  const foo = getPiletValue("foo");
  const bar = getPiletValue("bar");

  return (
    <>
      <h1>Example</h1>
      <p>This is some example content.</p>
      <p>The obtained value from "foo" is "{foo}".</p>
      <p>The obtained value from "bar" is "{bar}".</p>
    </>
  );
};
