window.onload = () => {
  
  const boxGenerator = document.querySelector('.box-generator');
  const inputCopy = document.querySelector('#input-copy');
  const inputRange = document.querySelectorAll('.input-range');
  inputRange.forEach(input => {
    input.addEventListener('input', function() {
      const horizontal = document.querySelector('#horizontal').value;
      const vertical = document.querySelector('#vertical').value;
      const blur = document.querySelector('#blur').value;
      const spread = document.querySelector('#spread').value;
      
      let value = `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(0,0,0,0.4)`;
      
      boxGenerator.style.boxShadow = value;
      inputCopy.value = `box-shadow: ${value};`;
    });
  });
  
  function copy() {
    const copyButton = document.querySelector('#copy');
    copyButton.addEventListener('click', () => {
      inputCopy.select();
      if (document.execCommand("copy")) {
        swal.fire({ 
          icon: 'success',
          position: 'center',
          title: 'Success',
          text: 'code has been copied!'
        });
      }
    });
  }
  
  copy();
  
}