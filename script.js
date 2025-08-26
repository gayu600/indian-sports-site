// Select all cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Toggle glow on click
    card.classList.toggle("active");
  });
});
// ===========================================
// Data — tweak & extend freely
// ===========================================
const historyEvents = [
  { year: 1928, title: "First Olympic Hockey Gold", desc: "India won its first Olympic gold medal in field hockey at the Amsterdam Olympics." },
  { year: 1936, title: "Berlin Hat-trick", desc: "India clinched its third consecutive hockey gold; Dhyan Chand gave a legendary performance." },
  { year: 1951, title: "Asian Games Debut (Host)", desc: "India hosted the inaugural Asian Games in New Delhi." },
  { year: 1975, title: "Hockey World Cup Champions", desc: "India won the Men's Hockey World Cup in Kuala Lumpur." },
  { year: 1983, title: "Cricket World Cup Champions", desc: "Kapil Dev led India to its first ICC Cricket World Cup title." },
  { year: 2008, title: "Abhinav Bindra — First Individual Olympic Gold", desc: "Gold in 10m Air Rifle at Beijing Olympics." },
  { year: 2012, title: "Mary Kom — Olympic Bronze", desc: "Bronze in women's boxing; multiple-time world champion." },
  { year: 2016, title: "PV Sindhu — Olympic Silver", desc: "India's first Olympic silver in badminton at Rio." },
  { year: 2021, title: "Hockey Team — Olympic Bronze", desc: "Men's hockey team won bronze at Tokyo 2020 (held in 2021)." },
  { year: 2021, title: "Neeraj Chopra — Olympic Gold", desc: "First Olympic gold in athletics (javelin) at Tokyo 2020 (held in 2021)." }
];

const tournaments = [
  {
    name: "Olympic Games",
    type: "Multi-sport",
    info: "Global multi-sport event. Indian highlights include hockey dominance across decades, and modern individual golds in shooting (2008) and athletics (2021)."
  },
  {
    name: "Asian Games",
    type: "Multi-sport",
    info: "Continental multi-sport event; India has been a regular participant since the inaugural edition in 1951 hosted in New Delhi."
  },
  {
    name: "Commonwealth Games",
    type: "Multi-sport",
    info: "India has earned numerous medals across shooting, wrestling, weightlifting, badminton, and more."
  },
  {
    name: "ICC Cricket World Cup",
    type: "Cricket",
    info: "India are champions in 1983 and 2011; consistent strong performers across editions."
  },
  {
    name: "ICC T20 World Cup",
    type: "Cricket",
    info: "India won the inaugural 2007 T20 World Cup and has reached the latter stages multiple times."
  },
  {
    name: "Hockey World Cup",
    type: "Hockey",
    info: "India won the Men's Hockey World Cup in 1975."
  }
];

