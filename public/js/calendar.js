$(document).ready(function() {
    
    let allEvents = [];
    // $("#test").each(function() {
    //     let rowDataArray = [];

        // let actualData = $this.find('td');
        // if (actualData.length > 0) {
            // actualData.each(function() {
                // rowDataArray.push($(this).text());
            // });
            // allEvents.push(rowDataArray);
        // }
    // });
    // console.log(allEvents);

    const t = document.getElementsByClassName('test1');
    for (let i = 0; i < t.length; i++) {
        let rowData = {
            "title": t[i].children[0].textContent,
            "start": t[i].children[1].textContent,
            "end": t[i].children[2].textContent,
            "backgroundColor": t[i].children[3].textContent,
        };
        allEvents.push(rowData);
    }
    console.log(allEvents);


    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        // defaultDate: '2022-02-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        
        events: allEvents,
        
        // events: [
        //     {
        //         title: 'All Day Event',
        //         start: '2022-02-04',
        //         backgroundColor:'red'
        //     },
        //     {
        //         title: 'Long Event',
        //         start: '2022-02-07',
        //         end: '2022-02-10',
        //         backgroundColor:'green'
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: '2018-03-09T16:00:00'
        //     },
        //     {
        //         id: 999,
        //         title: 'Repeating Event',
        //         start: '2018-03-16T16:00:00'
        //     },
        //     {
        //         title: 'Conference',
        //         start: '2018-03-11',
        //         end: '2018-03-13'
        //     },
        //     {
        //         title: 'Class',
        //         start: '2022-02-12T10:00:00',
        //         end: '2022-02-12T2:00:00'
        //     },
        //     {
        //         title: 'Lunch',
        //         start: '2018-03-12T12:00:00'
        //     },
        //     {
        //         title: 'Meeting',
        //         start: '2018-03-12T14:30:00'
        //     },
        //     {
        //         title: 'Happy Hour',
        //         start: '2018-03-12T17:30:00'

        //     },
        //     {
        //         title: 'Dinner',
        //         start: '2018-03-12T20:00:00'
        //     },
        //     {
        //         title: 'Birthday Party',
        //         start: '2018-03-13T07:00:00'
        //     },
        //     {
        //         title: 'Click for Google',
        //         url: 'http://google.com/',
        //         start: '2018-03-28'
        //     }
        // ],
        eventClick: function(calEvent, jsEvent, view, resourceObj) {
            swal({
            title: calEvent.title,
            text: "Start From : "+moment(calEvent.start).format("MMMM Do YYYY, h:mm a"),
            icon: "success",
            });
        }
    });

    // $(".fc-right .fc-button-group").append(
    // '<div class="input-group datetimepicker"><input type="text" class="form-control fc-datepicker" placeholder="YYYY-MM-DD" style="padding: 0;width: 0;border: none;margin: 0;"></div>');

    // $(".fc-datepicker").datepicker({
    //     dateFormat: 'yy-mm-dd',
    //     showOn: "button",
    //     buttonText: '<span class="input-group-addon"><i class="fas fa-calendar-alt"></i></span>'
    // });
});