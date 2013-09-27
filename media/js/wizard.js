$(document).ready(function() {
	
	// turn off request tab on init
	if($('#requestTab').attr('data-toggle')) {
		$('#requestTab').removeAttr("data-toggle");
		$('#requestTab').css("cursor", "not-allowed");
	}
	
	// tabs
	$('#inputPlan a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#inputRevisionDate a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
	// datepicker
	$("#inputRevisionDate").datepicker();
	
	// instantiate validator
	$("#planSearch").validationEngine();
	
	// show search results
	$("#planSearch").submit(function(event) {
		if($("#inputPlan").val()){ // if there is a plan value in the input
			$("#search_results").show( "slow" );
			return false;
		}
	});
	
	// link to request form tab
	$('.gotoForm').click(function() {
		$('#wizardTabs a[href="#requestform"]').tab("show");
		$('#requestTab').attr("data-toggle", "tab");
		$('#requestTab').css("cursor", "auto");
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


})