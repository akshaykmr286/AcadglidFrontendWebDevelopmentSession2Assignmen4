var Parent = (function () {
    function Parent() {
        this.children = [];
    }
    return Parent;
}());
var personData = { name: "Sachin" };
var robotData = { name: "Siri", year: 2010 };
var parents = new Parent();
var robots = new Parent();
parents.children.push(personData);
robots.children.push(robotData);
console.log(parents.children);
console.log(robots.children);
