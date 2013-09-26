$(document).ready(function() {
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

})