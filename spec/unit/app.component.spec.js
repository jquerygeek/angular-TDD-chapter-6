"use strict";
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var app_component_1 = require('../../app/app.component');
describe('AppComponent', function () {
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        comp.add('a sample comment');
        comp.like(comp.comments[0]);
    });
    it('should create component', function () {
        expect(comp).toBeDefined();
    });
    it('First item in the item should match', function () {
        expect(comp.comments[0].title).toBe('a sample comment');
    });
    it('Number of likes should increase on like', function () {
        expect(comp.comments[0].likes).toEqual(1);
    });
});
//# sourceMappingURL=app.component.spec.js.map