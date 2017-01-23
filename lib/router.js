Router.configure({
	layoutTemplate: 'layout'
});

//mapping
Router.map(function(){
	this.route('home',{
		path: '/',
		template: 'home'
	});

	this.route('about');
	this.route('work');
	this.route('blog',{
		path: '/blog',
		template: 'blog'
	});
	this.route('contact');

	this.route('list_post', {
		path:'/admin/posts',
		template:'list_post',
		data: function(){
			templateData = {
				posts: Posts.find()
			};
			return templateData;
		},
		onBeforeAction: function(){
			if (!Meteor.userId() || Meteor.userId()== null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('add_post', {
		path:'/admin/posts/add',
		template:'add_post',
		onBeforeAction: function(){
			if (!Meteor.userId() || Meteor.userId()== null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('edit_post', {
		path:'/admin/posts/:_id/edit',
		template:'edit_post',
		data: function(){
			var currentPost = this.params._id;
			return Posts.findOne({_id: currentPost});
		},
		onBeforeAction: function(){
			if (!Meteor.userId() || Meteor.userId()== null) {
				Router.go('/');
			}
			this.next();
		}
	});

	this.route('list_project', {
		path:'/admin/projects',
		template:'list_project',
		onBeforeAction: function(){
			if (!Meteor.userId() || Meteor.userId()== null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('add_project', {
		path:'/admin/projects/add',
		template:'add_project',
		onBeforeAction: function(){
			if (!Meteor.userId() || Meteor.userId()== null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('edit_project', {
		path:'/admin/projects/:_id/edit',
		template:'edit_project',
		onBeforeAction: function(){
			if (!Meteor.userId() || Meteor.userId()== null) {
				Router.go('/');
			}
			this.next();
		}
	});
	this.route('login', {
		path:'/admin',
		template:'login'
	});
});