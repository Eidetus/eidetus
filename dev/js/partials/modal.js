
document.querySelectorAll('[modal-ID]').forEach(function(button) {
    var modalID = button.getAttribute('modal-ID');

    // Remove padding from modal for trailer/video content
    var modalClass = (modalID == "trailer-modal") ? "tingle-modal--video" : "tingle-modal--default";

    // Event listener that opens modal with associated content based on data attributes
    button.addEventListener('click', function() {
        var modal = new tingle.modal({
            onClose: function() {
                // Ensure trailer modal is removed from DOM
                if (this.classList.contains("tingle-modal--video")) {
                    modalElement = document.querySelector('.tingle-modal--video');

                    if (modalElement) {
                        modalElement.parentNode.removeChild(modalElement);
                    }
                }                
            },
            onOpen: function() {},
            beforeOpen: function() {},
            beforeClose: function() { return true; },
            cssClass: [modalClass]
        });

        modal.open();
        var content = document.querySelector('[modal-content="' + modalID + '"]');
        modal.setContent(content ?  content.innerHTML : '<h2 class="text-center text-upper">Unable to load content</h2>');
    });
});