const achievements = [
  {
    sport: "Cricket",
    categories: [
      {
        title: "World Cup Achievements",
        points: [
          "1983: Won ICC Cricket World Cup under Kapil Dev.",
          "2011: Won ICC Cricket World Cup under M. S. Dhoni.",
          "2023: Reached ICC World Cup Final (Runner-up)."
        ]
      },
      {
        title: "T20 Achievements",
        points: [
          "2007: Won inaugural ICC T20 World Cup under M. S. Dhoni.",
          "2014: Reached ICC T20 World Cup Final (Runner-up).",
          "2016: Reached ICC T20 World Cup Semi-final."
        ]
      },
      {
        title: "Champions Trophy",
        points: [
          "2002: Shared ICC Champions Trophy with Sri Lanka.",
          "2013: Won ICC Champions Trophy under M. S. Dhoni."
        ]
      },
      {
        title: "Test Cricket Achievements",
        points: [
          "1952: First Test match win against England at Madras.",
          "1971: First Test series win in England under Ajit Wadekar.",
          "2018-19: First-ever Test series win in Australia (2-1).",
          "2021: Reached Final of Inaugural ICC World Test Championship."
        ]
      },
      {
        title: "Other Major Achievements",
        points: [
          "1985: Won Benson & Hedges World Championship in Australia.",
          "2018: Asia Cup Champions under Rohit Sharma.",
          "2023: Asia Cup Champions under Rohit Sharma."
        ]
      },
      {
        title: "Notable Players",
        points: [
          "Sunil Gavaskar – First to 10,000 Test runs.",
          "Kapil Dev – 1983 World Cup winning captain.",
          "Sachin Tendulkar – Only player with 100 international centuries.",
          "Sourav Ganguly – Revived Indian cricket in 2000s.",
          "M. S. Dhoni – Only captain to win all three ICC trophies.",
          "Virat Kohli – Modern batting great.",
          "Rohit Sharma – Multiple double centuries in ODIs."
        ]
      }
    ]
  },
{
  sport: "Hockey",
  categories: [
    {
      title: "Olympic Achievements",
      points: [
        "1928: First Olympic Gold in Amsterdam.",
        "1932: Olympic Gold in Los Angeles.",
        "1936: Olympic Gold in Berlin.",
        "1948: Olympic Gold in London.",
        "1952: Olympic Gold in Helsinki.",
        "1956: Olympic Gold in Melbourne.",
        "1964: Olympic Gold in Tokyo.",
        "1980: Olympic Gold in Moscow.",
        "2021: Bronze Medal at Tokyo 2020 Olympics (Men's team)."
      ]
    },
    {
      title: "World Cup Achievements",
      points: [
        "1975: Hockey World Cup Champions.",
        "1978: Hockey World Cup Champions.",
        "1982: Hockey World Cup Champions.",
        "2014: Hockey World Cup Bronze.",
        "2023: Hockey World Cup Finalists (Runner-up)."
      ]
    },
    {
      title: "Asian Games Achievements",
      points: [
        "1966: Asian Games Gold Medal.",
        "1970: Asian Games Gold Medal.",
        "1982: Asian Games Gold Medal.",
        "2014: Asian Games Gold Medal."
      ]
    },
    {
      title: "Other Major Achievements",
      points: [
        "1985: Won Benson & Hedges World Championship in Australia.",
        "2007: Champions Trophy Bronze.",
        "2016: Champions Trophy Bronze."
      ]
    },
    {
      title: "Notable Players",
      points: [
        "Dhyan Chand – Legendary goal scorer, multiple Olympic Golds.",
        "Balbir Singh Sr. – Multiple Olympic Golds and World Championships.",
        "Dhanraj Pillay – Modern era hockey icon.",
        "Pargat Singh – World Cup-winning captain.",
        "Vikram Pillay – Asian Games medalist."
      ]
    }
  ]
},
  {
  sport: "Athletics",
  categories: [
    {
      title: "Olympic Achievements",
      points: [
        "2021: Neeraj Chopra won Olympic Gold in Javelin at Tokyo 2020 (held 2021) — first Indian to win Olympic gold in Athletics."
      ]
    },
    {
      title: "Asian Games Achievements",
      points: [
        "2014: Multiple medals in track & field events.",
        "2018: Neeraj Chopra won Gold in Javelin.",
        "2018: Other Indian athletes won medals across sprinting, long jump, and hurdles."
      ]
    },
    {
      title: "Commonwealth Games Achievements",
      points: [
        "2010-2022: Indian athletes won medals in Javelin, 400m hurdles, 4x400m relay, and long jump events."
      ]
    },
    {
      title: "Notable Athletes",
      points: [
        "Neeraj Chopra – Olympic Gold, multiple Asian & Commonwealth medals.",
        "Anju Bobby George – World Championship Bronze in Long Jump (2003).",
        "P. T. Usha – Multiple Asian Games Golds, narrowly missed 1984 Olympic medal.",
        "Milkha Singh – 'Flying Sikh', legendary sprinter and Asian Games champion.",
        "Hima Das – Asian Games Gold medalist, sprinting prodigy."
      ]
    }
  ]
},

  {
  sport: "Badminton",
  categories: [
    {
      title: "World Championships & Olympics",
      points: [
        "1980: Prakash Padukone won All England Open Badminton Championships.",
        "2001: Pullela Gopichand won All England Open Badminton Championship.",
        "2012: Saina Nehwal won Olympic Bronze (London).",
        "2015: Saina Nehwal became World No.1.",
        "2016: P. V. Sindhu won Olympic Silver (Rio).",
        "2019: P. V. Sindhu became World Champion.",
        "2020: P. V. Sindhu won Olympic Bronze (Tokyo).",
        "2021: Lakshya Sen won World Championships Bronze.",
        "2022: Lakshya Sen won Commonwealth Games Gold (Mixed Team)."
      ]
    },
    {
      title: "Team Achievements",
      points: [
        "2022: Indian Men’s Team won Thomas Cup (first-ever win)."
      ]
    },
    {
      title: "Notable Players",
      points: [
        "Prakash Padukone – Pioneer Indian shuttler, All England Champion.",
        "Pullela Gopichand – All England Champion, renowned coach.",
        "Saina Nehwal – First Indian woman Olympic medalist in badminton.",
        "P. V. Sindhu – Olympic medalist and World Champion.",
        "Kidambi Srikanth – First Indian male World No.1.",
        "Lakshya Sen – Rising star in international badminton."
      ]
    }
  ]
},
  {
  sport: "Shooting",
  categories: [
    {
      title: "Olympic Achievements",
      points: [
        "2004: Rajyavardhan Singh Rathore won Silver in Men's Double Trap (Athens).",
        "2008: Abhinav Bindra won Gold in 10m Air Rifle (Beijing) — India's first individual Olympic Gold.",
        "2012: Gagan Narang won Bronze in 10m Air Rifle (London).",
        "2016: Vijay Kumar and Jitu Rai represented India at Rio Olympics."
      ]
    },
    {
      title: "World Championships & ISSF Events",
      points: [
        "2006: Rajyavardhan Singh Rathore – Silver at World Shooting Championships.",
        "2010: Gagan Narang – Gold at ISSF World Cup, Men's 10m Air Rifle.",
        "2018: Apurvi Chandela – Gold at ISSF World Cup, Women's 10m Air Rifle."
      ]
    },
    {
      title: "Other Major Achievements",
      points: [
        "2010: ISSF World Cup – India ranked among top shooting nations.",
        "2022: India won multiple medals in Commonwealth Games shooting events."
      ]
    },
    {
      title: "Notable Shooters",
      points: [
        "Abhinav Bindra – First individual Olympic Gold for India.",
        "Rajyavardhan Singh Rathore – Olympic Silver, World Championships medalist.",
        "Gagan Narang – Olympic Bronze, multiple ISSF medals.",
        "Jitu Rai – World Cup medalist.",
        "Apurvi Chandela – ISSF World Cup Gold medalist."
      ]
    }
  ]
},
  {
    sport: "Wrestling",
    categories: [
      {
        title: "Olympic Achievements",
        points: [
          "2008: Sushil Kumar won Bronze in Men's Freestyle 66kg (Beijing).",
        "2012: Sushil Kumar won Silver in Men's Freestyle 66kg (London).",
        "2016: Sakshi Malik won Bronze in Women's Freestyle 58kg (Rio) — first Indian female wrestler to win Olympic medal.",
        "2020: Bajrang Punia won Bronze in Men's Freestyle 65kg (Tokyo).",
        "2020: Ravi Kumar Dahiya won Silver in Men's Freestyle 57kg (Tokyo)."
      ]
    },
    {
      title: "World Championships Achievements",
      points: [
        "2010: Sushil Kumar – Gold in 66kg Men's Freestyle (Moscow).",
        "2015: Vinesh Phogat – Bronze in 48kg Women's Freestyle.",
        "2019: Bajrang Punia – Bronze in 65kg Men's Freestyle."
      ]
    },
    {
      title: "Commonwealth Games Achievements",
      points: [
        "2010: Sushil Kumar – Gold (66kg).",
        "2010: Geeta Phogat – Gold (55kg).",
        "2018: Vinesh Phogat – Gold (50kg).",
        "2018: Bajrang Punia – Gold (65kg)."
      ]
    },
    {
      title: "Notable Wrestlers",
      points: [
        "Sushil Kumar – Two-time Olympic medalist and World Champion.",
        "Bajrang Punia – Olympic Bronze, multiple World Championship medals.",
        "Ravi Kumar Dahiya – Olympic Silver medalist.",
        "Sakshi Malik – Olympic Bronze medalist, trailblazer for female wrestlers.",
        "Geeta Phogat – Commonwealth Games Gold, inspired female wrestling in India.",
        "Vinesh Phogat – Multiple Commonwealth & World Championship medals."
      ]
    }
  ]
},
  {
    sport: "Boxing",
    categories: [
      {
        title: "Olympic Achievements",
        points: [
          "2008: Vijender Singh – Bronze in Middleweight (Beijing) — first Indian male boxer to win Olympic medal.",
        "2012: Mary Kom – 2012 London Olympics Bronze in Flyweight.",
        "2020: Lovlina Borgohain – Bronze in Welterweight (Tokyo 2020, held 2021).",
        "2020: Neeraj Kumar – represented India at Tokyo Olympics (Boxing events)."
      ]
    },
    {
      title: "World Championships Achievements",
      points: [
        "2002: Dingko Singh – Gold at World Amateur Boxing Championship (Bantamweight).",
        "2001-2018: Mary Kom – Six-time World Champion in Flyweight.",
        "2019: Amit Panghal – Silver at World Championships."
      ]
    },
    {
      title: "Commonwealth Games Achievements",
      points: [
        "2002: Dingko Singh – Gold in Bantamweight.",
        "2006-2022: Mary Kom – Multiple medals in Flyweight.",
        "2018: Lovlina Borgohain – Gold in Welterweight.",
        "2018: Vikas Krishan – Gold in Middleweight."
      ]
    },
    {
      title: "Notable Boxers",
      points: [
        "Mary Kom – Six-time World Champion, Olympic Bronze medalist, pioneer in women’s boxing.",
        "Vijender Singh – Olympic Bronze, professional boxer.",
        "Lovlina Borgohain – Olympic Bronze, Commonwealth Gold medalist.",
        "Dingko Singh – World Championship & Commonwealth Gold medalist.",
        "Amit Panghal – World Championship Silver, Asian Games Gold medalist.",
        "Vikas Krishan – Commonwealth & Asian Games Gold medalist."
      ]
    }
  ]
},

  {
    sport: "Martial Arts",
    categories: [
      {
        title: "Olympic Achievements",
        points: [
          "2020: Bajrang Punia – Bronze in Wrestling (Freestyle 65kg) at Tokyo (included under MMA/Wrestling crossover events).",
          "2020: Lovlina Borgohain – Bronze in Boxing (69kg) at Tokyo — first Indian female boxer Olympic medal in this weight category.",
          "2012-2020: Multiple medals in Karate & Taekwondo Asian Games by Indian athletes."
        ]
      },
      {
        title: "World & Asian Championships Achievements",
        points: [
          "2016: Anamika – Bronze at World Karate Championships.",
        "2018: Ritu Phogat – Gold in Asian Wrestling Championship.",
        "2019: Indian Taekwondo team won multiple medals at Asian & World Championships."
      ]
    },
    {
      title: "Commonwealth Games Achievements",
      points: [
        "2010-2022: Indian athletes won medals in Boxing, Karate, and Wrestling categories.",
        "2018: Bajrang Punia – Gold in Commonwealth Games Wrestling (65kg).",
        "2018: Vinesh Phogat – Gold in Commonwealth Games Wrestling (50kg)."
      ]
    },
    {
      title: "Notable Athletes",
      points: [
        "Bajrang Punia – Olympic Bronze, multiple World & Commonwealth medals in Wrestling.",
        "Vinesh Phogat – Multiple medals in Commonwealth & Asian Championships, World Championship finalist.",
        "Lovlina Borgohain – Olympic Bronze medalist in Boxing.",
        "Ritu Phogat – Asian Championship Gold medalist in Wrestling.",
        "Anamika – Karate World Championship medalist."
      ]
    }
  ]
},

];

