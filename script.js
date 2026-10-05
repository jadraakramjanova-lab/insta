// ===============================
// INSTAGOLD — INSTAGRAM CLONE UI
// ===============================


// ---------- MA'LUMOTLAR ----------

const storiesData = [
    {
        name: "jadra_dev",
        avatar: "AJ",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700"
    },
    {
        name: "sardor_dev",
        avatar: "SD",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700"
    },
    {
        name: "madina_ui",
        avatar: "MU",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700"
    },
    {
        name: "akmal_code",
        avatar: "AC",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700"
    },
    {
        name: "design_uz",
        avatar: "DU",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700"
    },
    {
        name: "tech_world",
        avatar: "TW",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700"
    }
];


let posts = [
    {
        id: 1,
        user: "jadra_dev",
        avatar: "AJ",
        location: "Toshkent, O‘zbekiston",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
        likes: 428,
        caption: "Bugun yangi IT loyihamiz ustida ishlayapmiz 🚀",
        comments: 24
    },

    {
        id: 2,
        user: "sardor_dev",
        avatar: "SD",
        location: "Samarqand",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
        likes: 712,
        caption: "Kod yozish — bu shunchaki ish emas, bu ijod 💻✨",
        comments: 48
    },

    {
        id: 3,
        user: "madina_ui",
        avatar: "MU",
        location: "Buxoro",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000",
        likes: 583,
        caption: "Yangi dizayn konseptini tugatdik 🎨",
        comments: 31
    }
];


const suggestions = [
    ["azizbek_js", "Siz kuzatadiganlar orasida"],
    ["dilnoza_design", "Yangi Instagram foydalanuvchisi"],
    ["webmaster_uz", "Mashhur"],
    ["frontend_uz", "Siz uchun tavsiya"],
    ["code_master", "Yangi foydalanuvchi"]
];


// ---------- ELEMENTLAR ----------

const storiesContainer = document.getElementById("stories");
const feedContainer = document.getElementById("feed");
const suggestionsContainer = document.getElementById("suggestions");


// ---------- STORIES ----------

function renderStories() {

    storiesContainer.innerHTML = "";

    storiesData.forEach((story, index) => {

        const item = document.createElement("div");

        item.className = "story";

        item.innerHTML = `
            <div class="story-avatar">
                <div class="avatar">${story.avatar}</div>
            </div>

            <span class="story-name">${story.name}</span>
        `;

        item.addEventListener("click", () => {
            openStory(index);
        });

        storiesContainer.appendChild(item);
    });
}


// ---------- POSTLAR ----------

function renderPosts() {

    feedContainer.innerHTML = "";

    posts.forEach(post => {

        const article = document.createElement("article");

        article.className = "post";

        article.innerHTML = `

            <div class="post-header">

                <div class="avatar">
                    ${post.avatar}
                </div>

                <div class="post-user">
                    <strong>${post.user}</strong>
                    <span>${post.location}</span>
                </div>

                <button class="more">•••</button>

            </div>


            <img
                class="post-image"
                src="${post.image}"
                alt="Post"
            >


            <div class="post-actions">

                <button class="like-btn" data-id="${post.id}">
                    ♡
                </button>

                <button>
                    ♧
                </button>

                <button>
                    ➤
                </button>

                <button class="bookmark">
                    ♢
                </button>

            </div>


            <div class="post-info">

                <div class="likes">
                    <span id="likes-${post.id}">
                        ${post.likes}
                    </span>
                    ta yoqtirish
                </div>

                <div class="caption">
                    <strong>${post.user}</strong>
                    ${post.caption}
                </div>

                <span class="comments-link">
                    ${post.comments} ta izohni ko‘rish
                </span>


                <div class="comment-form">

                    <input
                        type="text"
                        placeholder="Izoh qoldiring..."
                        id="comment-${post.id}"
                    >

                    <button onclick="addComment(${post.id})">
                        Yuborish
                    </button>

                </div>

            </div>
        `;

        feedContainer.appendChild(article);
    });


    activateLikeButtons();
}


// ---------- LIKE ----------

function activateLikeButtons() {

    document.querySelectorAll(".like-btn").forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const post = posts.find(item => item.id === id);

            if (!post) return;


            if (button.classList.contains("liked")) {

                post.likes--;

                button.classList.remove("liked");

                button.innerText = "♡";

            } else {

                post.likes++;

                button.classList.add("liked");

                button.innerText = "♥";
            }


            document.getElementById(`likes-${id}`).innerText =
                post.likes;
        });
    });
}


// ---------- COMMENT ----------

function addComment(id) {

    const input = document.getElementById(`comment-${id}`);

    if (!input.value.trim()) {
        return;
    }

    const post = posts.find(item => item.id === id);

    if (post) {
        post.comments++;
    }

    input.value = "";

    renderPosts();
}


// ---------- SUGGESTIONS ----------

function renderSuggestions() {

    suggestionsContainer.innerHTML = "";

    suggestions.forEach(item => {

        const suggestion = document.createElement("div");

        suggestion.className = "suggestion";

        suggestion.innerHTML = `

            <div class="avatar">
                ${item[0].substring(0, 2).toUpperCase()}
            </div>

            <div class="suggestion-info">
                <strong>${item[0]}</strong>
                <span>${item[1]}</span>
            </div>

            <button class="follow-btn">
                Kuzatish
            </button>
        `;

        suggestionsContainer.appendChild(suggestion);
    });


    document.querySelectorAll(".follow-btn").forEach(button => {

        button.addEventListener("click", () => {

            if (button.innerText === "Kuzatish") {
                button.innerText = "Kuzatilmoqda";
            } else {
                button.innerText = "Kuzatish";
            }

        });
    });
}


