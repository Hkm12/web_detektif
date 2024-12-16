const ruleModal = document.querySelector('.rules-modal');
const startTestButton = document.querySelector('.start-test-button');

const soal = document.querySelector(".soal-quiz");
const timer = document.querySelector("header .timer");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const wrapper2 = document.querySelector(".form-wrapper2 ");

// Window onload

window.onload = function() {
    ruleModal.style.display = 'block';
    soal.style.display = 'none';
};

// Memulai tes setelah tombol "Mulai Tes" ditekan
startTestButton.addEventListener('click', function() {
  ruleModal.style.display = 'none';
  soal.style.display = 'block';
  timer.style.top = '0';
  wrapper2.style.padding = '0';
  startTest();
});

// Start Test

function startTest() {
    soal.style.display = 'block';
    timer.style.display = 'flex';
    const container = document.querySelector('.number');
    for (let i = 0; i < ques.length; i++) {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <p class="form-label">${i + 1}. ${ques[i].question}</p>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt1}">
                ${ques[i].opt1}<span class="formbold-radio-checkmark"></span></label></div>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt2}">
                ${ques[i].opt2}<span class="formbold-radio-checkmark"></span></label></div>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt3}">
                ${ques[i].opt3}<span class="formbold-radio-checkmark"></span></label></div>
            <div class="formbold-radio-group"><label class="form-label"><input class= class="pilihan-ganda" type="radio" name="question${i}" value="${ques[i].opt4}">
                ${ques[i].opt4}<span class="formbold-radio-checkmark"></span></label></div>
                <br>
        `;
        container.appendChild(questionElement);
    }
    // const isians = document.querySelector('.isian');
    // for (let i = 0; i < is.length; i++) {
    //     const isianElement = document.createElement('div');
    //     isianElement.innerHTML = `
    //         <p class="form-label">${i + 1}. ${is[i].question}</p>
    //         <div class="formbold-radio-group">
    //         <input
    //           type="text"
    //           placeholder="Jawaban"
    //           class="input-isian"
    //           name="isian${i}" 
    //         />
    //         </div>
    //             <br>
    //     `;
    //     isians.appendChild(isianElement);
    // }
    startTimer(300);
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let correctAnswers = 0;

    for (let i = 0; i < ques.length; i++) {
        const radios = document.getElementsByName(`question${i}`);
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                if (radios[j].value === ques[i].ans) {
                    correctAnswers++;
                }
                break;
            }
        }
    }

    let soal_byk = ques.length;
    let result_box = document.querySelector('.result_box');
    soal.style.display = 'none';
    timer.style.display = 'none';
    result_box.classList.add("activeResult");

    // Menampilkan skor
   // Menampilkan skor dengan tambahan spasi
    const scoreText = result_box.querySelector(".score_text");
    scoreText.innerHTML = `
    <span>
        Kamu mendapatkan point <strong> ${correctAnswers} </strong> dari <strong> ${soal_byk} </strong> soal
    </span>
`;

    // Menampilkan medali atau pesan
    displayMedal(correctAnswers, soal_byk);

    const quitButton = document.querySelector('.keluar');
    quitButton.addEventListener('click', function() {
        const imageUrl = '../test.html';
        const link = document.createElement('a');
        link.href = imageUrl;
        link.click();
    });

    // Fungsi menampilkan medali atau pesan
    function displayMedal(correctAnswers, soal_byk) {
        const medalDisplay = document.querySelector('.medal_display');
        medalDisplay.innerHTML = ''; // Kosongkan elemen medali

        if (correctAnswers >= 10) {
            // Tampilkan Medali Emas
            const medaliImage = document.createElement('img');
            medaliImage.src = 'badges/goldMedal.jpeg';
            medaliImage.alt = 'Medali Emas';
            medaliImage.classList.add('medali');
            medalDisplay.appendChild(medaliImage);
        } else if (correctAnswers >= 8) {
            // Tampilkan Medali Perak
            const medaliImage = document.createElement('img');
            medaliImage.src = 'badges/silverMedal.jpeg';
            medaliImage.alt = 'Medali Perak';
            medaliImage.classList.add('medali');
            medalDisplay.appendChild(medaliImage);
        } else if (correctAnswers >= 6) {
            // Tampilkan Medali Perunggu
            const medaliImage = document.createElement('img');
            medaliImage.src = 'badges/bronzeMedal.jpeg';
            medaliImage.alt = 'Medali Perunggu';
            medaliImage.classList.add('medali');
            medalDisplay.appendChild(medaliImage);
        } else {
            // Tampilkan pesan dan tombol ulangi
            medalDisplay.innerHTML = `
                <p style="font-size: 18px; text-align: center; color: red;">
                    Maaf, kamu belum memenuhi syarat untuk mendapatkan medali, yuk coba lagi.
                </p>

              
            `;

            const replayButton = document.querySelector('.replay');
            replayButton.addEventListener('click', function() {
                window.location.reload();
            });
        }
    }
});





function startTimer(time) {
    let counter = setInterval(function () {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            timeCount.textContent = "0" + time;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Waktu Habis";
            soal.style.display = 'none';
        }
    }, 1000);
}


// function startTimer(time) {
//     counter = setInterval(timer, 1000);
//     function timer() {
//         timeCount.textContent = time;
//         time--;
//         if (time < 9) {
//             let addZero = timeCount.textContent;
//             timeCount.textContent = "0" + addZero;
//         }
//         if (time < 0) {
//             clearInterval(counter);
//             timeText.textContent = "Waktu Habis";
//             const soal = document.querySelector(".atas");
//             const isi = document.querySelector(".isi");
//             isi.style.display = 'none';
//             soal.style.display = 'none';
//         }
//     }
// }