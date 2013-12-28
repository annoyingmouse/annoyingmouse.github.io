App.Views.Contact = Backbone.View.extend({ 
	template: _.template($('#template-contact').html()),
	$container: null, 
	events: {
		'click .delete': 'remove',
		'click .edit': 'edit'
	},
	initialize: function(options) {
		_.bindAll(this, 'render', 'insert', 'remove', 'edit'); 
		this.$container = options.$container;
		this.listenTo(this.model, 'change', this.render); 
		this.insert(); 
	}, 
	render: function() {
		this.$el.html(this.template(this.model.attributes)); 
		return this; 
	},
	insert: function() {
		this.$container.append(this.$el);
	},
	remove: function() { 
		App.Browser.navigate('contacts/remove/' + this.model.cid);
		this.model.destroy(); 
	},
	edit: function(){
		$('.controls form').show();
		// var $form = $('.controls form');
		// $(".firstName").val(this.model.get('firstName'));
		// $(".lastName").val(var lN = this.model.get('lastName'));
		// $(".phoneNumber").val(var pN = this.model.get('phoneNumber'));
		// $(".email").val(var eM = this.model.get('email'));
		// $form.show().find('input.firstName').focus(); 
	}
});