// ---------- SEARCH ----------

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function openSearch() {

    searchOverlay.classList.add("show");

    setTimeout(() => {
        searchInput.focus();
    }, 100);
}

function closeSearch() {

    searchOverlay.classList.remove("show");

    searchInput.value = "";

    searchResults.innerHTML = "";
}


document.getElementById("searchBtn")
    .addEventListener("click", openSearch);

document.getElementById("mobileSearch")
    .addEventListener("click", openSearch);

document.getElementById("closeSearch")
    .addEventListener("click", closeSearch);


searchInput.addEventListener("input", () => {

    const value = searchInput.value
        .toLowerCase()
        .trim();

    searchResults.innerHTML = "";

    if (!value) return;


    const results = [
        ...suggestions.map(item => item[0]),
        ...storiesData.map(item => item.name),
        ...posts.map(item => item.user)
    ];


    const filtered = [...new Set(
        results.filter(name =>
            name.toLowerCase().includes(value)
        )
    )];


    if (!filtered.length) {

        searchResults.innerHTML = `
            <p style="color:#777; padding:20px 0;">
                Hech narsa topilmadi.
            </p>
        `;

        return;
    }


    filtered.forEach(name => {

        const item = document.createElement("div");

        item.className = "search-result";

        item.innerHTML = `
            <div class="avatar">
                ${name.substring(0,2).toUpperCase()}
            </div>

            <div>
                <strong>${name}</strong>
                <p style="color:#777;font-size:11px;margin-top:4px;">
                    Instagram foydalanuvchisi
                </p>
            </div>
        `;

        searchResults.appendChild(item);
    });
});


// ---------- STORY ----------

const storyModal = document.getElementById("storyModal");

function openStory(index) {

    const story = storiesData[index];

    document.getElementById("storyAvatar").innerText =
        story.avatar;

    document.getElementById("storyName").innerText =
        story.name;

    document.getElementById("storyImage").src =
        story.image;

    storyModal.classList.add("show");
}


document.getElementById("closeStory")
    .addEventListener("click", () => {
        storyModal.classList.remove("show");
    });


// ---------- CREATE POST ----------

const createModal = document.getElementById("createModal");

document.getElementById("createBtn")
    .addEventListener("click", () => {
        createModal.classList.add("show");
    });

document.getElementById("closeCreate")
    .addEventListener("click", () => {
        createModal.classList.remove("show");
    });


document.getElementById("publishPost")
    .addEventListener("click", () => {

        const image =
            document.getElementById("newPostImage").value.trim();

        const caption =
            document.getElementById("newPostCaption").value.trim();


        if (!image) {

            alert("Iltimos, rasm URL manzilini kiriting.");

            return;
        }


        const newPost = {

            id: Date.now(),

            user: "jadra_dev",

            avatar: "AJ",

            location: "Toshkent, O‘zbekiston",

            image: image,

            likes: 0,

            caption: caption || "Yangi post ✨",

            comments: 0
        };


        posts.unshift(newPost);

        renderPosts();

        document.getElementById("newPostImage").value = "";

        document.getElementById("newPostCaption").value = "";

        createModal.classList.remove("show");
    });


// ---------- PROFILE ----------

const profileModal =
    document.getElementById("profileModal");

const profileGrid =
    document.getElementById("profileGrid");


function openProfile() {

    profileGrid.innerHTML = "";

    posts.forEach(post => {

        const img = document.createElement("img");

        img.src = post.image;

        profileGrid.appendChild(img);
    });


    document.getElementById("postCount").innerText =
        posts.length;

    profileModal.classList.add("show");
}


document.getElementById("profileBtn")
    .addEventListener("click", openProfile);

document.getElementById("closeProfile")
    .addEventListener("click", () => {
        profileModal.classList.remove("show");
    });


// ---------- XABARLAR ----------

const messageModal =
    document.getElementById("messageModal");


document.getElementById("messageBtn")
    .addEventListener("click", () => {
        messageModal.classList.add("show");
    });


document.getElementById("closeMessage")
    .addEventListener("click", () => {
        messageModal.classList.remove("show");
    });


// ---------- KASHF ETISH ----------

document.getElementById("exploreBtn")
    .addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        alert(
            "Kashf etish bo‘limi uchun yangi sahifa yaratish mumkin 🔥"
        );
    });


// ---------- BARCHA STORY ----------

document.getElementById("allStories")
    .addEventListener("click", () => {

        openStory(0);
    });


// ---------- TASHQARI BOSILGANDA MODAL YOPISH ----------

document.querySelectorAll(".overlay")
    .forEach(overlay => {

        overlay.addEventListener("click", event => {

            if (event.target === overlay) {
                overlay.classList.remove("show");
            }

        });
    });


// ---------- ESC ----------

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".overlay")
            .forEach(item => {
                item.classList.remove("show");
            });
    }
});


// ---------- ISHGA TUSHIRISH ----------

renderStories();
renderPosts();
renderSuggestions();