const athletes = [
  
  { "name": "Dhyan Chand", "sport": "Hockey", "blurb": "The 'Wizard' of hockey; part of India's golden era with 3 Olympic golds.", "initials": "DC" },
  { "name": "Kapil Dev", "sport": "Cricket", "blurb": "Captain of the 1983 Cricket World Cup champions.", "initials": "KD" },
  { "name": "Sachin Tendulkar", "sport": "Cricket", "blurb": "100 international centuries; Bharat Ratna awardee.", "initials": "ST" },
  { "name": "M. S. Dhoni", "sport": "Cricket", "blurb": "Led India to 2007 T20 & 2011 ODI World Cup titles.", "initials": "MSD" },
  { "name": "Sunil Gavaskar", "sport": "Cricket", "blurb": "First to 10,000 Test runs; batting legend of India.", "initials": "SG" },
  { "name": "Virat Kohli", "sport": "Cricket", "blurb": "Modern batting great; multiple records across formats.", "initials": "VK" },
  { "name": "Rohit Sharma", "sport": "Cricket", "blurb": "Multiple double centuries in ODIs; captain of limited overs team.", "initials": "RS" },
  { "name": "Abhinav Bindra", "sport": "Shooting", "blurb": "India’s first individual Olympic gold medalist (2008).", "initials": "AB" },
  { "name": "Rajyavardhan Singh Rathore", "sport": "Shooting", "blurb": "Olympic Silver (2004), World Championships medalist.", "initials": "RSR" },
  { "name": "Gagan Narang", "sport": "Shooting", "blurb": "Olympic Bronze (2012), multiple ISSF World Cup medals.", "initials": "GN" },
  { "name": "Mary Kom", "sport": "Boxing", "blurb": "Six-time world champion; Olympic bronze (2012).", "initials": "MK" },
  { "name": "Vijender Singh", "sport": "Boxing", "blurb": "Olympic bronze (2008); professional boxing titles.", "initials": "VS" },
  { "name": "Lovlina Borgohain", "sport": "Boxing", "blurb": "Olympic bronze (2020 Tokyo); Commonwealth Games gold (2018).", "initials": "LB" },
  { "name": "Sushil Kumar", "sport": "Wrestling", "blurb": "Olympic medals in 2008 and 2012.", "initials": "SK" },
  { "name": "Bajrang Punia", "sport": "Wrestling", "blurb": "Olympic bronze (2020 Tokyo); multiple World & Commonwealth medals.", "initials": "BP" },
  { "name": "Vinesh Phogat", "sport": "Wrestling", "blurb": "Multiple Commonwealth & Asian Championship medals.", "initials": "VP" },
  { "name": "P. V. Sindhu", "sport": "Badminton", "blurb": "Olympic silver (2016) & bronze (2020); World Champion (2019).", "initials": "PVS" },
  { "name": "Saina Nehwal", "sport": "Badminton", "blurb": "Olympic bronze (2012); former World No.1.", "initials": "SN" },
  { "name": "Prakash Padukone", "sport": "Badminton", "blurb": "First Indian to win All England Open Badminton Championships (1980).", "initials": "PP" },
  { "name": "Pullela Gopichand", "sport": "Badminton", "blurb": "All England Open Badminton Champion (2001); renowned coach.", "initials": "PG" },
  { "name": "Neeraj Chopra", "sport": "Athletics", "blurb": "Olympic gold in javelin (Tokyo 2020, held 2021).", "initials": "NC" },
  { "name": "Anju Bobby George", "sport": "Athletics", "blurb": "World Championship bronze in long jump (2003).", "initials": "ABG" },
  { "name": "P. T. Usha", "sport": "Athletics", "blurb": "Multiple Asian Games golds; narrowly missed 1984 Olympic medal.", "initials": "PTU" },
  { "name": "Milkha Singh", "sport": "Athletics", "blurb": "The 'Flying Sikh'; legendary sprinter & Asian Games champion.", "initials": "MS" }
]



