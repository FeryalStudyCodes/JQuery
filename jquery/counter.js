$(document).ready(function () {

    var mMaxLength = 200;

    $(".remaining").text(mMaxLength);

    $("#post_id").keydown(function () {
        LimitCharacters($(this));
    });
    $("#post_id").keyup(function () {
        LimitCharacters($(this));
    });

    function LimitCharacters(post_id) {
        if (post_id.val().length > mMaxLength) {
            post_id.val(post_id.val().substring(0, mMaxLength));
        } else {
            var mRemaining = mMaxLength - post_id.val().length;
            $(".remaining").text(mRemaining);
        }
    }
});