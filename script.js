/* ==========================================
   FIREBASE REAL-TIME CLOUD SERVICE
   ========================================== */
let db = null;
let storage = null;

if (typeof firebase !== "undefined") {
  const firebaseConfig = {
    apiKey: "AIzaSyCeX9Gs-8FMd_ihixkbp7cV_dn2ktaMuHw",
    authDomain: "titin-and-luke-wedding.firebaseapp.com",
    projectId: "titin-and-luke-wedding",
    storageBucket: "titin-and-luke-wedding.firebasestorage.app",
    messagingSenderId: "1035247407314",
    appId: "1:1035247407314:web:7cba046c7117c852c95d0b",
    measurementId: "G-TW5M9Z0B10"
  };
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  storage = firebase.storage();
}

/* ==========================================
   BILINGUAL TRANSLATION DICTIONARY
   ========================================== */
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.itinerary": "Itinerary",
    "nav.concierge": "Concierge",
    "nav.gallery": "Photo Hub",
    
    // Header Toggle
    "lang.label": "ID",

    // Home / Index
    "hero.subtitle": "The Wedding Celebration of",
    "hero.and": "and",
    "hero.details": "Sunday, the Twenty-Second of August, Two Thousand and Twenty-Seven • Bali",
    "hero.days": "Days",
    "hero.hours": "Hours",
    "hero.minutes": "Minutes",
    "hero.seconds": "Seconds",
    "hero.rsvp": "Request Attendance",
    "hero.location": "The Anvaya Bali Beach Resort, Kuta, Bali",
    "home.welcome.title": "The Auspicious Union",
    "home.welcome.text": "It is with immense joy that we invite you to share in the celebration of our union. In the heart of tropical paradise, where the ocean whispers to the shore, we shall pledge our lifelong devotion. Your presence on this momentous occasion would be our greatest honour.",

    // Story Page
    "story.title": "Our Journey",
    "story.subtitle": "A Chronicle of Devotion",
    "story.c1.num": "Chapter I",
    "story.c1.title": "How It All Began",
    "story.c1.desc": "It all started at work, amidst the world of home loans. Titin was determined to be involved, cleverly hiding her growing interest in Luke by feigning an intense dedication to helping the customers. But the real turning point came on the 5th of August, 2022, at a work party. Titin arrived wearing a stunning white dress, and Luke simply could not take his eyes off her.<br><br>That night, they put all their cards on the table. They tried to playfully scare each other off, with Titin revealing she was (slightly!) older and introducing the fact that she had a wonderful 15-year-old daughter, Ellyn, while Luke proudly shared his unapologetic love for anime and video games. Instead of scaring each other away, the connection only deepened. They left the party together, heading to the Melbourne Docklands, where they talked for what felt like hours. It was right there, by the water, that Luke knew he had found the woman he was going to spend the rest of his life with.",
    "story.c2.num": "Chapter II",
    "story.c2.title": "The Proposal",
    "story.c2.desc": "Fast forward to Valentine’s Day. Luke had meticulously planned a romantic proposal picnic at Mt Dandenong, but the weather had other ideas. Thinking on his feet, he pivoted to a surprise indoor picnic at home.<br><br>When Titin walked in, she was greeted by a spectacular spread of food, with rose petals and paper love hearts scattered across the table and floor. Luke got down on one knee and asked her to be his wife, with Ellyn right there as their perfect witness. Titin was in such complete shock that she actually turned to Ellyn to ask if it was real! After a gentle reminder from Luke that he was, in fact, waiting for an answer, she quickly and joyfully said yes. It was a happy, romantic, and hilarious moment that perfectly sums up their relationship.",
    "story.c3.num": "Chapter III",
    "story.c3.title": "The Beautiful Chaos of Life Today",
    "story.c3.desc": "Today, Luke and Titin are a true power couple. Titin is working incredibly hard to develop her own business, while Ellyn is busy studying and growing a business of her own. Luke is the supportive force that ties it all together, ensuring his girls can live their best, happiest, and healthiest lives in a warm, loving home.<br><br>Life in their household is a wonderful kind of chaos. On any given day, you might hear a symphony of Ellyn’s random chicken songs, the resonant hum of Titin’s sound bowls, and the crackle of video game gunfire from Luke echoing from different rooms. But no matter what they are doing, the best memories are always made when they come together, whether that means piling onto the couch for a movie night or heading out on a family excursion to Kmart.",

    // Itinerary Page
    "itinerary.title": "The Golden Thread",
    "itinerary.subtitle": "The Schedule of Events",
    "itinerary.day": "Sunday, 22nd August 2027",
    "itinerary.time.1530": "15:30",
    "itinerary.title.1530": "The Gathering",
    "itinerary.desc.1530": "Guests are cordially invited to arrive at The Anvaya Bali Beach Resort. Enjoy light refreshments and the gentle sea breeze as we prepare for the ceremony.",
    "itinerary.time.1600": "16:00",
    "itinerary.title.1600": "The Sacred Vows",
    "itinerary.desc.1600": "The marriage ceremony will commence on the beachfront lawn. Please join us as we pledge our lifetime devotion under the tropical sky.",
    "itinerary.time.1830": "18:30",
    "itinerary.title.1830": "The Grand Reception",
    "itinerary.desc.1830": "An elegant evening of fine dining, heartfelt speeches, and classical Indonesian and contemporary music under the stars.",

    // Concierge Page
    "concierge.title": "Digital Concierge",
    "concierge.subtitle": "Travel Support & Information",
    "concierge.intro": "To ensure your journey from Australia to Bali is as seamless and luxurious as possible, we have compiled essential travel protocols and visa requirements below. Please review these details prior to your departure.",
    "concierge.visa.title": "Visa Regulations (e-VoA)",
    "concierge.visa.content": "All Australian passport holders entering Indonesia for tourism require a Visa on Arrival (VoA). We strongly advise applying for the <strong>electronic Visa on Arrival (e-VoA)</strong> online via the official Indonesian Immigration portal at least 14 days prior to travel. This permits a stay of up to 30 days and allows you to bypass airport queues.",
    "concierge.customs.title": "Electronic Customs Declaration",
    "concierge.customs.content": "Indonesia mandates that all arriving passengers complete an <strong>Electronic Customs Declaration (e-CD)</strong>. You may fill this form online up to 3 days prior to your flight. Upon completion, a QR code will be generated, which must be presented to customs officials upon arrival in Bali.",
    "concierge.flights.title": "Flight Recommendations",
    "concierge.flights.content": "Direct flights to Ngurah Rai International Airport (DPS) in Bali depart daily from major Australian cities, including Sydney, Melbourne, Brisbane, and Perth. Prominent carriers include Qantas, Virgin Australia, and Garuda Indonesia. We recommend securing your flights 6 to 9 months in advance for premium availability.",
    "concierge.resort.title": "Accommodation & Venue",
    "concierge.resort.content": "The wedding proceedings will take place at <strong>The Anvaya Bali Beach Resort</strong>, a five-star luxury beachfront sanctuary in Kuta, Bali. We have secured a select allocation of suites and villas at preferential rates for our guests. Please contact the concierge desk with our booking reference code for reservation assistance.",

    // Gallery Page
    "gallery.title": "Live Photo Hub",
    "gallery.subtitle": "Preserving the Moments",
    "gallery.upload.title": "Upload a Moment",
    "gallery.upload.desc": "Share your perspective of our special day. Drag and drop your photographs here, or browse your local storage.",
    "gallery.upload.btn": "Choose File",
    "gallery.upload.caption": "Enter a short caption...",
    "gallery.upload.name": "Your Name",
    "gallery.upload.submit": "Submit to Gallery",
    "gallery.upload.error.type": "Please select a valid image file (JPEG, PNG, WebP). SVGs are not permitted.",
    "gallery.upload.error.size": "Image size must be less than 2MB.",
    "gallery.upload.success": "Your photograph has been successfully uploaded and added to the Live Gallery.",
    "gallery.uploading": "Uploading photograph...",
    "gallery.empty": "No images have been uploaded yet. Be the first to share a moment!",
    "gallery.u.caption.1": "The Sunset Vows",
    "gallery.u.uploader.1": "By Elizabeth Penfold",
    "gallery.u.caption.2": "Laughter at the Reception",
    "gallery.u.uploader.2": "By Michael & Sarah",
    "gallery.u.caption.3": "Stunning Anvaya Ocean View",
    "gallery.u.uploader.3": "By Dian Mubarokah",
    "gallery.u.caption.4": "The First Dance",
    "gallery.u.uploader.4": "By James Henderson",

    // Wedding Party Page
    "nav.party": "Wedding Party",
    "party.title": "The Wedding Party",
    "party.subtitle": "Our Closest Circle",
    "party.groomsmen": "Groom's Side",
    "party.bridesmaids": "Bride's Side",
    "party.desc": "We are honored to have our closest friends and family stand by our side as we begin our life together. Click on any profile to get to know them.",
    "party.relations.title": "Relation to Couple",
    "party.facts.title": "Fun Fact",
    "party.quotes.title": "Warm Message",

    "party.role.james": "Best Man",
    "party.relation.james": "Luke's Childhood Best Friend",
    "party.fact.james": "Once lost his surfboard to a sea turtle in Uluwatu.",
    "party.quote.james": "'So proud of Luke and Titin. Excited to celebrate their beautiful union in Bali!'",

    "party.role.michael": "Groomsman",
    "party.relation.michael": "Luke's Older Brother",
    "party.fact.michael": "Can quote every line from classic British comedies.",
    "party.quote.michael": "'Welcoming Titin into our family has been a joy. Here is to a lifetime of love!'",

    "party.role.thomas": "Groomsman",
    "party.relation.thomas": "Luke's University Roommate",
    "party.fact.thomas": "Has traveled to 30 countries but still gets lost in his hometown.",
    "party.quote.thomas": "'Luke finally found his matching puzzle piece. So happy for you both!'",

    "party.role.dian": "Maid of Honour",
    "party.relation.dian": "Titin's Eldest Sister",
    "party.fact.dian": "An expert Balinese culinary home chef who makes the spiciest sambal.",
    "party.quote.dian": "'Saya sangat bahagia melihat adik saya bersanding dengan Luke. Semoga langgeng!'",

    "party.role.sarah": "Bridesmaid",
    "party.relation.sarah": "Titin's High School Best Friend",
    "party.fact.sarah": "Collects vintage batik textiles and reads historical novels.",
    "party.quote.sarah": "'Titin has always been the kindest soul. Seeing her happy with Luke is a dream come true.'",

    "party.role.ayu": "Bridesmaid",
    "party.relation.ayu": "Titin's Favorite Cousin",
    "party.fact.ayu": "A trained traditional Javanese dancer who loves modern K-Pop.",
    "party.quote.ayu": "'Selamat menempuh hidup baru Luke dan Kak Titin! Let's dance the night away!'"
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.story": "Kisah Kami",
    "nav.itinerary": "Jadwal Acara",
    "nav.concierge": "Layanan Tamu",
    "nav.gallery": "Galeri Foto",
    
    // Header Toggle
    "lang.label": "EN",

    // Home / Index
    "hero.subtitle": "Perayaan Pernikahan Mulia",
    "hero.and": "dan",
    "hero.details": "Minggu, Dua Puluh Dua Agustus, Dua Ribu Dua Puluh Tujuh • Bali",
    "hero.days": "Hari",
    "hero.hours": "Jam",
    "hero.minutes": "Menit",
    "hero.seconds": "Detik",
    "hero.rsvp": "Konfirmasi Kehadiran",
    "hero.location": "The Anvaya Bali Beach Resort, Kuta, Bali",
    "home.welcome.title": "Penyatuan yang Suci",
    "home.welcome.text": "Merupakan suatu kehormatan dan kebahagiaan yang mendalam bagi kami untuk mengundang Bapak/Ibu/Saudara/i dalam merayakan perikatan suci kami. Di jantung surga tropis yang indah, tempat samudera membisikkan janji kepada pantai, kami akan mengikrarkan kesetiaan seumur hidup. Kehadiran serta doa restu Anda pada hari yang bersejarah ini adalah anugerah terindah bagi kami.",

    // Story Page
    "story.title": "Kisah Perjalanan",
    "story.subtitle": "Lembaran Kasih dan Pengabdian",
    "story.c1.num": "Bagian I",
    "story.c1.title": "Awal Mula Kisah Kami",
    "story.c1.desc": "Semua bermula di tempat kerja, di tengah kesibukan dunia kredit pemilikan rumah. Titin bertekad untuk terlibat aktif, dengan anggun menyembunyikan ketertarikannya yang tumbuh pada Luke lewat dedikasi tinggi dalam membantu para nasabah. Namun, titik balik yang sesungguhnya terjadi pada tanggal 5 Agustus 2022, dalam sebuah perayaan kantor. Titin hadir mengenakan gaun putih yang sangat anggun, dan Luke sama sekali tidak dapat mengalihkan pandangan darinya.<br><br>Malam itu, mereka saling terbuka satu sama lain. Mereka sempat mencoba untuk saling 'menguji' secara jenaka; Titin mengungkapkan bahwa usianya sedikit lebih dewasa dan memperkenalkan putri kesayangannya, Ellyn, yang saat itu berusia 15 tahun, sementara Luke menceritakan kecintaannya yang besar pada anime dan permainan video. Bukannya menjauh, ikatan di antara keduanya justru kian mendalam. Mereka meninggalkan acara bersama menuju kawasan Melbourne Docklands, lalu berbincang selama berjam-jam. Di tepi perairan itulah, Luke menyadari sepenuhnya bahwa ia telah menemukan wanita yang akan mendampingi hidupnya selamanya.",
    "story.c2.num": "Bagian II",
    "story.c2.title": "Momen Lamaran",
    "story.c2.desc": "Waktu berlalu hingga tibanya Hari Valentine. Luke telah merencanakan dengan saksama sebuah lamaran piknik yang romantis di Gunung Dandenong, namun cuaca buruk memaksa rencana tersebut berubah. Berpikir cepat, ia mengalihkan rencana tersebut menjadi sebuah kejutan piknik di dalam rumah.<br><br>Saat Titin melangkah masuk, ia disambut oleh hidangan yang ditata indah, dengan kelopak bunga mawar dan kertas berbentuk hati yang tersebar di meja serta lantai. Luke bersujud dengan satu lutut dan memohon kesediaan Titin untuk menjadi istrinya, dengan Ellyn yang hadir sebagai saksi yang sempurna. Titin berada dalam kondisi sangat terkejut hingga ia berpaling kepada Ellyn untuk menanyakan apakah momen ini nyata! Setelah Luke mengingatkannya dengan lembut bahwa ia sedang menantikan jawaban, Titin dengan cepat dan penuh sukacita menyatakan kesediaannya. Momen yang bahagia, romantis, sekaligus jenaka ini menggambarkan keselarasan hubungan mereka dengan sangat sempurna.",
    "story.c3.num": "Bagian III",
    "story.c3.title": "Indahnya Harmoni Kehidupan Saat Ini",
    "story.c3.desc": "Saat ini, Luke dan Titin merupakan pasangan yang saling mendukung dengan luar biasa. Titin bekerja sangat keras untuk mengembangkan bisnis pribadinya, sementara Ellyn juga disibukkan oleh studi serta rintisan usahanya sendiri. Luke menjadi pilar pendukung yang menyatukan semuanya, memastikan bahwa keluarga tercintanya dapat menjalani kehidupan terbaik, terbahagia, dan tersehat dalam kehangatan rumah tangga yang penuh kasih.<br><br>Kehidupan di rumah mereka dipenuhi oleh harmoni yang menyenangkan. Pada hari-hari biasa, Anda dapat mendengar paduan suara lagu ayam jenaka ciptaan Ellyn, dengung syahdu dari mangkuk suara terapi (sound bowl) milik Titin, dan riuh suara permainan video Luke yang bersahut-sahutan dari ruangan yang berbeda. Namun, bagaimanapun kesibukan masing-masing, kenangan terindah selalu tercipta saat mereka berkumpul bersama, baik itu saat bersantai di sofa untuk menonton film bersama maupun saat bepergian bersama keluarga menuju Kmart.",

    // Itinerary Page
    "itinerary.title": "Untaian Emas",
    "itinerary.subtitle": "Rangkaian Prosesi Pernikahan",
    "itinerary.day": "Minggu, 22 Agustus 2027",
    "itinerary.time.1530": "15:30",
    "itinerary.title.1530": "Penyambutan Tamu",
    "itinerary.desc.1530": "Para tamu undangan dipersilakan tiba di The Anvaya Bali Beach Resort. Nikmati hidangan penyegar dan hembusan angin laut sembari menanti dimulainya prosesi.",
    "itinerary.time.1600": "16:00",
    "itinerary.title.1600": "Akad & Upacara Khidmat",
    "itinerary.desc.1600": "Upacara pernikahan suci akan dilangsungkan di area taman tepi pantai. Mohon restunya saat kami mengikrarkan janji setia di bawah langit tropis.",
    "itinerary.time.1830": "18:30",
    "itinerary.title.1830": "Resepsi Agung",
    "itinerary.desc.1830": "Malam perayaan yang elegan dihiasi dengan jamuan makan malam, ucapan selamat yang hangat, serta perpaduan musik tradisional Indonesia dan kontemporer di bawah taburan bintang.",

    // Concierge Page
    "concierge.title": "Layanan Tamu",
    "concierge.subtitle": "Informasi Perjalanan & Visa",
    "concierge.intro": "Untuk memastikan perjalanan Anda dari Australia menuju Bali berlangsung dengan aman, nyaman, dan berkesan, kami telah merangkum panduan perjalanan serta persyaratan visa yang berlaku. Mohon pelajari informasi berikut sebelum keberangkatan Anda.",
    "concierge.visa.title": "Persyaratan Visa (e-VoA)",
    "concierge.visa.content": "Semua pemegang paspor Australia yang memasuki wilayah Indonesia untuk tujuan wisata wajib memiliki Visa on Arrival (VoA). Kami sangat menyarankan Anda untuk mengajukan <strong>electronic Visa on Arrival (e-VoA)</strong> secara daring melalui portal resmi Imigrasi Indonesia sekurang-kurangnya 14 hari sebelum keberangkatan guna menghindari antrean panjang di bandara.",
    "concierge.customs.title": "Deklarasi Bea Cukai Elektronik",
    "concierge.customs.content": "Pemerintah Indonesia mewajibkan setiap penumpang yang tiba untuk mengisi <strong>Electronic Customs Declaration (e-CD)</strong>. Anda dapat mengisi formulir ini secara daring dalam waktu 3 hari sebelum penerbangan. Setelah selesai, Anda akan menerima kode QR yang wajib ditunjukkan kepada petugas bea cukai di Bandara Bali.",
    "concierge.flights.title": "Rekomendasi Penerbangan",
    "concierge.flights.content": "Penerbangan langsung menuju Bandara Internasional Ngurah Rai (DPS) di Bali tersedia setiap hari dari berbagai kota besar di Australia seperti Sydney, Melbourne, Brisbane, dan Perth. Kami menyarankan maskapai seperti Garuda Indonesia, Qantas, dan Virgin Australia, serta melakukan pemesanan 6 hingga 9 bulan sebelumnya.",
    "concierge.resort.title": "Akomodasi & Lokasi Acara",
    "concierge.resort.content": "Seluruh rangkaian acara perayaan akan diselenggarakan di <strong>The Anvaya Bali Beach Resort</strong>, sebuah resor mewah bintang lima di tepi pantai Kuta, Bali. Kami telah memesan sejumlah kamar suite dan vila dengan tarif khusus untuk para tamu. Hubungi layanan tamu kami dengan menyebutkan kode referensi pemesanan untuk bantuan reservasi.",

    // Gallery Page
    "gallery.title": "Galeri Foto",
    "gallery.subtitle": "Mengabadikan Setiap Momen",
    "gallery.upload.title": "Unggah Foto Anda",
    "gallery.upload.desc": "Bagikan momen indah yang Anda tangkap di hari bahagia kami. Tarik dan lepas foto Anda di sini, atau cari di penyimpanan perangkat Anda.",
    "gallery.upload.btn": "Pilih File",
    "gallery.upload.caption": "Tuliskan keterangan foto...",
    "gallery.upload.name": "Nama Anda",
    "gallery.upload.submit": "Kirim ke Galeri",
    "gallery.upload.error.type": "Mohon pilih file gambar yang valid (JPEG, PNG, WebP). SVG tidak diizinkan.",
    "gallery.upload.error.size": "Ukuran gambar harus kurang dari 2MB.",
    "gallery.upload.success": "Foto Anda telah berhasil diunggah dan ditambahkan ke Galeri Live.",
    "gallery.uploading": "Mengunggah foto...",
    "gallery.empty": "Belum ada foto yang diunggah. Jadilah yang pertama membagikan momen!",
    "gallery.u.caption.1": "Janji Setia di Kala Senja",
    "gallery.u.uploader.1": "Oleh Elizabeth Penfold",
    "gallery.u.caption.2": "Tawa Riang di Resepsi",
    "gallery.u.uploader.2": "Oleh Michael & Sarah",
    "gallery.u.caption.3": "Keindahan Samudera Anvaya",
    "gallery.u.uploader.3": "Oleh Dian Mubarokah",
    "gallery.u.caption.4": "Tarian Pertama Pengantin",
    "gallery.u.uploader.4": "Oleh James Henderson",

    // Wedding Party Page
    "nav.party": "Pendamping",
    "party.title": "Pendamping Pengantin",
    "party.subtitle": "Lingkar Terdekat Kami",
    "party.groomsmen": "Pihak Pria",
    "party.bridesmaids": "Pihak Wanita",
    "party.desc": "Kami sangat terhormat didampingi oleh sahabat dan keluarga terdekat kami saat kami memulai lembaran baru bersama. Klik profil mereka untuk mengenal mereka lebih dekat.",
    "party.relations.title": "Hubungan dengan Mempelai",
    "party.facts.title": "Fakta Unik",
    "party.quotes.title": "Pesan Hangat",

    "party.role.james": "Pendamping Pria Utama (Best Man)",
    "party.relation.james": "Sahabat Kecil Luke",
    "party.fact.james": "Pernah kehilangan papan selancarnya karena diambil penyu di Uluwatu.",
    "party.quote.james": "'Sangat bangga pada Luke dan Titin. Tak sabar merayakan pernikahan indah mereka di Bali!'",

    "party.role.michael": "Pendamping Pria",
    "party.relation.michael": "Kakak Kandung Luke",
    "party.fact.michael": "Bisa menghafal setiap dialog dalam serial komedi klasik Inggris.",
    "party.quote.michael": "'Sangat bahagia menyambut Titin ke dalam keluarga besar kami. Semoga bahagia selamanya!'",

    "party.role.thomas": "Pendamping Pria",
    "party.relation.thomas": "Teman Sekamar Kuliah Luke",
    "party.fact.thomas": "Telah menjelajahi 30 negara tapi masih sering tersesat di kota kelahirannya sendiri.",
    "party.quote.thomas": "'Luke akhirnya menemukan belahan jiwanya. Turut berbahagia untuk kalian berdua!'",

    "party.role.dian": "Pendamping Wanita Utama (Maid of Honour)",
    "party.relation.dian": "Kakak Sulung Titin",
    "party.fact.dian": "Koki rumah ahli kuliner Bali yang membuat sambal paling pedas.",
    "party.quote.dian": "'Saya sangat bahagia melihat adik saya bersanding dengan Luke. Semoga langgeng!'",

    "party.role.sarah": "Pendamping Wanita",
    "party.relation.sarah": "Sahabat Masa SMA Titin",
    "party.fact.sarah": "Mengoleksi kain batik antik dan gemar membaca novel sejarah.",
    "party.quote.sarah": "'Titin selalu berhati mulia. Melihatnya bahagia bersama Luke adalah mimpi yang menjadi kenyataan.'",

    "party.role.ayu": "Pendamping Wanita",
    "party.relation.ayu": "Sepupu Favorit Titin",
    "party.fact.ayu": "Penari tradisional Jawa berbakat yang juga menyukai K-Pop modern.",
    "party.quote.ayu": "'Selamat menempuh hidup baru Luke dan Kak Titin! Mari berdansa semalaman!'"
  }
};