const galleryPlaceholders = [
  "🏑 Hockey", "🏏 Cricket", "🥇 Olympics", "🏸 Badminton",
  "🤼 Wrestling", "🔫 Shooting", "🥊 Boxing", "🏃 Athletics"
];

// ===========================================
// Helpers
// ===========================================
const $ = (sel, scope=document) => scope.querySelector(sel);
const $$ = (sel, scope=document) => Array.from(scope.querySelectorAll(sel));

function createEl(tag, className, html){
  const el = document.createElement(tag);
  if(className) el.className = className;
  if(html !== undefined) el.innerHTML = html;
  return el;
}

// Reveal on scroll
const onIntersect = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      onIntersect.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function revealify(el){
  el.classList.add('reveal');
  onIntersect.observe(el);
  return el;
}

// ===========================================
// Renderers
// ===========================================
function renderHistory(){
  const wrap = $("#history-list");
  wrap.innerHTML = "";
  [...historyEvents]
    .sort((a,b)=> String(a.year).localeCompare(String(b.year)))
    .forEach(ev => {
      const item = createEl("article", "timeline__item card");
      item.append(
        createEl("div", "timeline__year", ev.year),
        createEl("h3", "timeline__title", ev.title),
        createEl("p", "timeline__desc", ev.desc)
      );
      wrap.append(revealify(item));
    });
}

