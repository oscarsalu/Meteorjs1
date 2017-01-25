Template.layout.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});


Template.add_project.events({
	'submit .add_project_form': function(event){
		// body...
		var name = event.target.name.value;
		var projectDate = event.target.projectDate.value;
		var client = event.target.client.value;
		var type = event.target.type.value;
		var description = event.target.description.value;
		

		var file = $('#projectImage').get(0).files[0];

		if (file) {
			fsFile = new FS.File(file);
			ProjectImages.insert(fsFile, function(err, result){
				if (!err) {
					var projectImage = '/cfs/files/ProjectImages/' +result._id;

					Projects.insert({
						name: name,
						client: client,
						description: description,
						type: type,
						projectDate: projectDate,
						projectImage: projectImage
					});
				}
			});
		}else{
					Projects.insert({
						name:name,
						client:client,
						description:description,
						type:type,
						projectDate:projectDate
					});
				}
				FlashMessages.sendSuccess("Project Added");

				Router.go('/admin/projects');

				return false;
	}
});
Template.edit_project.events({
	'submit .edit_project_form': function(event) {
		// body...
		var name = event.target.name.value;
		var client = event.target.client.value;
		var type = event.target.type.value;
		var description = event.target.description.value;
		var projectDate = event.target.projectDate.value;

		var file = $('#projectImage').get(0).files[0];

		if (file) {
			fsFile = new FS.File(file);
			projectImages.insert(fsFile , function(err, result){
				if (!err) {
					var projectImage = '/cfs/files/ProjectImages/' +result._id;
					//update

					Projects.update({
						_id:this._id
					},{
						$set:{
							name:name,
							client:client,
							description:description,
							type:type,
							projectDate:projectDate,
							projectImage:projectImage
						}
					});
				}
			});
		}else{
					Projects.update({
						_id:this._id
					},{
						$set:{
								name:name,
								client:client,
								description:description,
								type:type,
								projectDate:projectDate
							}
					});
				}
				FlashMessages.sendSuccess("Project Updated");

				Router.go('/admin/projects');

				return false;
	}
});

Template.list_project.events({
	'click .delete_project':function(event){
		if (confirm("Are you Sure?")) {
			Projects.remove(this._id);
			FlashMessages.sendSuccess(+this.name+ " is deleted");

			return false;
		}
	}
});
