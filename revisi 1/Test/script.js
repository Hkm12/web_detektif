// Filter Array
let filterarray = [];

// Gallery Card List for manipulation
let galleryarray = [
    {
        id: 1,
        name: "Matematika",
        src: "../Images/Stuff/test_pecahan.png",
        test: "List/test1.html",
        desc: "Test Materi Pecahan"
    },
    {
        id: 2,
        name: "Matematika",
        src: "../Images/Stuff/test_bangun_datar.png",
        test: "List/test2.html",
        desc: "Test Materi Bangun Datar"
    },
    {
        id: 3,
        name: "Matematika",
        src: "../Images/Stuff/test_bilngn_cacah.png",
        test: "List/test3.html",
        desc: "Test Materi Bilangan Cacah"
    },
];

// Initialize Gallery
showgallery(galleryarray);

// Showing the Card
function showgallery(cardList) {
    let cards = '';
    cardList.forEach(card => {
        cards += `
            <div class="col-md-4 mt-3">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${card.name}</h4>
                    <img src="${card.src}" width="100%" height="320px"/>
                    <p class="mt-2">${card.desc}</p>
                    <a href="${card.test}">
                        <button class="btn w-100 mx-auto">Mulai</button>
                    </a>
                </div>
            </div>
        `;
    });
    document.getElementById("card").innerHTML = cards;
}

// Live searching
// document.getElementById("myinput").addEventListener("keyup", function () {
//     let text = document.getElementById("myinput").value;

//     filterarray = galleryarray.filter(function (a) {
//         if (a.name.toLowerCase().includes(text.toLowerCase())) {
//             return a.name;
//         }
//     });

//     if (this.value == "") {
//         showgallery(galleryarray);
//     } else {
//         if (filterarray == "") {
//             document.getElementById("para").style.display = 'block';
//             document.getElementById("card").innerHTML = "";
//         } else {
//             showgallery(filterarray);
//             document.getElementById("para").style.display = 'none';
//         }
//     }
// });