function renderTournaments(filter = "") {
  const list = document.getElementById("tournament-list");
  if (!list) return;

  list.innerHTML = "";
  const term = filter.trim().toLowerCase();

  // Color map for different sports/types
  const typeColors = {
    "multi-sport": "#FF9933", // orange
    "cricket": "#138808",     // green
    "hockey": "#ffffff",      // white
    "badminton": "#1E90FF",   // blue
    "wrestling": "#FFD700",   // gold
    "shooting": "#8A2BE2",    // purple
    "boxing": "#FF1493",      // pink
    "athletics": "#00CED1",   // cyan
    "martial arts": "#FFA500" // orange
  };

  // Flatten all tournaments
  const allTournaments = sportsTournaments.flatMap(sportObj =>
    sportObj.tournaments.map(t => ({
      sport: sportObj.sport,
      name: t.name,
      type: t.type,
      info: t.info
    }))
  );

  allTournaments
    .filter(t =>
      !term ||
      t.sport.toLowerCase().includes(term) ||
      t.name.toLowerCase().includes(term) ||
      t.type.toLowerCase().includes(term) ||
      t.info.toLowerCase().includes(term)
    )
    .forEach(t => {
      const card = document.createElement("article");
      card.className = "card";

      const title = document.createElement("h3");
      title.textContent = `${t.name} (${t.sport})`;

      const typeBadge = document.createElement("span");
      typeBadge.className = "type-badge";
      typeBadge.textContent = t.type;
      const key = t.type.toLowerCase();
      typeBadge.style.backgroundColor = typeColors[key] || "#ccc";
      typeBadge.style.color = key === "hockey" ? "#000" : "#fff";

      const info = document.createElement("p");
      info.textContent = t.info;

      card.append(title, typeBadge, info);
      list.appendChild(card);
    });
}

