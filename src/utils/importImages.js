function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const distortion3Images = importAll(require.context('../assets/distortion3', false, /\.(png|jpe?g|svg)$/));

export default distortion3Images;
