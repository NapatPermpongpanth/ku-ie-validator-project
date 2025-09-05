// Drop Down Menu
document.getElementById('dropdownBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdownContent');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

    // ปิด dropdown เมื่อคลิกนอกเมนู
document.addEventListener('click', function(event) {
    const btn = document.getElementById('dropdownBtn');
    const content = document.getElementById('dropdownContent');
    if (!btn.contains(event.target) && !content.contains(event.target)) {
        content.style.display = 'none';
    }
});

    // เลือกตัวเลือก dropdown แล้วเปลี่ยนข้อความบนปุ่ม
document.querySelectorAll('#dropdownContent a').forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('dropdownBtn').innerHTML = this.textContent + ' <i class="fas fa-caret-down"></i>';
        document.getElementById('dropdownContent').style.display = 'none';
    });
});

//Upload PDF

document.querySelector('.pdf-label').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('pdfInput').click();
});

document.getElementById('pdfInput').addEventListener('change', function() {
    const file = this.files[0];
    document.getElementById('fileName').textContent = file ? file.name : '';
})

// Hamburger (input-page)
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideTab = document.getElementById('sideTab');

hamburgerBtn.addEventListener('click', function() {
    sideTab.classList.add('open');

    // สร้าง hamburger ใหม่ไว้ที่ตำแหน่งเดิม
    if (!document.getElementById('hamburgerClone')) {
        const clone = hamburgerBtn.cloneNode(true);
        clone.id = 'hamburgerClone';
        clone.style.position = 'fixed';
        clone.style.top = '20px';
        clone.style.left = '20px';
        clone.style.zIndex = '201';
        clone.style.background = 'transparent';
        clone.style.cursor = 'pointer';
        document.body.appendChild(clone);

        clone.addEventListener('click', function(e) {
            sideTab.classList.remove('open');
            clone.remove();
        });
    }
});

// ปิด tab เมื่อคลิกนอก side-tab
document.addEventListener('click', function(e) {
    if (sideTab.classList.contains('open')) {
        const clone = document.getElementById('hamburgerClone');
        if (!sideTab.contains(e.target) && (!hamburgerBtn.contains(e.target)) && (!clone || !clone.contains(e.target))) {
            sideTab.classList.remove('open');
            if (clone) clone.remove();
        }
    }
});

// Hamburger Menu (Output)
const hamburgerBtnOut = document.getElementById('hamburgerBtnOut');
const sideTabOut = document.getElementById('sideTabOut');

if (hamburgerBtnOut && sideTabOut) {
    hamburgerBtnOut.addEventListener('click', function() {
        sideTabOut.classList.add('open');

        // สร้าง hamburger ใหม่ไว้ที่ตำแหน่งเดิม
        if (!document.getElementById('hamburgerCloneOut')) {
            const clone = hamburgerBtnOut.cloneNode(true);
            clone.id = 'hamburgerCloneOut';
            clone.style.position = 'fixed';
            clone.style.top = '20px';
            clone.style.left = '20px';
            clone.style.zIndex = '201';
            clone.style.background = 'transparent';
            clone.style.cursor = 'pointer';
            document.body.appendChild(clone);

            clone.addEventListener('click', function(e) {
                sideTabOut.classList.remove('open');
                clone.remove();
            });
        }
    });

    // ปิด tab เมื่อคลิกนอก side-tab
    document.addEventListener('click', function(e) {
        if (sideTabOut.classList.contains('open')) {
            const clone = document.getElementById('hamburgerCloneOut');
            if (!sideTabOut.contains(e.target) && (!hamburgerBtnOut.contains(e.target)) && (!clone || !clone.contains(e.target))) {
                sideTabOut.classList.remove('open');
                if (clone) clone.remove();
            }
        }
    });
}

// ปิด tab เมื่อคลิกนอก side-tab
document.addEventListener('click', function(e) {
    if (sideTab.classList.contains('open')) {
        const clone = document.getElementById('hamburgerClone');
        if (!sideTab.contains(e.target) && (!hamburgerBtn.contains(e.target)) && (!clone || !clone.contains(e.target))) {
            sideTab.classList.remove('open');
            if (clone) clone.remove();
        }
    }
});

//Submit Button
document.querySelector('.submit-btn').addEventListener('click', function() {

    // ดึงค่าจาก input (ถ้ามี)
    const iePass = document.getElementById('iePass1') ? document.getElementById('iePass1').value : '';
    const ieNotPass = document.getElementById('ieNotPass1') ? document.getElementById('ieNotPass1').value : '';
    const Void = document.getElementById('Void1') ? document.getElementById('Void1').value : '';
    const elective_subject = document.getElementById('elective_subject') ? document.getElementById('elective_subject').value : '';

    // แสดงผลใน output-page
    if (document.getElementById('output-ie-pass')) {
        document.getElementById('output-ie-pass').innerHTML = iePass ? `<input type="text" value="${iePass}" readonly>` : '';
    }
    if (document.getElementById('output-ie-notpass')) {
        document.getElementById('output-ie-notpass').innerHTML = ieNotPass ? `<input type="text" value="${ieNotPass}" readonly>` : '';
    }
    if (document.getElementById('output-Void')) {
        document.getElementById('output-Void').innerHTML = Void ? `<input type="text" value="${Void}" readonly>` : '';
    }
    if (document.getElementById('output-elective-subject')) {
        document.getElementById('output-elective-subject').innerHTML = elective_subject ? `<input type="text" value="${elective_subject}" readonly>` : '';
    }

    // สลับหน้า
    document.querySelector('.input-page').style.display = 'none';
    document.querySelector('.output-page').style.display = 'block';
});

// ปุ่ม Back (ถ้ามี)
if (document.querySelector('.back-btn')) {
    document.querySelector('.back-btn').addEventListener('click', function() {
        document.querySelector('.output-page').style.display = 'none';
        document.querySelector('.input-page').style.display = 'block';
    });
}

