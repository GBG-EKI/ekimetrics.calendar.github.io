import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import iCalendarPlugin from '@fullcalendar/icalendar'
import {EVENTS_LIST} from './events'

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, iCalendarPlugin ]}
        initialView="dayGridMonth"
        weekends= {false}
        selectable={true}
        //events = {EVENTS_LIST}
        events= {{
            url: 'https://corsproxy.io/?https://outlook.office365.com/owa/calendar/5c847dd1d1be46a7988d4da99ef83d26@ekimetrics.com/5d9c0da019794705a32c5d26cf797aa612894611057117921568/calendar.ics',
            format: 'ics'
          }}
      />
    )
  }
}