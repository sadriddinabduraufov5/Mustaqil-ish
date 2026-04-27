document.addEventListener("DOMContentLoaded", () => {
    /* Menyudagi bosilgan havolani faol (tagi chiziqli) qilish */
    const havolalar = document.querySelectorAll('.navigatsiya-ro-yxati a');
    
    havolalar.forEach(havola => {
        havola.addEventListener('click', function() {
            havolalar.forEach(item => item.classList.remove('faol-havola'));
            this.classList.add('faol-havola');
        });
    });

    /* Sharhlar slayderi qismi (orqaga va oldinga o'tkazish) */
    const sharhlarRo-yxati = [
        { 
            ism: "Анастасия", 
            matn: "«Прекрасное место для отдыха! Очень чистые номера, приветливый персонал и море совсем рядом. Обязательно приедем сюда снова в следующем году.»" 
        },
        { 
            ism: "Михаил", 
            matn: "«Отличный курорт! Очень понравилось обслуживание и красивый вид с балкона. Обязательно вернемся.»" 
        },
        { 
            ism: "Елена", 
            matn: "«Прекрасное место для семейного отдыха. Рекомендую всем, кто хочет отдохнуть от городской суеты и насладиться природой!»" 
        }
    ];

    let joriyIndeks = 0;

    // HTML dagi elementlarni klassi orqali topib olamiz (ID qo'shib o'tirmaslik uchun)
    const ismElementi = document.querySelector('.sharh-avtor');
    const matnElementi = document.querySelector('.sharh-matn');
    const sahifaElementi = document.querySelector('.sharh-sahifa');
    
    const strelkalar = document.querySelectorAll('.sharh-strelka');
    const orqagaTugmasi = strelkalar[0]; // Chapdagi birinchi strelka
    const oldingaTugmasi = strelkalar[1]; // O'ngdagi ikkinchi strelka

    // Ekranga yangi sharhni chiqaruvchi funksiya
    function sharhniYangilash() {
        ismElementi.textContent = sharhlarRo-yxati[joriyIndeks].ism;
        matnElementi.textContent = sharhlarRo-yxati[joriyIndeks].matn;
        sahifaElementi.textContent = `${joriyIndeks + 1} / ${sharhlarRo-yxati.length}`;
    }

    oldingaTugmasi.onclick = () => { 
        joriyIndeks = (joriyIndeks + 1) % sharhlarRo-yxati.length; 
        sharhniYangilash(); 
    };

    orqagaTugmasi.onclick = () => { 
        joriyIndeks = (joriyIndeks - 1 + sharhlarRo-yxati.length) % sharhlarRo-yxati.length; 
        sharhniYangilash(); 
    };
});