var score = 100;
score = 33;
// score can accept both number and string
score = "34";
console.log(score);
var v1 = {
    username: "tito",
    id: 123
};
v1 = { username: "hello", id: 321 };
console.log(v1, typeof v1);
function getDbId(id) {
    console.log("DB id is ".concat(id), typeof id);
}
getDbId(123456);
getDbId("8904843");
var data3 = [1, "2", 3, "Hello"];
console.log(data3);