/* ==========================================
   GLOBAL APP STATE & INITIALIZATION
   ========================================== */
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileMenu();
  
  // Page-specific initializers based on element presence
  if (document.getElementById("days")) {
    initHeroCountdown();
    initHeroParallax();
  }
  if (document.querySelector(".story-scroll-container")) {
    initStoryScrollytelling();
  }
  if (document.querySelector(".timeline-wrapper")) {
    initItineraryTimeline();
  }
  if (document.querySelector(".concierge-accordion")) {
    initTravelAccordion();
  }
  if (document.getElementById("masonryGrid")) {
    initLivePhotoHub();
  }
  if (document.querySelector(".party-container")) {
    initWeddingParty();
  }

  // Scroll animations for standard elements
  initScrollReveal();
});

/* ==========================================
   LANGUAGE TRANSITION & PERSISTENCE
   ========================================== */
let currentLang = localStorage.getItem("wedding_lang") || "en";

function initLanguage() {
  updateLanguageToggleText();
  applyTranslations(currentLang, false); // Initial load without fade transition
  
  const toggleBtn = document.getElementById("langToggleBtn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "id" : "en";
      localStorage.setItem("wedding_lang", currentLang);
      updateLanguageToggleText();
      applyTranslations(currentLang, true); // Visual transition on toggle
    });
  }
}

