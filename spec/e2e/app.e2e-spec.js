"use strict";
var protractor_1 = require('protractor');
describe('Given I am posting a new comment', function () {
    describe('When I push the submit button', function () {
        beforeEach(function () {
            //Assemble
            protractor_1.browser.get('');
            var commentInput = protractor_1.element(protractor_1.by.css('input'));
            commentInput.sendKeys('a sample comment');
            //Act
            var submitButton = protractor_1.element(protractor_1.by.buttonText('Submit')).click();
        });
        //Assert
        it('Should then add the comment', function () {
            var comment = protractor_1.element.all(protractor_1.by.css('li')).first();
            expect(comment.getText()).toBe('a sample comment like 0');
        });
    });
    describe('When I like a comment', function () {
        var firstComment = null;
        beforeEach(function () {
            protractor_1.browser.get('');
            //Assemble
            firstComment = protractor_1.element.all(protractor_1.by.css('li')).first();
            var likeButton = firstComment.element(protractor_1.by.buttonText('like'));
            //Act
            likeButton.click();
        });
        //Assert
        it('Should increase the number of likes to one', function () {
            var commentLikes = firstComment.element(protractor_1.by.css('#likes'));
            expect(commentLikes.getText()).toEqual('1');
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map