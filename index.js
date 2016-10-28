module.exports = function () {
    console.log(1);

    setTimeout(function () {
        console.log(2);
    }, 100);

    console.log(3);
};