function updateLanguageToggleText() {
  const toggleBtn = document.getElementById("langToggleBtn");
  if (toggleBtn) {
    // Show what language it will switch TO
    toggleBtn.textContent = translations[currentLang]["lang.label"];
  }
}

function applyTranslations(lang, animate = true) {
  const translatableElements = document.querySelectorAll("[data-i18n]");
  
  if (animate) {
    // Premium transition: fade out, swap text, fade in
    translatableElements.forEach(el => {
      el.style.transition = "opacity 0.25s ease-out";
      el.style.opacity = 0;
    });

    setTimeout(() => {
      translatableElements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = translations[lang][key];
          } else {
            el.innerHTML = translations[lang][key];
          }
        }
        el.style.transition = "opacity 0.35s ease-in";
        el.style.opacity = 1;
      });
    }, 250);
  } else {
    translatableElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
  }
}

/* ==========================================
   MOBILE MENU TOGGLE
   ========================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
}

/* ==========================================
   SCROLL REVEAL (FADE IN EFFECTS)
   ========================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll(".fade-in");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => revealObserver.observe(el));
}

/* ==========================================
   HERO COUNTDOWN TIMER & PARALLAX
   ========================================== */
function initHeroCountdown() {
  const targetDate = new Date("August 22, 2027 15:30:00").getTime();
  
  const dVal = document.getElementById("days");
  const hVal = document.getElementById("hours");
  const mVal = document.getElementById("minutes");
  const sVal = document.getElementById("seconds");

  if (!dVal) return;

  function updateClock() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      dVal.textContent = "00";
      hVal.textContent = "00";
      mVal.textContent = "00";
      sVal.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dVal.textContent = days.toString().padStart(2, "0");
    hVal.textContent = hours.toString().padStart(2, "0");
    mVal.textContent = minutes.toString().padStart(2, "0");
    sVal.textContent = seconds.toString().padStart(2, "0");
  }

  updateClock();
  setInterval(updateClock, 1000);
}

