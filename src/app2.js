import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", e => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()  //找兄弟元素
        .removeClass("selected");
    const index = $li.index();
    $tabContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");  //js不要直接操作css，用此方法添加类目
});

$tabBar.children().eq(0).trigger('click')  //trigger触发，默认点击第一个
