
var app = new function() {
    this.el = document.getElementById('tasks');
  
    this.tasks = ["Sarang", "Gyeomson", "Yongki", "Nideum"];
    this.addresses = ["Carmichael 101", "Kuyper 309", "SonYangWon 902", "Rodem 220"];
    this.numbers = ["010-1234-5678", "010-9999-9999", "010-1111-1111", "010-8282-1004"];
    this.emails = ["joy@gmail.com", "haley@naver.com", "never@daum.net", "friends@hotmail.com"];
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.tasks.length > 0) {
        for (i = 0; i < this.tasks.length; i++) {
          data += '<tr>';
          data += '<td>' +(i+1)+'</td>';

          data += '<td>' + this.tasks[i] + '</td>';
          data += '<td>' + this.addresses[i] + '</td>';
          data += '<td>' + this.numbers[i] + '</td>';
          data += '<td>' + this.emails[i] + '</td>';

          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button>';
          data += '<button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.tasks.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-todo');
      el2 = document.getElementById('add-todo2');
      el3 = document.getElementById('add-todo3');
      el4 = document.getElementById('add-todo4');

      var task = el.value;
      var address = el2.value;
      var number = el3.value;
      var email = el4.value;


      if(!task){
        alert("모든 항목을 작성하세요");
      }
      else if(confirm("게시물이 추가됩니다")){
        alert("추가되었습니다");
        window.location.href = "./index.html";
        // Add the new value
        this.tasks.push(task.trim());
        el.value = '';
     
        this.addresses.push(address.trim());
        el2.value = '';
  
        this.numbers.push(number.trim());
        el3.value = '';

        this.emails.push(email.trim());
        el4.value = '';

        // Dislay the new list
        this.FetchAll();

        
      }
      else {
        alert("취소되었습니다");
      }
      
    
    };

    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      window.location.href = "./edit.html";
      // Display value in the field
      el.value = this.tasks[item];
      // Display fields
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        // Get value
        var task = el.value;
  
        if (task) {
          self.tasks.splice(item, 1, task.trim());
          self.FetchAll();
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
        if(confirm("게시물을 삭제할까요?")){
          
          // Delete the current row
          this.tasks.splice(item, 1);
          // Display the new list
          this.FetchAll();
          alert("삭제되었습니다");
        }
        else{ 
          alert("취소되었습니다");
        }
        
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Contact';
  
      if (data) {
          if(data ==1){
              name = 'Task';
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }