//Đăng kí
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.createElement("p");
  errorMessage.style.color = "red";
  errorMessage.style.display = "none";
  registerForm.appendChild(errorMessage);

  // Kiểm tra tính hợp lệ của tên đăng nhập
  function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9_]+$/; // Chỉ cho phép chữ, số, và dấu gạch dưới
    return regex.test(username);
  }

  // Kiểm tra tính hợp lệ của mật khẩu
  function isValidPassword(password) {
    return !/\s/.test(password); // Không chứa khoảng trắng
  }

  // Xử lý sự kiện khi nhấn nút Đăng ký
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn hành vi mặc định của form
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Kiểm tra tên đăng nhập
    if (!isValidUsername(username)) {
      errorMessage.textContent = "Tên đăng nhập không hợp lệ. Không được chứa khoảng trắng hoặc ký tự đặc biệt";
      errorMessage.style.display = "block";
      return;
    }

    // Kiểm tra mật khẩu
    if (!isValidPassword(password)) {
      errorMessage.textContent = "Mật khẩu không hợp lệ. Không được chứa khoảng trắng";
      errorMessage.style.display = "block";
      return;
    }

    // Nếu hợp lệ
    errorMessage.style.display = "none";
    alert("Đăng ký thành công!");
    // Chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
  });

  // Ẩn thông báo lỗi khi người dùng bắt đầu nhập lại
  usernameInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
  });

  passwordInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const registerForm = document.getElementById("registerForm");
//   const usernameInput = document.getElementById("username");
//   const passwordInput = document.getElementById("password");
//   const errorMessage = document.getElementById("error-message");

//   // Kiểm tra tên đăng nhập hợp lệ
//   function isValidUsername(username) {
//     const regex = /^[a-zA-Z0-9_]+$/; // Chỉ cho phép chữ, số, và dấu gạch dưới
//     return regex.test(username);
//   }

//   // Kiểm tra mật khẩu hợp lệ
//   function isValidPassword(password) {
//     return !/\s/.test(password); // Không chứa khoảng cách
//   }

//   // Xử lý sự kiện submit form
//   registerForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Ngăn hành vi mặc định của form
//     const username = usernameInput.value.trim();
//     const password = passwordInput.value;

//     // Kiểm tra tính hợp lệ của tên đăng nhập
//     if (!isValidUsername(username)) {
//       errorMessage.style.display = "block";
//       errorMessage.textContent = "Tên đăng nhập không hợp lệ. Không được chứa khoảng trắng hoặc ký tự đặc biệt";
//       return;
//     }

//     // Kiểm tra tính hợp lệ của mật khẩu
//     if (!isValidPassword(password)) {
//       errorMessage.style.display = "block";
//       errorMessage.textContent = "Mật khẩu không hợp lệ. Không được chứa khoảng trắng";
//       return;
//     }

//     // Nếu hợp lệ, ẩn thông báo lỗi và tiếp tục xử lý
//     errorMessage.style.display = "none";

//     // Thông báo đăng ký thành công
//     alert("Đăng ký thành công!");
//     // Chuyển hướng sang trang đăng nhập
//     window.location.href = "login.html";
//   });

//   // Ẩn thông báo lỗi khi người dùng bắt đầu nhập lại
//   usernameInput.addEventListener("input", function () {
//     errorMessage.style.display = "none";
//   });

//   passwordInput.addEventListener("input", function () {
//     errorMessage.style.display = "none";
//   });
// });


