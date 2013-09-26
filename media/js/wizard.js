$(document).ready(function() {
	// tabs
	$('#step1 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#step2 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#step3 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
})