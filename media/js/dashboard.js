$.expander.defaults.slicePoint = 60; // expander default value

$(document).ready(function() {
	
	// Expander https://github.com/kswedberg/jquery-expander
	$('tbody.expandable tr td').expander({
		slicePoint: 60,
		expandPrefix: ' ',
		expandText: '[...]',
		collapseTimer: 0,
		userCollapseText: '[^]',
		preserveWords: true
	})
	
	// initialize tablesorter (plugins.jquery.com/tablesorter)
	$("#tbl-inProgress").tablesorter({ 
		theme: 'jui',
		headerTemplate: '{content} {icon}',
		widgets: ['zebra','columns','uitheme'],
		sortList: [[6,1]],
		headers: {7:{sorter:false}} // disable sorting on delete column
	})
		$("#tbl-Pending").tablesorter({ 
		theme: 'jui',
		headerTemplate: '{content} {icon}',
		widgets: ['zebra','columns','uitheme'],
		sortList: [[5,1]]
	})
		$("#tbl-Closed").tablesorter({ 
		theme: 'jui',
		headerTemplate: '{content} {icon}',
		widgets: ['zebra','columns','uitheme'],
		sortList: [[5,1]]
	})
	
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
	
		// logout tooltip
	$('#logout').tooltip();
		
});