//Đăng nhập
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const loginUsernameInput = document.getElementById("loginUsername");
  const loginPasswordInput = document.getElementById("loginPassword");
  const errorMessage = document.createElement("p");
  errorMessage.style.color = "red";
  errorMessage.style.display = "none";
  loginForm.appendChild(errorMessage);

  // Kiểm tra tính hợp lệ của tên đăng nhập
  function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9_]+$/; // Chỉ cho phép chữ, số, và dấu gạch dưới
    return regex.test(username);
  }

  // Kiểm tra tính hợp lệ của mật khẩu
  function isValidPassword(password) {
    return !/\s/.test(password); // Không chứa khoảng trắng
  }

  // Xử lý sự kiện khi nhấn nút Đăng nhập
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn hành vi mặc định của form
    const username = loginUsernameInput.value.trim();
    const password = loginPasswordInput.value;

    // Kiểm tra tên đăng nhập
    if (!isValidUsername(username)) {
      errorMessage.textContent = "Tên đăng nhập không hợp lệ. Không được chứa khoảng trắng hoặc ký tự đặc biệt";
      errorMessage.style.display = "block";
      return;
    }

    // Kiểm tra mật khẩu
    if (!isValidPassword(password)) {
      errorMessage.textContent = "Mật khẩu không hợp lệ. Không được chứa khoảng trắng";
      errorMessage.style.display = "block";
      return;
    }

    // Nếu hợp lệ
    errorMessage.style.display = "none";
    alert("Đăng nhập thành công!");
    // Chuyển hướng đến trang chính
    window.location.href = "menu.html";
  });

  // Ẩn thông báo lỗi khi người dùng bắt đầu nhập lại
  loginUsernameInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
  });

  loginPasswordInput.addEventListener("input", function () {
    errorMessage.style.display = "none";
  });

  // Chuyển đến trang đăng ký khi nhấn "Đăng kí"
  const dangKiLink = document.getElementById("dangki");
  dangKiLink.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chuyển hướng mặc định
    window.location.href = "register.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Lấy liên kết "Đăng nhập" qua ID
  const loginLink = document.getElementById("dangnhap");

  // Thêm sự kiện click cho liên kết
  if (dangnhap) {
    dangnhap.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn hành vi mặc định của liên kết
      window.location.href = "login.html"; // Chuyển hướng đến login.html
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementById("dangki");

  // Thêm sự kiện click cho liên kết
  if (dangki) {
    dangki.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn hành vi mặc định của liên kết
      window.location.href = "register.html"; // Chuyển hướng đến register.html
    });
  }
});


// Đảm bảo DOM đã được tải đầy đủ
document.addEventListener("DOMContentLoaded", function () {
  // Lấy nút "Mua ngay" qua ID
  const buyNowButton = document.getElementById("Muangay");
  // Thêm sự kiện click cho nút
  if (Muangay) {
    Muangay.addEventListener("click", function () {
      alert("Bạn chưa đăng nhập! Vui lòng đăng nhập!");
      window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
    });
  }
});

//Tới thực đơn
document.addEventListener("DOMContentLoaded", function () {
  const toithucDon = document.getElementById("toithucdon");
  // Thêm sự kiện click cho nút
  if (toithucdon) {
    toithucdon.addEventListener("click", function () {
      window.location.href = "menu.html"; // Chuyển hướng đến trang thực đơn
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Thực đơn
  const buyNowButton = document.getElementById("thucdon2");
  // Thêm sự kiện click cho nút
  if (thucdon2) {
    thucdon2.addEventListener("click", function () {
      alert("Bạn chưa đăng nhập! Vui lòng đăng nhập!");
      window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
    });
  }
});

// JavaScript code for logout functionality
document.getElementById("logoutLink").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>

  // Thực hiện các thao tác đăng xuất (nếu có lưu dữ liệu vào localStorage/sessionStorage)
  // Ví dụ xóa token hoặc dữ liệu đăng nhập
  localStorage.removeItem("userToken"); // Nếu sử dụng token trong localStorage
  sessionStorage.clear(); // Xóa tất cả dữ liệu trong sessionStorage

  // Hiển thị thông báo đăng xuất thành công
  alert("Đăng xuất thành công!");

  // Chuyển hướng về trang index.html
  window.location.href = "index.html";
});
// Lấy tất cả các nút Order
const orderButtons = document.querySelectorAll('.button-Order');

// Thêm sự kiện click cho từng nút
orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Đặt món thành công!');
  });
});

//Liên hệ
// /// Lấy phần tử form và input
// const contactForm = document.getElementById('contactForm');
// const emailInput = document.getElementById('emailInput');

