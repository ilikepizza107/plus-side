document.addEventListener('DOMContentLoaded', function () {
    const headerButtonsDiv = document.getElementById('headerButtons');
  
    const upcomingEventsHTML = `
      <div class="upcoming-image-parent">
        <h1 id="pageHeader" class="textGradient">UPCOMING EVENTS</h1>
        <div>
          <button class="calView"><a href="Calendar.html">Calendar</a></button>
          <div onclick="toggleDropdown(event)" style="display: inline-flex;" class="past-events-drop calView">
            <!-- Dropdown Button -->
            <button id="past-events-drop-btn" class="past-events-drop-btn">
              Past Events
              <i class="2023-drop"></i>
            </button>
            <!-- Dropdown Content -->
            <div id="dropdown-content" class="dropdown-content" style="display: none;">  
              <a class="dropdown-links" href="/past-events/2023.html"><p id="past-year">2023</p></a>
              <a class="dropdown-links" href="/past-events/2024.html"><p id="past-year">2024</p></a>
            </div>
          </div>
          <div>
            <button onclick="toggleForm(event)" id="toggleBtn" class="Upcoming-event-form-button">Add an Event</button>
            <div id="inputContainer" class="hidden Upcoming-event-form">
              <form action="/submit-event" method="post">
                <p id="EventTitleUpcoming"></p>
                <input placeholder="Event Name" type="text" id="textInputUpcomingTitle" name="upcomingTitle">
                <br>
                <p id="EventDateUpcoming"></p>
                <input placeholder="Event Date(s)" type="text" id="textInputUpcomingDate" name="upcomingDate">
                <br>
                <p id="EventLocationUpcoming"></p>
                <input placeholder="(City, State, Country)" type="text" id="textInputUpcomingLocation" name="upcomingLocation">
                <br>
                <p id="EventUrlUpcoming"></p>
                <input placeholder="Start.gg" type="text" id="textInputUpcomingUrl" name="upcomingUrl">
                <br>
                <p id="EventImageUpcoming"></p>
                <input placeholder="Direct Link" type="text" id="textInputUpcomingImage" name="upcomingImg">
                <br>
                <p id="EventDescriptionUpcoming"></p>
                <input placeholder="Description" type="text" id="textInputUpcomingDescription" name="upcomingDescription">
                <br>
                <button id="SubmitBtn" class="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  
    headerButtonsDiv.innerHTML = upcomingEventsHTML;
  });
  