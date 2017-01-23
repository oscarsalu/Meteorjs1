Template.layout.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});
Template.add_project.events({
	'submit .add_project_form': function(event) {
		// body...
		var name = event.target.name.value;
		var client = event.target.client.value;
		var type = event.target.type.value;
		var description = event.target.type.value;
		var projectDate = event.target.projectDate.value;

		var file = $('#projectImage').get(0).files[0];

		if (file) {
			fsFile = new FS.File(file);
			projectImages.insert(fsFile , function(err, result){
				if (!err) {
					var projectImage = '/cfs/files/projectImages/' +result._id;

					Projects.insert({
						name:name,
						client:client,
						description:description,
						type:type,
						projectDate:projectDate,
						projectImages:projectImage
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
	}
});