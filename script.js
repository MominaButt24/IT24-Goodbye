document.addEventListener('DOMContentLoaded', () => {
  const typed = new Typed('#typed-text', {
    strings: ["You truly leveled up! A thank you note 🌝"],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: true,
    cursorChar: "|",
    loop: false
  });

  // toggle Full Story
  const readStoryBtn = document.getElementById('readStoryBtn');
  const fullStory = document.getElementById('fullStory');

  readStoryBtn.addEventListener('click', () => {
    fullStory.classList.toggle('hidden');
    readStoryBtn.textContent = fullStory.classList.contains('hidden') ? 'Read Story' : 'Hide Story';
  });
});

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const message = "0101HelloIT24";
const fontSize = 16;
// const columns = Math.floor(canvas.width / fontSize);
// const drops = Array(columns).fill(1);
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);
let charIndex = 0; // Start of message

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = message.charAt(charIndex);
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
      }
      drops[i]++;
  }

  // Move to next character in the string (loop back if needed)
  charIndex = (charIndex + 1) % message.length;
}
// Code log memory story
const logs = [
  "Yo Juniorsss! ",
  "(Yes, you all who made me laugh, smile, and question my own viva choices, is it hard! 😭)",

  "First of all…",
  "WHO TOLD YOU ALL TO BE THAT BHT HI ACHA BACHAA?!",
  "I mean… “Where’s her crown?” “Best TA” “Sweetest api” like, stop it y’all, I’m blushing through my compiler 😩",

  "To the ones who said I'm helpful, polite, decent, logical , I’ll keep being your fav TA until further notice 🔥",
  "To those legends who said “inka to pata hi nahi” or “name pehli dafa suna” (iconic thaa) Stay mysterious 😂",
  "To the viva survivors, salute. I know I went a little tricky on you sometimes… but trust me, it was all taking your potential out ✨",
  "To the real ones who hyped my personality, knowledge, mutlab you guys made my day, every day! 🥳",
  "To those who said I’m strict — confession: I had to keep my “gussa” under control multiple times, trust me, jitni tum log atma tarpata ho hum TAs ki ...ye bara mushkil ho jata..😅 btw ma itna gussa nahi karti👉🏻👈🏻",

  "Being your TA wasn’t just a duty, it was a whole vibe.",
  "You made it FUN, and I’ll always remember that.",
  "Thank you for trusting me, learning with me, and even tolerating my viva questions 🙈",

  "You're all amazing. Stay curious, kind, and humble.",

  "Regards, Mominaaa"
];


let logIndex = 0;
const codeLog = document.getElementById("codeLog");

function toggleLog() {
  if (codeLog.style.display === "block") {
    codeLog.style.display = "none";
    codeLog.innerHTML = "";
    logIndex = 0;
    return;
  }

  codeLog.style.display = "block";
  const interval = setInterval(() => {
    if (logIndex >= logs.length) {
      clearInterval(interval);
      return;
    }

    const line = document.createElement("div");
    line.textContent = logs[logIndex];
    codeLog.appendChild(line);
    codeLog.scrollTop = codeLog.scrollHeight;
    logIndex++;
  }, 1500);
}

document.querySelectorAll('.three-box-section .box').forEach(box => {
  box.addEventListener('click', () => {
    // collapse any already expanded box
    document.querySelectorAll('.three-box-section .box').forEach(b => {
      if (b !== box) {
        b.classList.remove('active');
        resetBoxContent(b);
      }
    });

    // toggle current box
    box.classList.toggle('active');

    if (box.classList.contains('active')) {
      expandBoxContent(box);
    } else {
      resetBoxContent(box);
    }
  });
});

function expandBoxContent(box) {
  const id = box.id;
  if (id === 'suggestions') {
    box.innerHTML = `<h2>Suggestions</h2><p>Focus on Skills, Not Internships (yet!)
Instead of rushing into internships, first build the skills that’ll make you internship-ready. Trust me — solid foundations pay off more than random certifications.
<br>
💻 Level Up Your Coding Game
Pick a language (like C/C++ or Python) and get comfortable with Data Structures & Algorithms. Try solving problems on platforms like LeetCode, Codeforces, or GeeksforGeeks — even just 2–3 problems a week can grow your thinking immensely, it will build your resume.
<br>
🌐 Learn a Practical Skill
Whether it’s Web Development, App Development, Machine Learning, or AI, pick one area and actually build something.
<br>
🎯 Master OOP in this Summer
OOP is coming up next semester — get a headstart. Learn the concepts through real examples or mini-projects.
<br>
🧠 Understand, Don’t Just Memorize
Take time to revisit PF and OOP concepts so they stay with you longer than just exams. Because job interview/test will be on your probelm solving, oop ,dsa and db concepts...
<br>
🌱 Invest in Consistency
Even 1 hour a day, if spent with focus, can change your whole level. Don’t burn out — just stay consistent.
<br>
Remember: Internships will always be there — but your growth now will decide what kind of internship you deserve.
<br>
This summer is your chance to build, learn, and shine quietly 🌟 
</p>`;
  } else if (id === 'advice') {
    box.innerHTML = `<h2>Some Reminders</h2><p>Never stop asking questions. Even if they seem silly ,they’re often the smartest ones.
<br>
Don’t fear mistakes. They mean you’re trying. Debugging life is just like debugging code 😉
<br>
Be kind to others and to yourself. Both matter.
<br>
Grades fade, but skills and attitude stay. Focus on learning and being rooted, not on just marks.
<br>
Keep that curiosity alive. It's your superpower.
<br>
Support your batchmates. One day, they’ll be your biggest network.
<br>
Take breaks when it gets too much. Overheating isn’t just for CPUs 😅
<br>
Celebrate small wins. Passing a test case? Big deal! Be proud.
<br>
Stay humble — but never underestimate your potential. You’re capable of more than you think.</p>`;
  } else if (id === 'connect') {
    box.innerHTML = `<h2>Connect</h2>
     <ul class="social-icons">
        <a href="https://www.linkedin.com/in/momina-butt-839944248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZGLlg%2FgzQdS5QF2hYfnB6g%3D%3D">
                    <i class='bx bxl-linkedin'></i>
        </a>
        <a href="https://github.com/MominaButt24">
                    <i class='bx bxl-github'></i>
                </a>
        <a href="mailto:bmomina752@gmail.com">
          <i class='bx bx-envelope'></i>

        </a>
      </ul>`;
  }
}

function resetBoxContent(box) {
  const id = box.id;
  if (id === 'suggestions') {
    box.innerHTML = `<h2>Some Suggestions</h2><p>Click to see</p>`;
  } else if (id === 'advice') {
    box.innerHTML = `<h2>Gentle Reminders</h2><p>Click to see</p>`;
  } else if (id === 'connect') {
    box.innerHTML = `<h2>Connect</h2><p>Click to see</p>`;
  }
}


const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navigation');

menuIcon.onclick = () => {
    // check if the navbar is currently hidden
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = "block"; // show the navbar
        menuIcon.classList.remove('bx-menu'); // remove the original menu icon class
        menuIcon.classList.add('bx-x'); // add the close icon class
    } else {
        navbar.style.display = 'none'; 
        menuIcon.classList.remove('bx-x'); 
        menuIcon.classList.add('bx-menu'); 
    }

    navbar.classList.toggle('active'); // toggle the 'active' class on the navbar
};

// handle screen resize to reset styles
window.onresize = () => {
    if (window.innerWidth > 768) { // Assuming 768px is the breakpoint
        navbar.style.display = ''; // Reset inline styles
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
};
setInterval(drawMatrix, 80);
