
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.helper = require('./helper');


var token = document.head.querySelector('meta[name="csrf-token"]');
layui.$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': token.content
    }
});