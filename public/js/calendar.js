$(document).ready(function() {
    let allEvents = [];
    const t = document.getElementsByClassName('familyEvents');
    for (let i = 0; i < t.length; i++) {
        title = t[i].children[0].textContent;
        notes = t[i].children[1].textContent;
        startDate = t[i].children[2].textContent;
        endDate = t[i].children[3].textContent;
        startTime = t[i].children[4].textContent;
        endTime = t[i].children[5].textContent;
        elocation = t[i].children[6].textContent;
        etype = t[i].children[7].textContent;
        if (startTime) {
            startDT = startDate+"T"+startTime;
            endDT = endDate+"T"+endTime;
            startNote = moment(startDT).format("MMMM Do YYYY, h:mm a")
            endNote = moment(endDT).format("MMMM Do YYYY, h:mm a")
        } else {
            startDT = startDate;
            endDT = endDate;
            startNote = moment(startDT).format("MMMM Do YYYY")
            endNote = moment(endDT).format("MMMM Do YYYY")
        }
        if (etype === 'Required') {
            bg = 'green';
            symbol = 'success';
        } else if (etype === 'Optional') {
            bg = 'blue';
            symbol = 'success';
        } else {
            bg = 'orange';
            symbol = 'warning';
        }
        let rowData = {
            "title": title,
            "start": startDT,
            "end": endDT,
            "startNote": startNote,
            "endNote": endNote,
            "notes": notes,
            "backgroundColor": bg,
            "symbol": symbol,
        };
        allEvents.push(rowData);
    }

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        navLinks: true,
        editable: true,
        eventLimit: true, 
        events: allEvents,
        eventClick: function(calEvent, jsEvent, view, resourceObj) {
            swal({
            title: calEvent.title,
            text: calEvent.notes +'\n' + '\n' + 
                "Start : " + calEvent.startNote +'\n' + 
                "End : " + calEvent.endNote,
            icon: calEvent.symbol,
            });
        }
    });
});