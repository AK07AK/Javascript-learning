// Factory functions

function createCircle(radius)
{
    const circle = {
        radius,
        draw(){
            console.log('draw');
        }
    };
    return circle;
}
let obj = createCircle(10);
obj.draw();
console.log(obj.radius);