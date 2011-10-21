(function() {
  describe('Toolbar', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = "fixtures";
      return loadFixtures("canvas_fixture.html");
    });
    return describe('Rectangle Button Click', function() {
      return it('adds the selected class to rectangle button', function() {
        var toolbar;
        toolbar = new Toolbar();
        expect(toolbar).toBeDefined;
        console.log($('#rectangle'));
        toolbar.rectangle();
        expect($('#rectangle').hasClass("selected")).toBeTruthy();
        return console.log($('#rectangle'));
      });
    });
  });
}).call(this);
