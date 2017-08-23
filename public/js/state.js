import {parse, stringify} from 'querystring';

export function getState() {
  // substring(1) to drop the '?'
  return parse(location.search.substring(1));
}

export function setState(state) {
  const encoded = stringify(state);
  try {
    history.pushState(state, state.name || "", '?' + encoded)
  } catch(ex) {
    location.search = encoded;
  }
}

export function reset() {
  setState({});
}

window.onpopstate = function(/*event*/) {
  location.reload();
};
