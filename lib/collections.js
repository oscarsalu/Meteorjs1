Posts = new Mongo.Collection('post');

Posts.attachSchema(new SimpleSchema ({
	title:{
		type: String,
		max: 100
	},
	body:{
		type: String,
		max:500
	},
	userId:{
		type:String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt:{
		type:Date,
		autoValue: function(){ return new Date() }
	}
}));

Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema ({
	name:{
		type: String,
		max: 100
	},
	Description:{
		type: String,
		max:500
	},
	client:{
		type: String,
		max:100
	},
	type:{
		type:String,
		max:100
	},
	projectDate:{
		type:String,
		max:100,
		optional: true
	},
	userId:{
		type:String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt:{
		type:Date,
		autoValue: function(){ return new Date() }
	},
	projectImage:{
		type:String,
		max:100,
		optional:true
	},
	projectImage2:{
		type:String,
		max:100,
		optional:true
	},
	projectImage3:{
		type:String,
		max:100,
		optional:true
	},
	projectImage4:{
		type:String,
		max:100,
		optional:true
	}
}));

projectImages = new FS.Collection('projectImages', {
	store: [new FS.Store.GridFS('projectImages')]
});