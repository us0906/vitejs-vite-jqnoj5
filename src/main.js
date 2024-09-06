// src/main.js

window.onload = function() {
    Ext.onReady(function() {
        const panel = new Ext.Panel({
            renderTo: 'ext-panel',
            width: 400,
            height: 300,
            title: 'Hello ExtJS',
            html: '<p>Welcome to ExtJS with Vite!</p>'
        });
    });
};