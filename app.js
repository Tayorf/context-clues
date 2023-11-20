$(document).ready(function () {
    var friends = ["Harmon", "Mac", "Kelly", "Kyle ", "Scott"];
    var locations = ["Bedroom", "Bathroom", "backyard", "porch", "toilet", "underground", "shed", "alaska", "canada", "asguard"];
    var weapons = ["screwdriver", "lightsaber", "christmas tree", "magic wand", "barbie jeep", "cactus", "hammer", "eyelash", "bomb", "hairbrush", "crossbow", "gun", "whip", "cow", "pillow", "blowpipe", "shield", "shuriken", "dart", "knife"];
    for (var i = 1; i <= 100; i++) {
        var h3 = $('<h3>Accusation' + i + '</h3>')
        $('body').append(h3)
        $(h3).click(getAlert(i))
        $(h3).css({
            'cursor': 'pointer'
        });
    }

    function getAlert(i) {
        var pickFriend = friends[i % 5]
        var pickLocation = locations[i % 10]
        var pickWeapon = weapons[i % 20]

        function alertLoop() {
            alert("Accusation" + i + " : I accuse " + pickFriend + " with the " + pickWeapon + " in " + pickLocation + " ! ")
        }

        return alertLoop
    }



    // End of script
});