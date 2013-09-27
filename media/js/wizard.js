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
		$( "#search_results" ).show( "slow" );
		return false;
	});
	
	// link to request form tab
	$('.gotoForm').click(function() {
		$('#wizardTabs a[href="#requestform"]').tab('show');
		$('#requestTab').attr("data-toggle", "tab");
		$('#requestTab').css("cursor", "auto");
	});

})