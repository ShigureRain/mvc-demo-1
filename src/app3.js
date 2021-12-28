import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

$square.on('click', () => {
    $square.toggleClass('active')  //toggleClass，没有active的话添加，有的话删除
})