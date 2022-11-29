const formEl = document.querySelector("form");
      const errorName = document.querySelector("#name ~ .error");
      const errorImage= document.querySelector("#image ~ .error");
      const errorPrice= documet.querySelector("#price ~ .error");
      const errorTitle= document.querySelector("#title ~ .error");
      formEl.onsubmit = function (event) {
        event.preventDefault();
        const formData = [...new FormData(formEl)];
        const { name, image, price, title } = Object.fromEntries(formData);
        let formValue = true;
        if (name.trim().length === 0) {
          errorName.textContent = "Thông tin không được để trống";
          formValue = false;
        }
        console.log(formData);
        if (image.length === 0) {
          errorImage.textContent= "Thông tin không được để trống";
          formVlaue = false;
        }
        if (price.trim() === 0) {
          errorPrice= "Thông tin không được để trống";
          formValue = false;
        }
        if (title.trim() === 0) {
          errorTitle= "Thông tin không được để trống";
          formValue = false;
        }
        if (formValue) {
          console.log("thanh cong");
        }
        const newId = "id-" + Date.now().toString().slice(-4);
        const newProduct = { id: newId, name, image, price, title };
        if (!localStorage.getItem("products")) {
          const productList = [newProduct];
          localStorage.setItem("products", JSON.stringify(productList));
        } else {
          const oldListJson = localStorage.getItem("products");
          const existingList = JSON.parse(oldListJson);
          existingList.push(newProduct);
          localStorage.setItem("products", JSON.stringify(existingList));
        }
      }
     