function initHeroParallax() {
  const bg = document.querySelector(".hero-parallax-bg");
  if (!bg) return;

  window.addEventListener("scroll", () => {
    const scrollVal = window.scrollY;
    bg.style.transform = `translateY(${scrollVal * 0.4}px)`;
  });
}

/* ==========================================
   OUR STORY: SCROLLYTELLING EFFECTS
   ========================================== */
function initStoryScrollytelling() {
  const chapters = document.querySelectorAll(".story-chapter");
  const dots = document.querySelectorAll(".story-indicator-dot");
  
  if (chapters.length === 0) return;

  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        
        // Activate matching side dot
        dots.forEach(dot => {
          if (dot.getAttribute("data-target") === id) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });

        // Trigger individual chapter animation details
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.4,
    rootMargin: "-10% 0px -20% 0px"
  });

  chapters.forEach(ch => storyObserver.observe(ch));

  // Handle dot clicks
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const targetId = dot.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 120,
          behavior: "smooth"
        });
      }
    });
  });
}

/* ==========================================
   THE GOLDEN THREAD: TIMELINE INTERACTION
   ========================================== */
function initItineraryTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const progressThread = document.getElementById("timelineProgressThread");
  const wrapper = document.querySelector(".timeline-wrapper");

  if (timelineItems.length === 0) return;

  // Visual Line Progress tracking based on scroll
  window.addEventListener("scroll", () => {
    if (!wrapper || !progressThread) return;
    
    const rect = wrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // When the top of timeline enters middle of screen
    const startPoint = rect.top - (windowHeight / 2);
    const timelineHeight = rect.height;
    
    let progress = 0;
    if (startPoint < 0) {
      progress = Math.abs(startPoint) / timelineHeight;
      progress = Math.min(Math.max(progress, 0), 1);
    }
    
    progressThread.style.height = `${progress * 100}%`;
  });

  // IntersectionObserver to highlight timeline nodes
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: "-20% 0px -30% 0px"
  });

  timelineItems.forEach(item => timelineObserver.observe(item));
}

