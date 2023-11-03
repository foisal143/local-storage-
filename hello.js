const getInputValue = id => {
  const inputFeild = document.getElementById(id);
  const inputValue = inputFeild.value;
  return inputValue;
};

document.getElementById('nameSend').addEventListener('click', () => {
  const inputvalue = getInputValue('nameInput');
  localStorage.setItem('name', inputvalue);
});

document.getElementById('nameDelete').addEventListener('click', () => {
  localStorage.removeItem('name');
  document.getElementById('nameInput').value = '';
});

const showInpuName = () => {
  const name = localStorage.getItem('name');
  document.getElementById('nameInput').value = name;
};
showInpuName();

// email section start
document.getElementById('emailSend').addEventListener('click', () => {
  const inputvalue = getInputValue('emailInput');
  localStorage.setItem('email', inputvalue);
});

document.getElementById('emailDelete').addEventListener('click', () => {
  localStorage.removeItem('email');
  document.getElementById('emailInput').value = '';
});

const showInpuEmail = () => {
  const name = localStorage.getItem('email');

  document.getElementById('emailInput').value = name;
};
showInpuEmail();
// text section start
document.getElementById('textSend').addEventListener('click', () => {
  const inputvalue = getInputValue('textInput');
  localStorage.setItem('massage', inputvalue);
});

document.getElementById('textDelete').addEventListener('click', () => {
  localStorage.removeItem('massage');
  document.getElementById('textInput').value = '';
});

const showInpuText = () => {
  const name = localStorage.getItem('massage');

  document.getElementById('textInput').value = name;
};
showInpuText();

// rest all section
document.getElementById('rest').addEventListener('click', () => {
  localStorage.clear();
  document.getElementById('textInput').value = '';
  document.getElementById('emailInput').value = '';
  document.getElementById('nameInput').value = '';
});

// send all to localstorage
document.getElementById('sendAll').addEventListener('click', () => {
  const text = document.getElementById('textInput').value;
  const email = document.getElementById('emailInput').value;
  const name = document.getElementById('nameInput').value;
  const data = {
    name: name,
    email: email,
    massage: text,
  };
  const dataSt = JSON.stringify(data);
  console.log(dataSt);
  localStorage.setItem('data', dataSt);
});
