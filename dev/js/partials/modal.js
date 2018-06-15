
// Display modal container associated to clicked button
$(document).on('click', '[reveal-modal]', function(e) {
	e.preventDefault();

	// Get reveal modal data attribute value
	var modalID = $(this).attr('reveal-modal');

	// Find modal container with matching ID
	var modal = $(document).find('#' + modalID);

	// Display modal container
	modal.addClass('modal--visible');

	// Prevent undesired scrolling in body
	$('body').css({'overflow': 'hidden'});
	
});

$(document).on('click', '[close-modal]', function(e) {
	// Ensure the clicked element is able to close modal (avoids propagation)
	if (!e.originalEvent.srcElement.hasAttribute('close-modal')) { return; }

	// Find modal container with matching ID
	var modal = $(document).find('.modal--visible').removeClass('modal--visible');

	// Renable scrolling in body
	$('body').css({'overflow': 'auto'});
	
});
