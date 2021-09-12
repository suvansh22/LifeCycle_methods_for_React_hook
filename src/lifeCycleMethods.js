import { useEffect, useRef } from "react";

// componentWillMount only runs once before the initial rendering
export function useComponentWillMount(callback) {
  const render = useRef(false);
  if (!render.current) {
    callback();
    render.current = true;
  }
}

// componentWillUpdate runs on every update after first rendering before each endering
export function useComponentWillUpdate(callback) {
  const firstRender = useRef(true);
  if (!firstRender.current) {
    callback();
  } else {
    firstRender.current = false;
  }
}

// componentDidMount runs once after the intial rendering
export function useComponentDidMount(callback) {
  const intialRender = useRef(true);
  useEffect(() => {
    if (intialRender.current) {
      intialRender.current = false;
      callback();
    }
  });
}

// componentDidUpdate runs after every update after intial rendering
export function useComponentDidUpdate(callback) {
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
export function useComponentWillReceiveProps(callback, deps) {
  useEffect(() => {
    callback();
  }, [deps]);
}
