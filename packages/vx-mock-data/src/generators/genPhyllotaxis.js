const theta = Math.PI * (3 - Math.sqrt(5));

export default function genPhyllotaxis({ radius, width, height }) {
  return function (i) {
    const r = radius * Math.sqrt(i);
    const a = theta * i;
    return {
      x: width / 2 + r * Math.cos(a),
      y: height / 2 + r * Math.sin(a)
    };
  };
}