/* ==========================================
   CONCIERGE: ACCORDION TOGGLE
   ========================================== */
function initTravelAccordion() {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const parent = header.parentElement;
      const isActive = parent.classList.contains("active");

      // Close all other accordion items
      document.querySelectorAll(".accordion-item").forEach(item => {
        item.classList.remove("active");
      });

      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });
}

/* ==========================================
   LIVE PHOTO HUB: GALLERY & UPLOAD MOCK
   ========================================== */
function initLivePhotoHub() {
  const dropzone = document.getElementById("uploadDropzone");
  const fileInput = document.getElementById("fileInput");
  const previewContainer = document.getElementById("previewContainer");
  const previewImg = document.getElementById("previewImg");
  const previewName = document.getElementById("previewName");
  const previewSize = document.getElementById("previewSize");
  const removeBtn = document.getElementById("removeFileBtn");
  const captionInput = document.getElementById("uploadCaption");
  const uploaderNameInput = document.getElementById("uploaderName");
  const progressWrapper = document.getElementById("progressWrapper");
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const submitBtn = document.getElementById("submitUploadBtn");
  const successMsg = document.getElementById("successMsg");
  const masonryGrid = document.getElementById("masonryGrid");

  let selectedFile = null;
  let firestoreUnsubscribe = null;

  // Preset core photos to enrich the gallery
  const presetPhotos = [
    {
      url: "assets/story_proposal.jpg",
      captionKey: "gallery.u.caption.1",
      uploaderKey: "gallery.u.uploader.1"
    },
    {
      url: "assets/story_beginning.jpg",
      captionKey: "gallery.u.caption.2",
      uploaderKey: "gallery.u.uploader.2"
    },
    {
      url: "assets/story_cultures.jpg",
      captionKey: "gallery.u.caption.3",
      uploaderKey: "gallery.u.uploader.3"
    },
    {
      url: "assets/hero_bg.jpg",
      captionKey: "gallery.u.caption.4",
      uploaderKey: "gallery.u.uploader.4"
    }
  ];

  // Helper function to build gallery list items
  function populateGrid(photosList) {
    masonryGrid.innerHTML = "";
    photosList.forEach(photo => {
      const item = document.createElement("div");
      item.className = "masonry-item";
      
      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = "Wedding Photo";
      
      const overlay = document.createElement("div");
      overlay.className = "masonry-overlay";
      
      const caption = document.createElement("h3");
      caption.className = "gallery-caption";
      if (photo.captionKey) {
        caption.setAttribute("data-i18n", photo.captionKey);
        caption.textContent = translations[currentLang][photo.captionKey] || photo.captionKey;
      } else {
        caption.textContent = photo.caption;
      }
      
      const uploader = document.createElement("p");
      uploader.className = "gallery-uploader";
      if (photo.uploaderKey) {
        uploader.setAttribute("data-i18n", photo.uploaderKey);
        uploader.textContent = translations[currentLang][photo.uploaderKey] || photo.uploaderKey;
      } else {
        uploader.textContent = photo.uploader;
      }
      
      overlay.appendChild(caption);
      overlay.appendChild(uploader);
      item.appendChild(img);
      item.appendChild(overlay);
      masonryGrid.appendChild(item);
    });
  }

  // Render initial items + localstorage + live Firestore updates
  function renderGallery() {
    // If Firebase database is not loaded, fall back to offline local storage mock
    if (!db) {
      console.log("Firebase not loaded. Rendering offline mock database.");
      let savedPhotos = [];
      try {
        savedPhotos = JSON.parse(localStorage.getItem("uploaded_photos")) || [];
        if (!Array.isArray(savedPhotos)) savedPhotos = [];
      } catch (e) {
        savedPhotos = [];
      }
      populateGrid([...savedPhotos, ...presetPhotos]);
      return;
    }

    // Subscribe to real-time changes on Cloud Firestore
    if (firestoreUnsubscribe) firestoreUnsubscribe();

    firestoreUnsubscribe = db.collection("photos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const dbPhotos = [];
        snapshot.forEach((doc) => {
          dbPhotos.push(doc.data());
        });
        populateGrid([...dbPhotos, ...presetPhotos]);
      }, (error) => {
        console.error("Firestore listener error. Falling back to offline display.", error);
        // Failover display
        let savedPhotos = [];
        try {
          savedPhotos = JSON.parse(localStorage.getItem("uploaded_photos")) || [];
          if (!Array.isArray(savedPhotos)) savedPhotos = [];
        } catch (e) {
          savedPhotos = [];
        }
        populateGrid([...savedPhotos, ...presetPhotos]);
      });
  }

  renderGallery();

  // Compress Image Canvas Helper (Reduces bandwidth and storage limits)
  function compressImage(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Constraint boundaries
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Compress to blob JPEG (0.75 quality)
        canvas.toBlob((blob) => {
          callback(blob);
        }, "image/jpeg", 0.75);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Handle Drag & Drop
  if (dropzone) {
    dropzone.addEventListener("click", () => fileInput.click());
    
    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
    
    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });
    
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        handleFileSelect(fileInput.files[0]);
      }
    });
  }

  function handleFileSelect(file) {
    // Validation: Strict MIME verification (reject SVG script injection)
    const allowedMimes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedMimes.includes(file.type)) {
      alert(translations[currentLang]["gallery.upload.error.type"]);
      return;
    }
    if (file.name.toLowerCase().endsWith(".svg") || file.type === "image/svg+xml") {
      alert(translations[currentLang]["gallery.upload.error.type"]);
      return;
    }
    // Enforce strict 2MB limit
    if (file.size > 2 * 1024 * 1024) {
      alert(translations[currentLang]["gallery.upload.error.size"]);
      return;
    }

    selectedFile = file;
    previewName.textContent = file.name;
    previewSize.textContent = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

    // Render Preview
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.src = e.target.result;
      previewContainer.style.display = "block";
    };
    reader.readAsDataURL(file);
    successMsg.style.display = "none";
  }

  // Remove File Button
  if (removeBtn) {
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      resetUploadWidget();
    });
  }

  function resetUploadWidget() {
    selectedFile = null;
    fileInput.value = "";
    previewContainer.style.display = "none";
    previewImg.src = "";
    previewName.textContent = "";
    previewSize.textContent = "";
    progressWrapper.style.display = "none";
    progressFill.style.width = "0%";
    captionInput.value = "";
    uploaderNameInput.value = "";
  }

  // Handle Form Submission / Live Upload
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (!selectedFile) return;

      progressWrapper.style.display = "block";
      submitBtn.disabled = true;

      // 1. If Firebase is active, upload to Cloud Storage & save reference to Cloud Firestore
      if (db && storage) {
        progressText.textContent = `${translations[currentLang]["gallery.uploading"]} (0%)`;
        progressFill.style.width = "0%";

        // Compress image client-side to minimize storage footprint
        compressImage(selectedFile, (compressedBlob) => {
          const fileName = `${Date.now()}_${selectedFile.name.replace(/\s+/g, "_")}`;
          const uploadTask = storage.ref().child(`photos/${fileName}`).put(compressedBlob, {
            contentType: "image/jpeg"
          });

          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
              const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              progressFill.style.width = `${percent}%`;
              progressText.textContent = `${translations[currentLang]["gallery.uploading"]} (${percent}%)`;
            },
            (error) => {
              console.error("Storage upload failed:", error);
              alert(currentLang === "en" ? "Cloud upload failed. Please verify storage rules." : "Gagal mengunggah ke awan. Mohon periksa ketentuan penyimpanan.");
              submitBtn.disabled = false;
              progressWrapper.style.display = "none";
            },
            () => {
              // Get download URL and write to Firestore
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                const safeCaption = (captionInput.value || "Shared Moment").trim().substring(0, 80);
                const safeUploader = (uploaderNameInput.value || "Anonymous Guest").trim().substring(0, 30);

                db.collection("photos").add({
                  url: downloadURL,
                  caption: safeCaption,
                  uploader: `By ${safeUploader}`,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                  setTimeout(() => {
                    resetUploadWidget();
                    submitBtn.disabled = false;
                    successMsg.innerHTML = translations[currentLang]["gallery.upload.success"];
                    successMsg.style.display = "block";
                  }, 400);
                }).catch((error) => {
                  console.error("Firestore database write failed:", error);
                  alert(currentLang === "en" ? "Database registration failed." : "Pendaftaran database gagal.");
                  submitBtn.disabled = false;
                  progressWrapper.style.display = "none";
                });
              });
            }
          );
        });
      } else {
        // 2. Offline Fallback: Mock intervals and save in local storage
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          progressFill.style.width = `${progress}%`;
          progressText.textContent = `${translations[currentLang]["gallery.uploading"]} (${progress}%)`;
          
          if (progress >= 100) {
            clearInterval(interval);
            
            // Save mock data locally
            saveUploadedImageToLocalStorage(
              previewImg.src,
              captionInput.value || "Shared Moment",
              uploaderNameInput.value || "Anonymous Guest"
            );
          }
        }, 150);
      }
    });
  }

  function saveUploadedImageToLocalStorage(dataUrl, caption, uploader) {
    let savedPhotos = [];
    try {
      savedPhotos = JSON.parse(localStorage.getItem("uploaded_photos")) || [];
      if (!Array.isArray(savedPhotos)) savedPhotos = [];
    } catch (e) {
      savedPhotos = [];
    }

    if (savedPhotos.length >= 8) {
      savedPhotos.pop();
    }

    const safeCaption = (caption || "Shared Moment").trim().substring(0, 80);
    const safeUploader = (uploader || "Anonymous Guest").trim().substring(0, 30);

    savedPhotos.unshift({
      url: dataUrl,
      caption: safeCaption,
      uploader: `By ${safeUploader}`
    });

    try {
      localStorage.setItem("uploaded_photos", JSON.stringify(savedPhotos));
    } catch (e) {
      console.error("Local storage quota exceeded.", e);
      alert(currentLang === "en" ? "Storage limit exceeded. Please remove some photos." : "Batas penyimpanan terlampaui. Silakan hapus beberapa foto.");
      submitBtn.disabled = false;
      return;
    }
    
    setTimeout(() => {
      resetUploadWidget();
      submitBtn.disabled = false;
      successMsg.innerHTML = translations[currentLang]["gallery.upload.success"];
      successMsg.style.display = "block";
      renderGallery();
    }, 400);
  }
}
}

