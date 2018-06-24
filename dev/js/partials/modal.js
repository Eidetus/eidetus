
var newsletterModal = new tingle.modal({
    onClose: function() {},
    onOpen: function() {},
    beforeOpen: function() {},
    beforeClose: function() { return true; },
    cssClass: []
});
var trailerModal = new tingle.modal({
    onClose: function() {},
    onOpen: function() {},
    beforeOpen: function() {},
    beforeClose: function() { return true; },
    cssClass: ['tingle-modal--no-padding']
});

var btn1 = document.querySelector('[modal-ID="newsletter-modal"]');
var btn2 = document.querySelector('[modal-ID="trailer-modal"]');

// Event listener that opens modal with associated content based on data attributes
btn1.addEventListener('click', function() {
    newsletterModal.open();
    var content = document.querySelector('[modal-content="newsletter-modal"]');
    newsletterModal.setContent(content ? content.innerHTML : '<h2>Unable to load content</h2>');
});/*
btn2.addEventListener('click', function() {
    trailerModal.open();
    var content = document.querySelector('[modal-content="trailer-modal"]');
    trailerModal.setContent(content ? content.innerHTML : '<h2>Unable to load content</h2>');
});*/
