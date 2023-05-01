const { Triangle, Square, Circle } = require('./shapes')

test('test triangle should render triangle svg', () => {
    const triangle = new Triangle ()
    triangle.setColor("blue")
    const svg = triangle.render();
    expect(svg).toBe(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
});

test('test circle should render circle svg', () => {
    const circle = new Circle()
    circle.setColor("blue")
    const svg = circle.render();
    expect(svg).toBe(`<circle cx="150" cy="100" r="80"  fill="blue" />`);
});

test('test square should render square svg', () => {
    const square = new Square()
    square.setColor("blue")
    const svg = square.render();
    expect(svg).toBe(`<rect x="90" y="40" width="120" height="120" fill="blue" />`);
});