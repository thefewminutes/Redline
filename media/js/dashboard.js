$.expander.defaults.slicePoint = 60; // expander default value

$(document).ready(function() {
	
	// tabs
	$('#inprogress a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#pending a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#closed a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
	// Expander https://github.com/kswedberg/jquery-expander
	$('tbody.expandable tr td').expander({
		slicePoint: 80,
		expandPrefix: ' ',
		expandText: '[...]',
		collapseTimer: 0,
		userCollapseText: '[^]',
		preserveWords: true
	})
	
	// tablesorter plugins.jquery.com/tablesorter
	$("#tbl-inProgress").tablesorter();
});