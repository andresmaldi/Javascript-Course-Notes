// Constructors
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// An example of constructors would be:

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return (
            `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();