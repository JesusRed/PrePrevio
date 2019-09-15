$(document).ready(function () {
    M.updateTextFields();
    M.AutoInit();
});

$("#exam").click(function () {
    $("#conti2").hide(100);
    $("#conti1").show(100);
});

$("#exer").click(function () {
    $("#conti1").hide(100);
    $("#conti2").show(100);
});
