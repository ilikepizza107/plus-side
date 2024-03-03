import React from 'react';
import PastEvents from './PastEvents';
import HiddenEvent from './HiddenList'; 


function App() {
  // Define event data
  const events = [
    {
      eventTitle: "Full Bloom 2024",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/fullbloom.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/full-bloom-2024/event/project-singles",
      date: "February 24-25, 2024",
      location: "Indiana",
      entrants: 84,
      top3: ["Dirtboy", "Anther", "Chaloopy"],
      vodsUrl: ""
    },
    {
      eventTitle: "Perfect Pivot",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/pp.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/perfect-pivot/details",
      date: "February 24-25, 2024",
      location: "Winnipeg",
      entrants: 27,
      top3: ["Blitz", "2665", "Jams"],
      vodsUrl: ""
    },
    {
      eventTitle: "The Truce",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/truce.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/the-truce/details",
      date: "February 24-25, 2024",
      location: "Le Kremlin-Bicêtre",
      entrants: 40,
      top3: ["Smash_Falco3", "Melody", "iPunch"],
      vodsUrl: ""
    },
    {
      eventTitle: "Beantown Lean House I",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/beantown.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/beantown-lean-house-i/event/project-singles",
      date: "February 24 2024",
      location: "Massachusetts",
      entrants: 8,
      top3: ["Serb", "Foxy Grandpa", "sfy bees"],
      vodsUrl: ""
    },
    {
      eventTitle: "Exodus 2024",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/past-events/exodus.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/exodus-2024/details",
      date: "February 17 2024",
      location: "California",
      entrants: 51,
      top3: ["SipMastah", "Sneez", "Darc"],
      vodsUrl: "https://www.youtube.com/playlist?list=PLK6QY5XQ-uu1tUnqdIf51uxtC4l_sPUVI"
    },
    {
      eventTitle: "Smashing Grounds 10th Anniversary Celebration",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/10th%20aniv.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/smashing-grounds-10th-anniversary-celebration-a-melee-and-project-regional/events/project-singles/brackets/1545109/2321524/overview",
      date: "February 10 2024",
      location: "Massachusetts",
      entrants: 34,
      top3: ["wren", "Shadowhawke", "~CP9~"],
      vodsUrl: ""
    },
    {
      eventTitle: "The Cure",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/the%20cure.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/the-cure-100-pot-bonus-p-invitational/event/singles/brackets/1533162/2305744",
      date: "February 9 2024",
      location: "Colorado",
      entrants: 14,
      top3: ["Whoratio", "shwang", "meecrobs"],
      vodsUrl: "",
    },
    {
      eventTitle: "Vortex Gallery at Frosty Faustings XVI",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/upcoming%20events/vortex.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/vortex-gallery-at-frosty-faustings-xvi/event/project-wii/standings",
      date: "January 28 2024",
      location: "Illinois",
      entrants: 34,
      top3: ["Rise", "yung Quaff", "Twisty"],
      vodsUrl: "https://www.youtube.com/playlist?list=PLov8ro2MZrJKniuhKgF_Qp5swkhIroZlW"
    },
    {
      eventTitle: "Game 5 In The D",
      imageUrl: "https://github.com/pkzstar/plus-side/blob/main/images/game5In.png?raw=true",
      eventUrl: "https://www.start.gg/tournament/game-5-in-the-d/details",
      date: "January 20 2024",
      location: "Michigan",
      entrants: 44,
      top3: ["Morsecode762", "Techboy", "Star"],
      vodsUrl: "https://www.youtube.com/@Game5ProjectPlus"
    },
  ];

  return (
    <div className="App">
    <ul className="pastList" id="pastList">
        {events.map((event, index) => (
          <PastEvents
            key={index}
            eventTitle={event.eventTitle}
            imageUrl={event.imageUrl}
            eventUrl={event.eventUrl}
            date={event.date}
            location={event.location}
            entrants={event.entrants}
            first={event.top3[0]}
            second={event.top3[1]}
            third={event.top3[2]}
            vodsUrl={event.vodsUrl}
            hideRankImage={index === 1 || index === 2 || index === 3 || index === 6}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;