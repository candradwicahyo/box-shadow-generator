window.onload = () => {
  
  const box = document.querySelector('.box');
  const input = document.querySelector('.input');
  const inputRange = document.querySelectorAll('.range');
  inputRange.forEach(range => {
    range.addEventListener('input', () => {
      // ambil semua value dari input range
      const value = valueInput();
      // set value kedalam box dan input 
      box.style.boxShadow = setValue(value);
      input.value = setValue(value, true);
    });
  });
  
  function valueInput() {
    // horizontal
    let hor = document.querySelector('.hor').value;
    // vertical
    let ver = document.querySelector('.ver').value;
    // blur
    let blr = document.querySelector('.blr').value;
    // spread
    let spr = document.querySelector('.spr').value;
    // kembalikan nilai
    return `${hor}px ${ver}px ${blr}px ${spr}px`;
  }
  
  function setValue(value, text = false) {
    /*
      jika parameter text berisikan boolean false
      maka, isi dengan string kosong. apabila parameter
      text berisi boolean true, tampilkan text box-shadow :
    */
    return `${!text ? '' : 'box-shadow:'} ${value} #333`;
  }
  
  // fitur salin atau copy 
  const copyButton = document.querySelector('.btn-copy');
  copyButton.addEventListener('click', () => {
    // jika input masih kosong
    if (!input.value) return alert('field is empty!');
    // ambil value dari input
    input.select();
    // salin value input tersebut
    document.execCommand('copy');
    // tampilkan pesan sukses disalin
    alert('code has been copied!');
  });
  
}