function buildWindow() {


	let win =  new Ext.Window({
		id       : 'myWindow',
		title    : 'My first Ext JS Window',
		width    : 300,
		height   : 150,
		layout   : 'fit',
		autoLoad : {
			url     : 'src/sayHi.html',
			scripts : true
		}
	});
	win.show();
}

Ext.onReady(buildWindow);

