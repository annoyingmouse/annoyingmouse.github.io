var r = {
    "data": [
        {
            "EventId": "a0Db0000000gRv6EAE",
            "EventName": "Test Date",
            "EventStatus": "No Attendees",
            "Attended": false,
            "Invited": true,
            "EventDate": "/Date(1289347200000)/",
            "EventDateString": "10/10/2010"
        },
        {
            "EventId": "a0Db0000000gRv6EAE",
            "EventName": "Test Date",
            "EventStatus": "No Attendees",
            "Attended": false,
            "Invited": true,
            "EventDate": "/Date(1387272600000)/",
            "EventDateString": "17/12/2013"
        },
        {
            "EventId": "a0Db0000000gZjbEAE",
            "EventName": "Test Date",
            "EventStatus": "Drop In",
            "Attended": false,
            "Invited": true,
            "EventDate": "/Date(1364731200000)/",
            "EventDateString": "31/03/2013"
        },
        {
            "EventId": "a0Db0000000gamUEAQ",
            "EventName": "Test Date",
            "EventStatus": "Fully Booked",
            "Attended": false,
            "Invited": true,
            "EventDate": "/Date(1364378400000)/",
            "EventDateString": "27/03/2013"
        },
        {
            "EventId": "a0Db0000000gameEAA",
            "EventName": "Test Date",
            "EventStatus": "Fully Booked",
            "Attended": false,
            "Invited": true,
            "EventDate": "/Date(1364295600000)/",
            "EventDateString": "26/03/2013"
        },
        {
            "EventId": "a0Db0000000gaN9EAI",
            "EventName": "Test Date",
            "EventStatus": "Fully Booked",
            "Attended": false,
            "Invited": true,
            "EventDate": "/Date(1364205600000)/",
            "EventDateString": "25/03/2013"
        },
        {
            "EventId": "a0Db0000000gZxnEAE",
            "EventName": "Test Date",
            "EventStatus": null,
            "Attended": true,
            "Invited": true,
            "EventDate": "/Date(1363082400000)/",
            "EventDateString": "12/03/2013"
        },
        {
            "EventId": "a0Db0000000galREAQ",
            "EventName": "Test Date",
            "EventStatus": "Fully Booked",
            "Attended": true,
            "Invited": false,
            "EventDate": "/Date(1362999600000)/",
            "EventDateString": "11/03/2013"
        },
        {
            "EventId": "a0Db0000000gZjHEAU",
            "EventName": "Test Date",
            "EventStatus": "Completed",
            "Attended": true,
            "Invited": false,
            "EventDate": "/Date(1362391200000)/",
            "EventDateString": "04/03/2013"
        },
        {
            "EventId": "a0Db0000000gZjREAU",
            "EventName": "Test Date",
            "EventStatus": null,
            "Attended": true,
            "Invited": true,
            "EventDate": "/Date(1362139200000)/",
            "EventDateString": "01/03/2013"
        },
        {
            "EventId": "a0Db0000000gZWwEAM",
            "EventName": "Test Date",
            "EventStatus": "Drop In",
            "Attended": true,
            "Invited": false,
            "EventDate": "/Date(1362135600000)/",
            "EventDateString": "01/03/2013"
        }
    ]
};
var events = [];
var maxDate = "";
var minDate = "";
var years = [];
var latestYear = "";
// Adapted from: http://suvendugiri.wordpress.com/2012/07/18/javascript-function-to-get-current-fiscal-year/
function getFinancialYear(eventDate) {
    var curMonth = eventDate.getMonth();
    var fiscalYr = "";
    if (curMonth > 3) {
        fiscalYr = eventDate.getFullYear().toString() + " - " + (eventDate.getFullYear() + 1).toString();
    }
    else {
        fiscalYr = (eventDate.getFullYear() - 1).toString() + " - " + eventDate.getFullYear().toString();
    }
    return fiscalYr
}
function sortYears(f1, f2) {
    if (parseInt(f1.substr(0, 4)) > parseInt(f2.substr(0, 4))) {
        return 1;
    } else {
        return -1;
    }
}
function populateList(arr, datePeriod, target) {
    $(target).empty();
    $.each(arr, function (k, item) {
        if (item.fiscalYr == datePeriod) {
            var obj = $("<li></li>").appendTo($(target));
            obj.append($("<span></span>", {
                "class": "date",
                "text": item.EventDateString
            }));
            obj.append($("<span></span>", {
                "class": "event r"
            }).append($("<a></a>", {
                    "href": "/Event/EventDetails/" + item.EventId,
                    "text": abbreviate(item.EventName, 25, "…")
                })));
        }
    });
}
$(function () {
    $("#eventYears").on("change", function () {
        var selectedYear = $(this).val();
        populateList(events, selectedYear, ".eventMembers");
    });
    $.each(r.data, function (key, item) {
        var eventD = new Date(parseInt(item.EventDate.replace(/[^\d]/g, "")));
        if (maxDate == "") {
            maxDate = new Date(eventD.getTime());
        } else {
            if (maxDate.getTime() < eventD.getTime()) {
                maxDate = new Date(eventD.getTime());
            }
        }
        if (minDate == "") {
            minDate = new Date(eventD.getTime());
        } else {
            if (minDate.getTime() > eventD.getTime()) {
                minDate = new Date(eventD.getTime());
            }
        }
        var fiscalYr = getFinancialYear(eventD);
        if ($.inArray(fiscalYr, years) == -1) {
            years.push(fiscalYr);
        }
        item.fiscalYr = fiscalYr;
        item.eventD = eventD;
        events.push(item);
    });
    years.sort(sortYears);
    $.each(years, function (k, v) {
        if (k == years.length - 1) {
            latestYear = v;
            $("#eventYears").append($("<option></option>", {
                "value": v,
                "text": v,
                "selected": "selected"
            }));
        } else {
            $("#eventYears").append($("<option></option>", {
                "value": v,
                "text": v
            }));
        }
    });
    $.each(events, function (k, item) {
        populateList(events, latestYear, ".eventMembers");
    });
});

