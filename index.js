const body = document.getElementsByTagName("BODY")[0];
const navbar = document.getElementById("navbar");
const ul = document.querySelector("ul");
const selector = document.querySelector("section");
const modal = document.getElementById("modal");
const alert = document.getElementById("alert");
const info = document.getElementById("info");
const backgroundImage = document.querySelector(".background-image");

const events = [
  {
    type: "Meetup",
    details: [
      {
        imgs:
          "https://images.unsplash.com/photo-1520110120835-c96534a4c984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2247&q=80",
        name: "Coding Talk",
        date: "01 - 26 May, 2020",
        deadline: "03/20/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Lets Meetup",
        date: "20 - 25 May, 2020",
        deadline: "04/19/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1520110120835-c96534a4c984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2247&q=80",
        name: "Meet Fair",
        date: "01 - 26 June, 2020",
        deadline: "04/28/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
    ],
  },
  {
    type: "Leap",
    details: [
      {
        imgs:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "The Great Meeting",
        date: "10 - 12 June, 2020",
        deadline: "05/08/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Sweet talk",
        date: "25 - 30 July, 2020",
        deadline: "04/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Power Fair",
        date: "25 - 26 April, 2020",
        deadline: "04/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
    ],
  },
  {
    type: "Recruiting Mission",
    details: [
      {
        imgs:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
        name: "Virtual Hiring Fair",
        date: "01 - 03 July, 2020",
        deadline: "06/30/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
        name: "Hiring Fair",
        date: "25 - 26 April, 2020",
        deadline: "04/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
        name: "Acing Interviews",
        date: "28 - 30 July, 2020",
        deadline: "07/26/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
    ],
  },
  {
    type: "VanHackathon",
    details: [
      {
        imgs:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Hackathon 2.0",
        date: "01 - 03 August, 2020",
        deadline: "30/07/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Codethon",
        date: "10 - 13 August, 2020",
        deadline: "08/09/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Hacker Fair",
        date: "28 - 30 August, 2020",
        deadline: "08/27/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
    ],
  },
  {
    type: "Premium-only Webinar",
    details: [
      {
        imgs:
          "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Handling Interview",
        date: "01 - 03 September, 2020",
        deadline: "08/30/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Hiring Fair",
        date: "25 - 26 April, 2020",
        deadline: "04/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Hiring Fair",
        date: "25 - 26 April, 2020",
        deadline: "04/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
    ],
  },
  {
    type: "Open Webinar",
    details: [
      {
        imgs:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Getting A job",
        date: "25 - 26 August, 2020",
        deadline: "08/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Boosting Profile",
        date: "25 - 26 September, 2020",
        deadline: "09/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
      {
        imgs:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
        name: "Beating Expectation",
        date: "25 - 26 September, 2020",
        deadline: "09/24/2020",
        location: "Vancouver - Canada",
        details: `VanHack is hosting a Virtual Hiring Fair, April 25th and 26th. 
        If you are looking for a job in Canada or Europe you should apply! Some of 
        the best companies in North America and Europe will be attending the virtual 
        fair.We are looking for candidates with more than 5 years of professional 
        experience, good English and ready for a change.`,
        expect: `Connect virtually with Companies in Canada and Europe
        Get a great preparation through VanHack
        Learn about the participating companies
        Get your profile forwarded to the companies
        Be ready to start remotely before relocating to Canada or Europe
        Be open to different cities in Canada and Europe (let us know if you have questions)
        This is an amazing chance to do interviews with international 
        companies and land a job abroad. Don't miss it`,
      },
    ],
  },
];

const images = [
  "https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2220&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80",
  "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2691&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80",
];

const randomImage = images[Math.floor(Math.random() * images.length)];
window.onload = () => (backgroundImage.src = randomImage);

const eventTypes = events
  .map((eventType, index) => {
    return `<li><a href=#${index}>${eventType.type}</a></li>`;
  })
  .join("");

ul.innerHTML = eventTypes;


const cardHTML = ({ type, details }, index) => `
<div id=${index} class="card-body">
  <h3>${type}</h3>
  <div class="event-item">
  ${details
    .map(
      ({ imgs, date, name, deadline, location, details, expect }) => `
    <div class="card">
      <img
      class="cover-image"
      src=${imgs}
      />
      <div class="inner-content">
        <h5>${name}</h5>
        <p>${date}</p>
        <p>Deadline ${deadline}</p>
        <p>${location}</p>
        <a class="button"
        data-type=${JSON.stringify(type)}
        data-deadline=${JSON.stringify(deadline)}
        data-name=${JSON.stringify(name)}
        data-img=${JSON.stringify(imgs)}
        data-date=${JSON.stringify(date)}
        data-location=${JSON.stringify(location)}
        data-details=${JSON.stringify(details)}
        data-expect=${JSON.stringify(expect)}
        onclick="openModal(this)">Details</a>
      </div>
    </div>
    `
    )
    .join("")}
  </div>
</div>`;

const modalContentHTML = ({
  type,
  deadline,
  name,
  img,
  location,
  date,
  details,
  expect,
}) => `
<div class="modal-content">
  <img class="modal-background " src=${img} />
  <div class="modal-details">
      <h3>${name}</h3>
      <p><span>Date:</span> ${date}</p>
      <p><span>Deadline:</span> ${deadline}</p>
      <p><span>Type:</span> ${type}</p>
      <p><span>Location: </span> ${location}</p>
      <div class="content-modal-details">
      <p>${details}</p>
      <p>${expect}</p>
      </div>
      <h5>Share on social media</h5>
      <div class="share">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://design-13999257-7l11fatjpk.hrcdn.net/recruit/attempts/13999257/questions/7l11fatjpk/render/269342966#00"
          target="_blank"
        ><img class="media" src="https://res.cloudinary.com/skybound/image/upload/v1587676114/eventmanager/static/facebook.svg" /></a>
        <a
          href="https://twitter.com/intent/tweet?url=https://design-13999257-7l11fatjpk.hrcdn.net/recruit/attempts/13999257/questions/7l11fatjpk/render/269342966#00"
          target="_blank"
        ><img class="media" src="https://res.cloudinary.com/skybound/image/upload/v1587676114/eventmanager/static/twitter.svg" /></a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://design-13999257-7l11fatjpk.hrcdn.net/recruit/attempts/13999257/questions/7l11fatjpk/render/269342966#00""
          target="_blank"
        ><img class="media" src="https://res.cloudinary.com/skybound/image/upload/v1587676114/eventmanager/static/linkedin.svg" /></a>
      </div> 
      <div class="modal-button">
        <a href="#99" id=${type} class="button" onclick="applyForEvent(this)">Apply</a>
        <a href="#00" onclick="closeModal(this)" class="button close">Close</a> 
      </div>
  </div>
</div>
`;

const addEvent = events.map((addEvent, i) => cardHTML(addEvent, i)).join("");
selector.innerHTML = addEvent;

const openModal = (element) => {
  modal.style.animation = "zoomOut 0.2s";
  modal.innerHTML = modalContentHTML(element.dataset);
  modal.style.display = "grid";
  body.style.height = "100vh";
  body.style["overflow-y"] = "hidden";
};

const closeModal = () => {
  modal.style.animation = "zoomIn 0.25s";
  setTimeout(() => (modal.style.display = "none"), 200);
  body.style.height = "";
  body.style["overflow-y"] = "";
};

const applyForEvent = (event) => {
  const { id } = event;
  const checkEvent = id === "Premium-only" ? "failed" : "successful";
  alert.childNodes[1].innerHTML = `Application ${checkEvent}`;
  alert.classList.add(checkEvent);
  setTimeout(() => info.classList.add(id.toLowerCase()), 500);
  setTimeout(() => alert.classList.remove(checkEvent), 2000);
};

const closeAlert = () => {
  info.classList.remove("premium-only");
};
