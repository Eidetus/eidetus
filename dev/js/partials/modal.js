
var newsletterModal = new tingle.modal({
    onClose: function() {},
    onOpen: function() {},
    beforeOpen: function() {},
    beforeClose: function() { return true; },
    cssClass: []
});

var btn = document.querySelector('[modal-ID="newsletter-modal"]');

// Event listener that opens modal with associated content based on data attributes
btn.addEventListener('click', function() {
    newsletterModal.open();
    var content = document.querySelector('[modal-content="newsletter-modal"]');
    newsletterModal.setContent(content ? content.innerHTML : '<h2>Unable to load content</h2>');
});
