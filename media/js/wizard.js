$(document).ready(function() {
	
	// date builder for grabbing current date
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
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
	
	// turn off request tab on init
	if($('#requestTab').attr('data-toggle')) {
		$('#requestTab').removeAttr("data-toggle");
		$('#requestTab').css("cursor", "not-allowed");
	}
	
	// tabs
	$('#inputPlan a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$('#inputRevisionDate a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	// datepicker
	$("#inputRevisionDate").datepicker();
	
	// instantiate validator
	$("#planSearch").validationEngine();
	
	// show search results pane
	$("#planSearch").submit(function(event) {
		if($("#inputPlan").val()){ // if there is a value in the plan input
			$("#search_results").show( "slow" );
			return false;
		}
	});
	
	// link to request form tab
	$('.gotoForm').click(function() {
		$('#wizardTabs a[href="#requestform"]').tab("show");
		$('#requestTab').attr("data-toggle", "tab");
		$('#requestTab').css("cursor", "auto");
		// grab json file and populate file list
		$.getJSON("uploadfiles2.json", function(data) {
			var items = [];
			$.each(data, function(key, val) {
				items.push('<li class="list-group-item"><a href="#imageViewer" data-toggle="modal">' + key + '</a><button type="button" class="close" aria-hidden="true">&times;</button></li>');
			});
			$( "<ul/>", {"class": "list-group",html: items.join( "" )}).appendTo( "#uploadfiles" ); // write list of upload files
		});
	});
	
	// link to search tab
	$('.gotoSearch').click(function() {
		$('#wizardTabs a[href="#search"]').tab("show");
		$('#requestTab').removeAttr("data-toggle");
		$('#requestTab').css("cursor", "not-allowed");
		$( "#search_results" ).hide();
	});
	
	// logout tooltip
	$('#logout').tooltip();
	
	// set inputRevisionDate to cursor:auto
	$('#inputRevisionDate').css("cursor", "auto");


});