// Setup search filter
document.getElementById("tournament-search").addEventListener("input", e => {
  renderTournaments(e.target.value);
});

// Call once to render all tournaments initially
renderTournaments();


function renderAchievements(){
  const list = $("#achievement-list");
  list.innerHTML = "";
  achievements.forEach(a => {
    const card = createEl("article", "card");
    const title = createEl("h3", null, a.sport);
    card.append(title);

    // If categories exist (Cricket), render them
    if (a.categories) {
      a.categories.forEach(cat => {
        const catTitle = createEl("h4", null, cat.title);
        card.append(catTitle);
        const ul = createEl("ul");
        cat.points.forEach(p => {
          const li = createEl("li");
          li.textContent = p;
          ul.append(li);
        });
        card.append(ul);
      });
    } else if (a.points) {
      // For other sports
      const ul = createEl("ul");
      a.points.forEach(p => {
        const li = createEl("li");
        li.textContent = p;
        ul.append(li);
      });
      card.append(ul);
    }
    list.append(revealify(card));
  });
}

function renderAthletes(filter=""){
  const list = $("#athlete-list");
  list.innerHTML = "";
  const term = filter.trim().toLowerCase();
  athletes
    .filter(a => !term || a.name.toLowerCase().includes(term) || a.sport.toLowerCase().includes(term))
    .forEach(a => {
      const card = createEl("article", "card person");
      const avatar = createEl("div", "avatar", a.initials);
      const meta = createEl("div", "person__meta");
      meta.append(
        createEl("div", "person__name", a.name),
        createEl("div", "person__sport", a.sport),
        createEl("p", null, a.blurb)
      );
      card.append(avatar, meta);
      list.append(revealify(card));
    });
}

