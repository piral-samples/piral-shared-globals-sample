import { renderInstance } from 'piral';
import { setGlobalValue } from 'lib';
import { layout, errors } from './layout';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

// can just access / change the value at any time; everywhere (e.g., on token refresh)
setGlobalValue('foo', 'bar');

const instance = renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});

// this way is already included; you can just share something via the setData API
instance.root.setData('bar', 'Shared data item');