// // Lắng nghe sự kiện khi form được gửi
// contactForm.addEventListener('submit', function (event) {
//   event.preventDefault(); // Ngăn chặn hành vi mặc định (tải lại trang)

//   const email = emailInput.value.trim(); // Lấy giá trị email và loại bỏ khoảng trắng

//   if (email === '') {
//     // Nếu ô nhập trống, hiển thị thông báo lỗi
//     alert('Vui lòng nhập địa chỉ email!');
//   } else {
//     // Nếu có giá trị, hiển thị thông báo thành công
//     alert('Chúng tôi sẽ hỗ trợ bạn sớm hơn');
//     emailInput.value = ''; // Xóa nội dung ô nhập sau khi gửi
//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const emailInput = document.querySelector(".intext");
//   const submitButton = document.getElementById("button-Gui");

//   submitButton.addEventListener("click", (event) => {
//       event.preventDefault();
//       const emailValue = emailInput.value.trim();

//       if (emailValue === "") {
//           alert("Vui lòng nhập địa chỉ email!");
//       } else {
//           alert("Cảm ơn bạn, chúng tôi sẽ liên hệ bạn qua Email, vui lòng kiểm tra email");
//           emailInput.value = "";
//       }
//   });
// });

// document.getElementById("linkcamon").addEventListener("click", function(event) {
//   const emailInput = document.querySelector(".intext");
//   const email = emailInput.value.trim();

//   if (email === "") {
//       // Chặn hành động chuyển trang nếu ô trống
//       event.preventDefault();
//       // Hiển thị thông báo
//       alert("Bạn chưa nhập email!");
//   } else {
//       // Kiểm tra định dạng email
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(email)) {
//           event.preventDefault();
//           alert("Địa chỉ email không hợp lệ!");
//       }
//   }
// });
document.getElementById("linkcamon").addEventListener("click", function (event) {
  // Lấy giá trị của ô input
  const emailInput = document.querySelector(".intext").value.trim();

  // Kiểm tra xem email có được nhập hay không
  if (!emailInput) {
    // Ngăn điều hướng và hiển thị thông báo
    event.preventDefault();
    alert("Bạn chưa nhập email!");
  } else {
    // Kiểm tra định dạng email (tùy chọn, để chắc chắn email hợp lệ)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      event.preventDefault();
      alert("Email không hợp lệ!");
    }
  }
});

// Lỗi rồi
openOrder.addEventListener('click', () => {
  body.classList.add('active');
})
openOrder.addEventListener('click', () => {
  body.classList.remove('active');
})
//Lỗi luôn rồi
// JavaScript để xử lý hiển thị/ẩn giỏ hàng
const giohangIcon = document.getElementById('giohang');
const card = document.querySelector('.card');
const closeCardButton = document.querySelector('.closeCard');
const soluongElement = document.querySelector('.soluong');
const listCard = document.querySelector('.listCard');
const totalElement = document.querySelector('.total');

// Biến để lưu danh sách sản phẩm trong giỏ hàng
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartUI();
}

// Hàm cập nhật giao diện giỏ hàng
function updateCartUI() {
  // Cập nhật số lượng trong giỏ hàng
  soluongElement.textContent = cart.length;

  // Cập nhật danh sách sản phẩm trong giỏ hàng
  listCard.innerHTML = '';
  cart.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.price} VNĐ`;
    listCard.appendChild(li);
  });

  // Cập nhật tổng tiền
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  totalElement.textContent = `Tổng cộng: ${total} VNĐ`;
}

// Khi người dùng click vào biểu tượng giỏ hàng, hiển thị hoặc ẩn giỏ hàng
giohangIcon.addEventListener('click', function () {
  if (card.style.display === 'none' || card.style.display === '') {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
});

// Khi người dùng click vào nút "Close", ẩn giỏ hàng
closeCardButton.addEventListener('click', function () {
  card.style.display = 'none';
});

// Thêm một số sản phẩm vào giỏ hàng để kiểm tra
setTimeout(() => addToCart('Phở Bò', 20000), 1000);
setTimeout(() => addToCart('Bánh mì', 15000), 3000);
setTimeout(() => addToCart('Trà sữa', 25000), 5000);
