
const events = [
  {
    title: 'Sunday Church',
    description: 'Weekly Christian church service',
    schedule: 'Weekly on Sunday from 09:00 to 10:00 am',
    location: 'Berner Münster',
    maxParticipants: null,
  },
  {
    title: 'Friday Prayers',
    description: 'Weekly on Fridays from 12:00 am to 13:00 pm',
    location: 'Islamisches Zentrum Bern',
    maxParticipants: null,
  },
  {
    title: 'Table tennis – open practice',
    description: 'Open practice for table tennis enthusiasts',
    schedule: 'Every two weeks on Wednesday from 19:00 to 20:30',
    location: 'Marktgasse 42',
    maxParticipants: 20,
  },
  {
    title: 'Language Dinner',
    description: 'Talk to people in a foreign language and enjoy dinner',
    schedule: 'Tuesday 22.10.2024 from 7 pm to 10 pm',
    location: 'TBC',
    maxParticipants: 40,
  },
  {
    title: 'Workshop on Swiss culture and integration',
    description: 'Interactive workshop on Swiss culture',
    schedule: 'Saturday 19.10.2024 from 09:00 AM to 16:00 PM',
    location: 'TBC',
    maxParticipants: 50,
  },
  {
    title: 'Local Art Expo',
    description: 'Experience the skill of local artists',
    schedule: 'From 15.10 to 30.10.2024',
    location: 'Kornhaus',
    maxParticipants: null,
  },
  {
    title: 'Coffee and Gossip',
    description: 'Meet other seniors, chat, and enjoy coffee',
    schedule: 'Weekly on Thursdays from 10 am to 12 pm',
    location: 'Adrianos',
    maxParticipants: 24,
  },
  {
    title: 'Vintage Movie Night',
    description: 'Vintage movie night selected by the community',
    schedule: 'Second Saturday of each month',
    location: 'Kino cineMovie',
    maxParticipants: 100,
  },
  {
    title: 'Book Club',
    description: 'Discuss the current book we are reading',
    schedule: 'Every third Monday from 18:00 to 20:00 pm',
    location: 'Sauffacher Bern',
    maxParticipants: 15,
  }
];


const eventsGrid = document.getElementById('eventsGrid');


events.forEach(event => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h3>${event.title}</h3>
    <p>${event.description}</p>
        <button class="read-more">Read More</button>
    <div class="additional-info" style="display: none;">
      <p><strong>Schedule:</strong> ${event.schedule || 'N/A'}</p>
      <p><strong>Location:</strong> ${event.location || 'TBC'}</p>
      <p><strong>Max Participants:</strong> ${event.maxParticipants ? event.maxParticipants : 'Unlimited'}</p>
      <button>Sign Up</button>
    </div>
  `;
  eventsGrid.appendChild(section);
});

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const additionalInfo = button.nextElementSibling;
    additionalInfo.style.display = additionalInfo.style.display === 'none' ? 'block' : 'none';
    button.textContent = button.textContent === 'Read More' ? 'Read Less' : 'Read More';
  });
});


function showfooter() {
  let footer = document.getElementsByTagName("footer")[0];
  footer.classList.add("footerVisible");
};

function hidefooter(){
  let footer = document.getElementsByTagName("footer")[0];
  footer.classList.remove("footerVisible");
};