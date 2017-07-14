Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()
		};
		Posts.insert(post);
		//console.log(post._id);
		Router.go('postPage', post);
	}
});