import $ from "jquery";
import "./app4.css";


const $circle = $('#app4 .circle')

$circle.on('mouseenter', () => {  //当鼠标移入时
    $circle.addClass('active')
}).on('mouseleave', () => {   //移出时
    $circle.removeClass('active')
})