import React, { Fragment, useState, useCallback, useMemo } from 'react'
import { Calendar, globalizeLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import globalize from 'globalize'
import events from './events';

const localizer = globalizeLocalizer(globalize)
const dayLayoutAlgorithm='no-overlap'
const resourceMap = [
    { resourceId: 1, resourceTitle: 'Board room' },
    { resourceId: 2, resourceTitle: 'Training room' },
    { resourceId: 3, resourceTitle: 'Meeting room 1' },
    { resourceId: 4, resourceTitle: 'Meeting room 2' },
  ]

function MyCalendar(){
    const [myEvents, setEvents] = useState(events)

    const handleSelectSlot = useCallback(
      ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title) {
          setEvents((prev) => [...prev, { start, end, title }])
        }
      },
      [setEvents]
    )
  
    const handleSelectEvent = useCallback(
      (event) => window.alert(event.title),
      []
    )
        
    return(
        <div>
            <Calendar
            localizer={localizer}
            events={myEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            resourceIdAccessor="resourceId"
            resources={resourceMap}
            resourceTitleAccessor="resourceTitle"
            dayLayoutAlgorithm={dayLayoutAlgorithm}
            step={60}
            selectable
            />
        </div>
    );
}

export default MyCalendar