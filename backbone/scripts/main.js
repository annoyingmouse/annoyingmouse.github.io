var App = { 
	Models: {}, 
	Collections: {},
	Views: {},
	Contacts: null,
	Directory: null, 
	Routers: {}, 
	Browser: null
};

$(function() {
	window.tom = new App.Models.Contact({ 
		firstName: 'Thomas', 
		lastName: 'Hunter', 
		phoneNumber: '9895135499', 
		email: 'me@thomashunter.name' 
	}); 
	App.Contacts = new App.Collections.Contact(); 
	App.Contacts.add(window.tom); 
	App.Contacts.add({ 
		firstName: 'Rupert', 
		lastName: 'Styx', 
		phoneNumber: '9895551212', 
		email: 'rupertstyx@example.com' 
	}); 
	var contactListing = ''; 
	App.Directory = new App.Views.Directory({
		el: $("#display")
	});
	App.Directory.render();
	App.Contacts.on('add remove', function(){
		App.Directory.render();
	});
	App.Browser = new App.Routers.Contact; 
	Backbone.history.start();
});