$(function() {
	// datepicker for revision date
	$("#RevDate").datepicker();
			
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
});