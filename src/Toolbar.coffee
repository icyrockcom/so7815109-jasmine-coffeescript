class window.Toolbar
  rectangle: ->
    console.log 'rectangle'
    $('#toolbar button').removeClass("selected")
    $('#rectangle').addClass("selected")
