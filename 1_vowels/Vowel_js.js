function input(form) {
  var string = document.forms["check_vowel"]["inputString"].value;
  //alert(string);
  var count = 0;
  var start = 0;
  var end = 0;
  var blank_space = 0;
  var output = document.getElementById('output');
  output.innerHTML = ''; //clear output

  for (var i = 0; i < string.length; i++) {
    // check blanck space 
    if (string.charAt(i) != ' ')
    {
      // alert('fine1');
      if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u' || string.charAt(i) == 'A' || string.charAt(i) == 'I' || string.charAt(i) == 'O' || string.charAt(i) == 'U')
      {
        count++;
      }
      end = i + 1;
      blank_space = 0;
    }
    else {
      //alert(string.slice(start,end+1)+'>>'+count);
      blank_space++;
      if (blank_space < 2)
      {

        output.innerHTML += '<br/>' + string.slice(start, end) + '>>' + count;
        start = end;
      }
      count = 0;
    }
  }
  output.innerHTML += '<br/>' + string.slice(start, end) + '>>' + count;
}