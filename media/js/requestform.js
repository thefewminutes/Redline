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
	
	// hide/show reason field
	$( "#cb_rejected" ).change(function() {
		if(this.checked) {
			$("#reason_window").slideDown();
			return;
		}
		$("#reason_window").slideUp();
	});
	
	// remove warning class on focus
	$("#reason").focus(function(){
  		$("#reason_window > div").removeClass("has-warning");
	});
	
	//upload images section
	//loop
var output="";
for(var i=0; i<= uploadedfiles.files.length; i++) {
	for (key in uploadedfiles.files[i]) {
         if (uploadedfiles.files[i].hasOwnProperty(key)) {
			output += '<li class="list-group-item"><a href="' + uploadedfiles.files[i][key] + '" target="_blank">' + key + '</a><button type="button" class="close" aria-hidden="true">&times;</button></li>';
         } // has own property
	} // for each array element
} // for each object
var update = document.getElementById('uploadfiles');
update.innerHTML = output;
	
});