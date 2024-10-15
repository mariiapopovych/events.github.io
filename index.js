
const events = [
  {
    title: 'Sunday Church',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/St._Ludgerus_Billerbeck_Innenraum_01.jpg',
    description: 'Weekly Christian church service',
    schedule: 'Weekly on Sunday from 09:00 to 10:00 am',
    location: 'Berner Münster',
    maxParticipants: null,
  },
  {
    title: 'Friday Prayers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Shamsipour_College_-_Prayer_room.jpg',
    description: 'Weekly on Fridays from 12:00 am to 13:00 pm',
    location: 'Islamisches Zentrum Bern',
    maxParticipants: null,
  },
  {
    title: 'Table tennis – open practice',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/2016-02-07_13-29-37_ping-pong-belfort.jpg',
    description: 'Open practice for table tennis enthusiasts',
    schedule: 'Every two weeks on Wednesday from 19:00 to 20:30',
    location: 'Marktgasse 42',
    maxParticipants: 20,
  },
  {
    title: 'Language Dinner',
    image: 'https://live.staticflickr.com/4490/23625819258_d621c6ebc1_h.jpg',
    description: 'Talk to people in a foreign language and enjoy dinner',
    schedule: 'Tuesday 22.10.2024 from 7 pm to 10 pm',
    location: 'TBC',
    maxParticipants: 40,
  },
  {
    title: 'Workshop on Swiss culture and integration',
    image: 'https://images.pexels.com/photos/773473/pexels-photo-773473.jpeg',
    description: 'Interactive workshop on Swiss culture',
    schedule: 'Saturday 19.10.2024 from 09:00 AM to 16:00 PM',
    location: 'TBC',
    maxParticipants: 50,
  },
  {
    title: 'Local Art Expo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Lowry-gallery-interior-2.jpg',
    description: 'Experience the skill of local artists',
    schedule: 'From 15.10 to 30.10.2024',
    location: 'Kornhaus',
    maxParticipants: null,
  },
  {
    title: 'Coffee and Gossip',
    image: 'https://images.pexels.com/photos/15965021/pexels-photo-15965021.jpeg?cs=srgb&dl=pexels-andreevaleksandar-15965021.jpg&fm=jpg',
    description: 'Meet other seniors, chat, and enjoy coffee',
    schedule: 'Weekly on Thursdays from 10 am to 12 pm',
    location: 'Adrianos',
    maxParticipants: 24,
  },
  {
    title: 'Vintage Movie Night',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/A_display_full_of_vintage_film_projectors_and_film_memorabilia_-_0735.jpg',
    description: 'Vintage movie night selected by the community',
    schedule: 'Second Saturday of each month',
    location: 'Kino cineMovie',
    maxParticipants: 100,
  },
  {
    title: 'Book Club',
    image: 'https://wallpaperdelight.com/wp-content/uploads/2024/07/Discover-a-charming-little-corner-featuring-a-bookshelf-overflowing-with-beloved-paperbacks-accompanied-by-a-snug-chair-ready-for-hours-of-comfortable-reading.jpg',
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
    <img src="${event.image}" alt="${event.title} illustration" style="width: 350px; height: 200px">
    <p>${event.description}</p>
        <button class="read-more">Read More</button>
    <div class="additional-info" style="display: none;">
      <p><strong>Schedule:</strong> ${event.schedule || 'N/A'}</p>
      <p><strong>Location:</strong> ${event.location || 'TBC'}</p>
      <p><strong>Max Participants:</strong> ${event.maxParticipants ? event.maxParticipants : 'Unlimited'}</p>
      <button onclick="window.location.href='form_event.html'">Sign Up</button>
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