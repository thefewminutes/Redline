$(function() {
			
	// date builder for grabbing current date
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	
	var newDate = new Date();
	newDate.setDate(newDate.getDate() + 1);    
	$('#submitDate').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	
	// pretty file upload
	$('input[id=lefile]').change(function() {
		$('#photoCover').val($(this).val());
	});
	
	//popovers
	$('#approvalPopover').popover({trigger: 'hover', placement: 'auto right'});
	$('#deptApprovalPopover').popover({trigger: 'hover', placement: 'auto right'});
	
	// form validation jquery.validationEngine plugin
	$("#redlineForm").validationEngine();
	//triggers when a form is validated with the result
	$("#redlineForm").bind("jqv.form.result", function(event, errorFound) {
		if(errorFound)
		alert("there is a problem with your form");
	});
	
});