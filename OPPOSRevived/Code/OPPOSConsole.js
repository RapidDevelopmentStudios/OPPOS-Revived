var OPPOSRevived = {};

//Add OPPOS Console
GDT.addPlatform({
    id : 'opposystem.OPPOS',
    name : 'OPPOSystem',
    company : 'OPPOS Technologies',
    startAmount : 50000000000000000,
    unitsSold : 50000000000000000,
    licencePrize : 0,
    published : '1/1/1',
    platformRetireDate : '255/12/4',
    developmentCosts : 0,
    genreWeightings : [1, 1, 1, 1, 1, 1 ],
    audienceWeightings : [1, 1, 1],
    techLevel : 7,
    iconUri : GDT.getRelativePath() + '/../Img/Platform/OPPOSystem.png',
    events : [{
            id : 'OPPOS_Announce',
            date : '1/1/1',
            getNotification : function (company) {
                return new Notification({
                    header : "OPPOSystem Introduction".localize(),
                    text: "The OPPOSystem is a platform designed to work with any Genre and Target Audience. It also offers the highest tech level possible and 100% Market Share, making it easy to earn an incomprehensible amount of cash within minutes.",
                });
            }
        }
    ]
});