/* ==========================================
   WEDDING PARTY: INTERACTIVE DETAILS
   ========================================== */
function initWeddingParty() {
  const cards = document.querySelectorAll(".party-card");
  const bioCard = document.getElementById("partyActiveBio");
  
  if (cards.length === 0 || !bioCard) return;

  // Active elements inside the bio card
  const bioAvatar = document.getElementById("bioAvatar");
  const bioName = document.getElementById("bioName");
  const bioRole = document.getElementById("bioRole");
  const bioRelation = document.getElementById("bioRelation");
  const bioFact = document.getElementById("bioFact");
  const bioQuote = document.getElementById("bioQuote");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // 1. Remove active state from all cards
      cards.forEach(c => c.classList.remove("active"));
      
      // 2. Add active state to clicked card
      card.classList.add("active");

      // 3. Get metadata from data-attributes
      const name = card.getAttribute("data-name");
      const img = card.querySelector("img").src;
      const roleKey = card.getAttribute("data-role-key");
      const relationKey = card.getAttribute("data-relation-key");
      const factKey = card.getAttribute("data-fact-key");
      const quoteKey = card.getAttribute("data-quote-key");

      // 4. Slide out / Fade out bio card
      bioCard.style.opacity = 0;
      bioCard.style.transform = "translateY(15px)";

      // 5. Update contents after short delay, then slide/fade back in
      setTimeout(() => {
        bioAvatar.src = img;
        bioName.textContent = name;
        
        // Setup translation attributes and texts
        bioRole.setAttribute("data-i18n", roleKey);
        bioRole.textContent = translations[currentLang][roleKey] || roleKey;

        bioRelation.setAttribute("data-i18n", relationKey);
        bioRelation.textContent = translations[currentLang][relationKey] || relationKey;

        bioFact.setAttribute("data-i18n", factKey);
        bioFact.textContent = translations[currentLang][factKey] || factKey;

        bioQuote.setAttribute("data-i18n", quoteKey);
        bioQuote.textContent = translations[currentLang][quoteKey] || quoteKey;

        // Slide in
        bioCard.style.opacity = 1;
        bioCard.style.transform = "translateY(0)";

        // Smooth scroll to active bio panel on mobile/tablet viewports
        if (window.innerWidth <= 992) {
          bioCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 200);
    });
  });

  // Trigger click on first card to populate initially on desktop
  if (window.innerWidth > 992) {
    cards[0].click();
  }
}
