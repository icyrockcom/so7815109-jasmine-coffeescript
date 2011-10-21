(function() {
  window.Toolbar = (function() {
    function Toolbar() {}
    Toolbar.prototype.rectangle = function() {
      console.log('rectangle');
      $('#toolbar button').removeClass("selected");
      return $('#rectangle').addClass("selected");
    };
    return Toolbar;
  })();
}).call(this);