function renderGallery(){
  const grid = $("#gallery-grid");
  grid.innerHTML = "";
  galleryPlaceholders.forEach(label => {
    const t = createEl("div", "thumb", label);
    grid.append(revealify(t));
  });
}

// ===========================================
// Events & Boot
// ===========================================
function setupNav(){
  const toggle = $(".nav-toggle");
  const nav = $("#primary-nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  // Close nav on click (mobile)
  $$("#primary-nav a").forEach(a => a.addEventListener("click", ()=>{
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
  }));
}

function setupSearch(){
  $("#tournament-search").addEventListener("input", e => renderTournaments(e.target.value));
  $("#athlete-search").addEventListener("input", e => renderAthletes(e.target.value));
}

function setYear(){
  $("#year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupSearch();
  setYear();

  renderHistory();
  renderTournaments();
  renderAchievements();
  renderAthletes();
  renderGallery();
});
// ===========================================
// Auto-scroll achievement cards
// ===========================================
function setupAutoScrollAchievements() {
  const cards = document.querySelectorAll("#achievement-list .card");

  cards.forEach(card => {
    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    const delay = 20; // milliseconds between frames

    function autoScroll() {
      card.scrollTop = scrollAmount;
      scrollAmount += speed;

      // Reset scroll to top when reaching bottom
      if (scrollAmount >= card.scrollHeight - card.clientHeight) {
        scrollAmount = 0;
      }

      setTimeout(autoScroll, delay);
    }

    autoScroll();
  });
}

// ===========================================
// Document Ready
// ===========================================
document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupSearch();
  setYear();

  renderHistory();
  renderTournaments();
  renderAchievements();
  renderAthletes();
  renderGallery();

  // Auto-scroll achievements after rendering
  setupAutoScrollAchievements();
});
function renderTournaments(filter=""){
  const list = $("#tournament-list");
  list.innerHTML = "";
  const term = filter.trim().toLowerCase();

  // Color map for different types
  const typeColors = {
    "multi-sport": "#FF9933", // orange
    "cricket": "#138808",     // green
    "hockey": "#ffffff",      // white
    "badminton": "#1E90FF",   // blue
    "wrestling": "#FFD700",   // gold
    "kabaddi": "#FF4500",     // red-orange
    "shooting": "#8A2BE2"     // purple
  };

  tournaments
    .filter(t => !term || t.name.toLowerCase().includes(term) || t.type.toLowerCase().includes(term) || t.info.toLowerCase().includes(term))
    .forEach(t => {
      const card = createEl("article", "card");

      const title = createEl("h3", null, t.name);
      const typeBadge = createEl("span", "type-badge", t.type);
      const typeKey = t.type.toLowerCase();
      typeBadge.style.backgroundColor = typeColors[typeKey] || "#ccc"; // default gray
      typeBadge.style.color = typeKey === "hockey" ? "#000" : "#fff"; // black text for white background

      const info = createEl("p", null, t.info);

      card.append(title, typeBadge, info);
      list.append(revealify(card));
    });
}
