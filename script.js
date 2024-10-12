document.addEventListener("DOMContentLoaded", function () {
  const foodItem = [
    {
      id: 1,
      name: "Ambur Biryani",
      category: "biryani",
      rating: 4.3,
      price: 13,
      img: "images/biryani/Ambur-Chicken-Biryani.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Hyderabadi Biryani",
      category: "biryani",
      rating: 4.3,
      price: 15,
      img: "images/biryani/Chicken-Biryani-hyd.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Egg Biryani",
      category: "biryani",
      rating: 4.3,
      price: 18,
      img: "images/biryani/egg-biryani.jpeg",
      quantity: 1,
    },
    {
      id: 4,
      name: "Goan Fish Biryani",
      category: "biryani",
      rating: 4.3,
      price: 15,
      img: "images/biryani/goan-fish-biryani.jpg",
      quantity: 1,
    },
    {
      id: 5,
      name: "Mutton Biryani",
      category: "biryani",
      rating: 4.3,
      price: 10,
      img: "images/biryani/hyd-Mutton-Biryani.jpg",
      quantity: 1,
    },
    {
      id: 6,
      name: "Kamrupi Biryani",
      category: "biryani",
      rating: 4.3,
      price: 12,
      img: "images/biryani/kamrupi-biryani.jpg",
      quantity: 1,
    },
    {
      id: 7,
      name: "Kashmiri Biryani",
      category: "biryani",
      rating: 4.3,
      price: 13,
      img: "images/biryani/kashmiri.pulao.jpg",
      quantity: 1,
    },
    {
      id: 8,
      name: "Memoni Biryani",
      category: "biryani",
      rating: 4.3,
      price: 20,
      img: "images/biryani/memonibiryani.png",
      quantity: 1,
    },
    {
      id: 9,
      name: "Mughlai Biryani",
      category: "biryani",
      rating: 4.3,
      price: 15,
      img: "images/biryani/mughlai-biryani.jpg",
      quantity: 1,
    },
    {
      id: 10,
      name: "Chicken Roast",
      category: "chicken",
      rating: 4.3,
      price: 11,
      img: "images/chicken/Chicken_roast.jpg",
      quantity: 1,
    },
    {
      id: 11,
      name: "Chicken Curry",
      category: "chicken",
      rating: 4.3,
      price: 10,
      img: "images/chicken/Chicken-Curry.jpg",
      quantity: 1,
    },
    {
      id: 12,
      name: "Chicken Do Pyaza",
      category: "chicken",
      rating: 4.3,
      price: 14,
      img: "images/chicken/Chicken-do-Pyaza.jpg",
      quantity: 1,
    },
    {
      id: 13,
      name: "Chicken Masala",
      category: "chicken",
      rating: 4.3,
      price: 12,
      img: "images/chicken/Chicken-Masala.jpeg",
      quantity: 1,
    },
    {
      id: 14,
      name: "Handi Chicken",
      category: "chicken",
      rating: 4.3,
      price: 17,
      img: "images/chicken/Handi-chicken.jpg",
      quantity: 1,
    },
    {
      id: 15,
      name: "Murgh Musallam",
      category: "chicken",
      rating: 4.3,
      price: 20,
      img: "images/chicken/Murgh-Musallam.jpg",
      quantity: 1,
    },
    {
      id: 16,
      name: "Matar Paneer",
      category: "paneer",
      rating: 4.3,
      price: 15,
      img: "images/paneer/Matar-Paneer.jpg",
      quantity: 1,
    },
    {
      id: 17,
      name: "Palak Paneer",
      category: "paneer",
      rating: 4.3,
      price: 10,
      img: "images/paneer/palak-paneer.jpg",
      quantity: 1,
    },
    {
      id: 18,
      name: "Paneer Butter Masala",
      category: "paneer",
      rating: 4.3,
      price: 15,
      img: "images/paneer/paneer-butter-masala.jpg",
      quantity: 1,
    },
    {
      id: 19,
      name: "Paneer Do Pyaza",
      category: "paneer",
      rating: 4.3,
      price: 12,
      img: "images/paneer/Paneer-Do-Pyaza.jpg",
      quantity: 1,
    },
    {
      id: 20,
      name: "Hyderabadi Paneer",
      category: "paneer",
      rating: 4.3,
      price: 8,
      img: "images/paneer/Paneer-Hyderabadi.jpg",
      quantity: 1,
    },
    {
      id: 21,
      name: "Paneer Lababdar",
      category: "paneer",
      rating: 4.3,
      price: 7,
      img: "images/paneer/paneer-lababdar.jpg",
      quantity: 1,
    },
    {
      id: 22,
      name: "Shahi Paneer",
      category: "paneer",
      rating: 4.3,
      price: 5,
      img: "images/paneer/shahi-paneer.jpg",
      quantity: 1,
    },
    {
      id: 23,
      name: "Navratan Korma",
      category: "vegetable",
      rating: 4.3,
      price: 8,
      img: "images/vegetable/navratan-korma_-vegetable.png",
      quantity: 1,
    },
    {
      id: 24,
      name: "Veg Jalfrezi",
      category: "vegetable",
      rating: 4.3,
      price: 7,
      img: "images/vegetable/VEG-JALFREZI.jpg",
      quantity: 1,
    },
    {
      id: 25,
      name: "Veg Biryani",
      category: "vegetable",
      rating: 4.3,
      price: 5,
      img: "images/vegetable/vegetable-biryani.jpg",
      quantity: 1,
    },
    {
      id: 26,
      name: "Veg Curry",
      category: "vegetable",
      rating: 4.3,
      price: 7,
      img: "images/vegetable/vegetable-curry.jpeg",
      quantity: 1,
    },
    {
      id: 27,
      name: "Veg Kolhapur",
      category: "vegetable",
      rating: 4.3,
      price: 10,
      img: "images/vegetable/vegetable-kolhapuri.jpg",
      quantity: 1,
    },
    {
      id: 28,
      name: "Veg Masala",
      category: "vegetable",
      rating: 4.3,
      price: 4,
      img: "images/vegetable/vegetable-masala.jpg",
      quantity: 1,
    },
    {
      id: 29,
      name: "Veg Pakora",
      category: "vegetable",
      rating: 4.3,
      price: 4,
      img: "images/vegetable/vegetable-pakora.jpg",
      quantity: 1,
    },
    {
      id: 30,
      name: "Momos",
      category: "chinese",
      rating: 4.3,
      price: 8,
      img: "images/chinese/cabbage-momos-.jpg",
      quantity: 1,
    },
    {
      id: 31,
      name: "Chicken Manchurian",
      category: "chinese",
      rating: 4.3,
      price: 7,
      img: "images/chinese/ChickenManchurian.jpg",
      quantity: 1,
    },
    {
      id: 32,
      name: "Chili Chicken",
      category: "chinese",
      rating: 4.3,
      price: 5,
      img: "images/chinese/Chili-Chicken.jpg",
      quantity: 1,
    },
    {
      id: 33,
      name: "Chowmein",
      category: "chinese",
      rating: 4.3,
      price: 16,
      img: "images/chinese/chowmin.jpg",
      quantity: 1,
    },
    {
      id: 34,
      name: "Spring Roll",
      category: "chinese",
      rating: 4.3,
      price: 14,
      img: "images/chinese/spring-rolls.jpg",
      quantity: 1,
    },
    {
      id: 35,
      name: "Szechuan Chicken",
      category: "chinese",
      rating: 4.3,
      price: 10,
      img: "images/chinese/szechuan-chicken.jpg",
      quantity: 1,
    },
    {
      id: 36,
      name: "Fried Rice",
      category: "chinese",
      rating: 4.3,
      price: 8,
      img: "images/chinese/veg-fried-rice.jpg",
      quantity: 1,
    },
    {
      id: 37,
      name: "Butter Masala Dosa",
      category: "south-indian",
      rating: 4.3,
      price: 18,
      img: "images/south indian/Butter-Masala-Dosa.png",
      quantity: 1,
    },
    {
      id: 38,
      name: "Idli",
      category: "south-indian",
      rating: 4.3,
      price: 20,
      img: "images/south indian/idli-with-rice-flour.jpg",
      quantity: 1,
    },
    {
      id: 39,
      name: "Masala Dosa",
      category: "south-indian",
      rating: 4.3,
      price: 12,
      img: "images/south indian/masala-dosa.jpg",
      quantity: 1,
    },
    {
      id: 40,
      name: "Mysore Bonda",
      category: "south-indian",
      rating: 4.3,
      price: 10,
      img: "images/south indian/mysore-bonda.jpg",
      quantity: 1,
    },
    {
      id: 41,
      name: "Onion Uttapam",
      category: "south-indian",
      rating: 4.3,
      price: 15,
      img: "images/south indian/onion-uttapam.jpg",
      quantity: 1,
    },
    {
      id: 42,
      name: "Plain Dosa",
      category: "south-indian",
      rating: 4.3,
      price: 40,
      img: "images/south indian/plain-dosa.jpeg",
      quantity: 1,
    },
    {
      id: 43,
      name: "Rava Uttapam",
      category: "south-indian",
      rating: 4.3,
      price: 25,
      img: "images/south indian/Rava-Uttapam.jpg",
      quantity: 1,
    },
    {
      id: 44,
      name: "Sambhar Vada",
      category: "south-indian",
      rating: 4.3,
      price: 34,
      img: "images/south indian/sambhar-vada.jpg",
      quantity: 1,
    },
  ];

  console.log(foodItem);
  // Should log the foodItem array to the console

  // selecting all the id's and holding into variable
  function displayItems() {
    let biryani = document.getElementById("biryani");
    let chicken = document.getElementById("chicken");
    let paneer = document.getElementById("paneer");
    let vegetable = document.getElementById("vegetable");
    let chinese = document.getElementById("chinese");
    let southIndian = document.getElementById("south-indian");

    // Filtering data based on categories
    const biryaniData = foodItem.filter((item) => item.category == "biryani");
    const chickenData = foodItem.filter((item) => item.category == "chicken");
    const paneerData = foodItem.filter((item) => item.category == "paneer");
    const vegetableData = foodItem.filter(
      (item) => item.category == "vegetable"
    );
    const chineseData = foodItem.filter((item) => item.category == "chinese");
    const southIndianData = foodItem.filter(
      (item) => item.category == "south-indian"
    );

    // Function to create item cards
    const createItemCard = (data, container) => {
      data.map((item) => {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        let cardTop = document.createElement("div");
        cardTop.setAttribute("id", "card-top");

        let star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerText = " " + item.rating;

        let heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart add-to-cart fa-heart-o");
        id = heart.setAttribute("id", item.id);
        console.log(id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement("img");
        img.src = item.img;

        let itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        let itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText = "Price : $" + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        container.appendChild(itemCard);
      });
    };

    // Creating cards for each category
    createItemCard(biryaniData, biryani);
    createItemCard(chickenData, chicken);
    createItemCard(paneerData, paneer);
    createItemCard(vegetableData, vegetable);
    createItemCard(chineseData, chinese);
    createItemCard(southIndianData, southIndian);
  }
  displayItems();

  // Creating category list
  const categoryListData = [
    ...new Map(foodItem.map((item) => [item["category"], item])).values(),
  ];

  console.log(categoryListData);

  function categoryList() {
    let categoryList = document.getElementById("category-list");

    categoryListData.map((item) => {
      let listCard = document.createElement("div");
      listCard.setAttribute("class", "list-card");

      let listImg = document.createElement("img");
      listImg.src = item.img;

      let listName = document.createElement("a");
      listName.setAttribute("class", "list-name");
      listName.innerText = item.category;
      listName.setAttribute("href", "#" + item.category);

      listCard.appendChild(listImg);
      listCard.appendChild(listName);

      categoryList.appendChild(listCard);
    });
  }
  categoryList();

  document.addEventListener("DOMContentLoaded", () => {
    // Add to Cart
    document.querySelectorAll(".add-to-cart").forEach((item) => {
      item.addEventListener("click", addToCart);
    });

    let cartData = [];
    function addToCart() {
      let itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
      let itemObj = foodItem.find((element) => element.name === itemToAdd);

      let index = cartData.indexOf(itemObj);
      if (index === -1) {
        itemObj.quantity = 1; // Initialize quantity
        document.getElementById(itemObj.id).classList.add("toggle-heart");
        cartData.push(itemObj);
      } else if (index > -1) {
        alert("Item already in cart");
      }

      document.getElementById("cart-plus").innerText =
        " " + cartData.length + " Items";
      totalAmount();
      cartItems();
    }

    // add item card
    function cartItems() {
      let tableBody = document.getElementById("table-body");
      tableBody.innerHTML = ""; // Clear existing items

      cartData.forEach((item) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = item.img;
        td1.appendChild(img);

        let td2 = document.createElement("td");
        td2.innerText = item.name;

        let td3 = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "decrease-item");
        btn1.innerHTML = "-";
        let span = document.createElement("span");
        span.innerText = item.quantity;
        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "increase-item");
        btn2.innerHTML = "+";

        td3.appendChild(btn1);
        td3.appendChild(span);
        td3.appendChild(btn2);

        let td4 = document.createElement("td");
        td4.innerText = item.price;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3); // Append td3 to tr
        tr.appendChild(td4);

        tableBody.appendChild(tr);
      });

      // Attach event listeners to the new buttons
      document.querySelectorAll(".increase-item").forEach((item) => {
        item.addEventListener("click", increaseItem);
      });
      document.querySelectorAll(".decrease-item").forEach((item) => {
        item.addEventListener("click", decreaseItem);
      });
    }

    let flag = false;
    function increaseItem() {
      let itemToInc = this.parentNode.previousSibling.previousSibling.innerText;
      let incObj = cartData.find((element) => element.name === itemToInc);
      incObj.quantity += 1;
      updateItemPrice(incObj);
      totalAmount();
      cartItems();
    }

    function decreaseItem() {
      let itemToDec = this.parentNode.previousSibling.previousSibling.innerText;
      let decObj = cartData.find((element) => element.name === itemToDec);
      if (decObj.quantity > 1) {
        decObj.quantity -= 1;
        updateItemPrice(decObj);
      } else {
        document.getElementById(decObj.id).classList.remove("toggle-heart");
        cartData = cartData.filter((item) => item.id !== decObj.id);
        document.getElementById("cart-plus").innerText = " " + cartData.length;
      }
      totalAmount();
      cartItems();
    }

    function updateItemPrice(item) {
      item.price = item.basePrice * item.quantity; // Update price based on quantity
    }

    function totalAmount() {
      let total = cartData.reduce((acc, item) => acc + item.price, 0);
      document.getElementById("total-amount").innerText =
        "Total Amount: $" + total;
    }

    function cartToggle() {
      if (cartData.length > 0) {
        document.getElementById("food-items").classList.toggle("food-items");
        document.getElementById("category-list").classList.toggle("food-items");
        document.getElementById("cart-page").classList.toggle("cart-toggle");
        document.getElementById("checkout").classList.toggle("cart-toggle");
        flag = true;
      } else {
        alert("currently no items in cart");
      }
    }

    document.getElementById("cart-plus").addEventListener("click", cartToggle);
  });
});
