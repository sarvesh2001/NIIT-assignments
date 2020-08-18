function edits() {
  document.getElementById('edits').style.display = "block";
  document.getElementById('view').style.display = "none";
}

function view() {
  document.getElementById('edits').style.display = "none";
  document.getElementById('view').style.display = "block";
  displaypro();
}

function deleted() {
  document.getElementById('delete').style.display = "block";
  document.getElementById('add').style.display = "none";
}

function add() {
  document.getElementById('delete').style.display = "none";
  document.getElementById('add').style.display = "block";
}
var products = [{ Name: 'product', Details: 'Pro_decrip', Price: 'pro_price' }];
var i = 1;

function input(form) {
  var demo_product = { Name: '', Details: '', Price: '' };
  demo_product.Name = form.pro_name.value;
  demo_product.Details = form.pro_decrip.value;
  demo_product.Price = form.pro_price.value;

  products[i] = demo_product;
  // alert(products[i].Name);
  alert(products[i].Name + '\n' + products[i].Details + '\n' + products[i].Price);
  i++;
  alert('product sucessfully update don\'t refrash just click view');
}

function displaypro() {
  var j = i - 1;
  var view_product = document.getElementById('view');
  view_product.innerHTML = '';
  for (j; j > 0; j--)
  {
    //alert(products[j].Name+'\n'+products[j].Details+'\n'+products[j].Price);
    view_product.innerHTML += '<div class="product">' + 'Name of product: ' + products[j].Name + '<br/>' + 'Decription of product:' + products[j].Details + '<br/>' + 'Price of product :' + products[j].Price + '</div>';
  }
}

function delete_call(form) {
  var delet_var = form.delete_ok.value;
  alert(delet_var);
  var mila = 0;
  var k = i - 1;
  for (k; k > 0; k--) {
    if (delet_var == products[k].Name)
    {
      mila = 1;
      var kj = k;
      for (kj; kj < i - 1; k++)
      {
        products[kj] = products[kj + 1];
      }
      break;
    }

  }
  i--;
  if (mila == 0) {
    alert('you enter wrong product name');
  }
}