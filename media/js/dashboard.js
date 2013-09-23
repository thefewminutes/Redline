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
	$("#tbl-inProgress").tablesorter({ 
		theme: 'jui',
		headerTemplate: '{content} {icon}',
		widgets: ['zebra','columns','uitheme'],
		sortList: [[5,1]]
	})
	
	// tablesorter pager
	var pagerOptions = {
		container: $(".pager"),
		ajaxUrl: null, // use this url format "http:/mydatabase.com?page={page}&size={size}&{sortList:col}"
		customAjaxUrl: function(table, url) { return url; },
		ajaxProcessing: function(ajax){
			if (ajax && ajax.hasOwnProperty('data')) {
				return [ ajax.total_rows, ajax.data ];
			}
		},
		output: '{startRow} to {endRow} ({totalRows})',
		updateArrows: true,
		page: 0,
		size: 10,
		fixedHeight: true,
		removeRows: false,
		
		cssNext: '.next',
		cssPrev: '.prev',
		cssFirst: '.first',
		cssLast: '.last',
		cssGoto: '.gotoPage',
		
		cssPageDisplay: '.pageDisplay',
		cssPageSize: '.pagesize',
		cssDisabled: 'disabled',
		cssErrorRow: 'tablesorter-errorRow'
	};
		
});