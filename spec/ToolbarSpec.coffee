describe 'Toolbar', ->
  beforeEach ->
    jasmine.getFixtures().fixturesPath = "fixtures"
    loadFixtures("canvas_fixture.html")

  describe 'Rectangle Button Click', ->
    it 'adds the selected class to rectangle button', ->
      toolbar = new Toolbar()
      expect(toolbar).toBeDefined
      console.log $('#rectangle')
      toolbar.rectangle()
      expect($('#rectangle').hasClass("selected")).toBeTruthy()
      console.log $('#rectangle')
