import { useEffect, useRef } from "react";

// componentWillMount only runs once before the initial rendering
export function componentWillMount(callback) {
  const render = useRef(false);
  if (!render.current) {
    callback();
    render.current = true;
  }
}

// componentWillUpdate runs on every update after first rendering before each endering
export function componentWillUpdate(callback) {
  const firstRender = useRef(true);
  if (!firstRender.current) {
    callback();
  } else {
    firstRender.current = false;
  }
}

// componentDidMount runs once after the intial rendering
export function componentDidMount(callback) {
  const intialRender = useRef(true);
  useEffect(() => {
    if (intialRender.current) {
      intialRender.current = false;
      callback();
    }
  });
}

// componentDidUpdate runs after every update after intial rendering
export function componentDidUpdate(callback) {
  const intialRender = useRef(true);
  useEffect(() => {
    if (!intialRender.current) {
      callback();
    } else {
      intialRender.current = false;
    }
  });
}

// componentWillRecieveProps runs on every update if the given deps change
export function componentWillReceiveProps(callback, deps) {
  useEffect(callback, deps);
}
