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