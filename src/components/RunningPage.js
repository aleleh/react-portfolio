//imports react library from react
import React from "react";

// running page function with links to extarnal websites as well as an internal frame from strava showing my latest runs
function RunningPage() {
  return (
    <div className="RunningPage-main">
       <div className="RunningPage-upcoming-events">
          <div className="event-card animate__animated animate__fadeIn">
            <h2>Upcoming Events</h2>
            <div className="event-container">
              <p>MAY 27 2023</p>
              <a href="https://raceroster.com/events/2023/60629/sulphur-springs-trail-race-2023" target="blank"><p className='event-name'>Sulphur Springs Trail Race</p></a>
            </div>
            <div className="event-container">
              <p>AUG 12 2023</p>
              <a href="https://raceroster.com/events/2022/49767/falling-water-trail-marathon-half-marathon" target="blank"><p className="event-name">Falling Water Trail Marathon</p></a>
            </div>
            <div className="event-container">
              <p>SEP 09 2023</p>
              <a href="https://raceroster.com/events/2023/71056/haliburton-forest-trail-race-2023" target="blank"><p className="event-name">Haliburton Trail Race</p></a>
            </div>
          </div>
        </div>
        <div className="RunningPage-strava">
          <div className="StravaCard animate__animated animate__fadeIn">
          <h2>Latest runs</h2>
          <iframe title='myFrame' height='454' width='300' src='https://www.strava.com/athletes/70870455/latest-rides/8f823a43d25a51a1bfb4b694dfd0069595143b19'></iframe>
          </div>
        </div>
    </div>
  );
}

export default RunningPage;