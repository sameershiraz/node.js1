// Userlist data array for filling in info box
var userListData = [];
var productListData = [];
var employeeListData = [];
var supplierListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTableUsr();
    // Populate the product table on initial page load
    populateTablePro();
    // Populate the employee table on initial page load
    populateTableEmp();
    // Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
    // Add User button click
    $('#btnAddUser').on('click', addUser);
    // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);
    // Productname link click
    $('#productList table tbody').on('click', 'td a.linkshowproduct', showProductInfo);
    // Add Product button click
    $('#btnAddProduct').on('click', addProduct);
    // Delete Product link click
    $('#productList table tbody').on('click', 'td a.linkdeleteproduct', deleteProduct);
    //Employeename link click
    $('#employeeList table tbody').on('click', 'td a.linkshowemployee', showEmployeeInfo);
    // Add Employee button click
    $('#btnAddEmployee').on('click', addEmployee);
    // Delete Employee link click
    $('#employeeList table tbody').on('click', 'td a.linkdeleteemployee', deleteEmployee);
    //Suppliername link click
    $('#supplierList table tbody').on('click', 'td a.linkshowsupplier', showSupplierInfo);
    // Add Supplier button click
    $('#btnAddSupplier').on('click', addSupplier);
    // Delete supplier link click
    $('#supplierList table tbody').on('click', 'td a.linkdeletesupplier', deleteSupplier);

});


// Functions =============================================================

// Fill table with data
function populateTableUsr() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {

      // Stick our user data array into a userlist variable in the global object
          userListData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Fill emp_table with data
function populateTablePro() {

    // Empty content string
    var tableContentPro = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/productlist', function( pdata ) {

      // Stick our product data array into a productlist variable in the global object
          productListData = pdata;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(pdata, function(){
            tableContentPro += '<tr>';
            tableContentPro += '<td><a href="#" class="linkshowproduct" rel="' + this.productname + '">' + this.productname + '</a></td>';
            tableContentPro += '<td>' + this.type + '</td>';
            tableContentPro += '<td><a href="#" class="linkdeleteproduct" rel="' + this._id + '">delete</a></td>';
            tableContentPro += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#productList table tbody').html(tableContentPro);
    });
};

function populateTableEmp() {

    // Empty content string
    var tableContentEmp = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/employeelist', function( edata ) {

      // Stick our product data array into a productlist variable in the global object
          employeeListData = edata;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(edata, function(){
            tableContentEmp += '<tr>';
            tableContentEmp += '<td><a href="#" class="linkshowemployee" rel="' + this.employeename + '">' + this.employeename + '</a></td>';
            tableContentEmp += '<td>' + this.designation + '</td>';
            tableContentEmp += '<td><a href="#" class="linkdeleteemployee" rel="' + this._id + '">delete</a></td>';
            tableContentEmp += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#employeeList table tbody').html(tableContentEmp);
    });
};

function populateTableSup() {

    // Empty content string
    var tableContentSup = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/supplierlist', function( sdata ) {

      // Stick our product data array into a productlist variable in the global object
          supplierListData = sdata;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(edata, function(){
            tableContentSup += '<tr>';
            tableContentSup += '<td><a href="#" class="linkshowsupplier" rel="' + this.suppliername + '">' + this.suppliername + '</a></td>';
            tableContentSup += '<td>' + this.item + '</td>';
            tableContentSup += '<td><a href="#" class="linkdeletesupplier" rel="' + this._id + '">delete</a></td>';
            tableContentSup += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#employeeList table tbody').html(tableContentSup);
    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.username; }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);
    $('#userInfo')

};

// Show Product Info
function showProductInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve productname from link rel attribute
    var thisProductName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = productListData.map(function(arrayItem) { return arrayItem.productname; }).indexOf(thisProductName);

    // Get our Product Object
    var thisProductObject = productListData[arrayPosition];

    //Populate Info Box
    $('#productInfoName').text(thisProductObject.Productname);
    $('#productInfoBrand').text(thisProductObject.brand);
    $('#productInfoType').text(thisProductObject.type);
    $('#productInfoPrice').text(thisProductObject.price);

};

// Show Employee Info
function showEmployeeInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve employeename from link rel attribute
    var thisEmployeeName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = employeeListData.map(function(arrayItem) { return arrayItem.employeename; }).indexOf(thisEmployeeName);

    // Get our Employee Object
    var thisEmployeeObject = employeeListData[arrayPosition];

    //Populate Info Box
    $('#employeeInfoName').text(thisEmployeeObject.Productname);
    $('#employeeInfoDesignation').text(thisEmployeeObject.designation);
    $('#employeeInfoAge').text(thisEmployeeObject.age);
    $('#employeeInfoSalary').text(thisEmployeeObject.salary);

};

// Show Supplier Info
function showSupplierInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve productname from link rel attribute
    var thisProductName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = SupplierListData.map(function(arrayItem) { return arrayItem.suppliername; }).indexOf(thisSupplierName);

    // Get our Supplier Object
    var thisSupplierObject = supplierListData[arrayPosition];

    //Populate Info Box
    $('#supplierInfoName').text(thisSupplierObject.Suppliername);
    $('#supplierInfoItem').text(thisSupplierObject.item);

};

// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'username': $('#addUser fieldset input#inputUserName').val(),
            'email': $('#addUser fieldset input#inputUserEmail').val(),
            'fullname': $('#addUser fieldset input#inputUserFullname').val(),
            'age': $('#addUser fieldset input#inputUserAge').val(),
            'location': $('#addUser fieldset input#inputUserLocation').val(),
            'gender': $('#addUser fieldset input#inputUserGender').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addUser fieldset input').val('');

                // Update the table
                populateTableUsr();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Add Product
function addProduct(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addProduct input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all product info into one object
        var newProduct = {
            'productname': $('#addProduct fieldset input#inputProductName').val(),
            'brand': $('#addProduct fieldset input#inputProductbrand').val(),
            'type': $('#addProduct fieldset input#inputProductType').val(),
            'price': $('#addProduct fieldset input#inputProductPrice').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newProduct,
            url: '/users/addproduct',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addProduct fieldset input').val('');

                // Update the table
                populateTablePro();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Add Employee
function addEmployee(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addEmployee input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newEmployee = {
            'employeename': $('#addEmployee fieldset input#inputEmployeeName').val(),
            'designation': $('#addEmployee fieldset input#inputEmployeeDesignation').val(),
            'age': $('#addEmployee fieldset input#inputEmployeeAge').val(),
            'salary': $('#addEmployee fieldset input#inputEmployeeSalary').val(),
          }

        // Use AJAX to post the object to our addEmployee service
        $.ajax({
            type: 'POST',
            data: newEmployee,
            url: '/users/addemployee',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addEmployee fieldset input').val('');

                // Update the table
                populateTableEmp();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Add Supplier
function addSupplier(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addSupplier input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newSupplier = {
            'Suppliername': $('#addSupplier fieldset input#inputSupplierName').val(),
            'Item': $('#addSupplier fieldset input#inputSupplierItem').val(),

        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newSupplier,
            url: '/users/addsupplier',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addUser fieldset input').val('');

                // Update the table
                populateTableSup();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};


// Delete User
function deleteUser(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteuser/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTableUsr();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

// Delete Product
function deleteProduct(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this Product?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteproduct/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTablePro();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

// Delete Employee
function deleteEmployee(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteemployee/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTableEmp();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};
// Delete Supplier
function deleteSupplier(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this Supplier?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deletesupplier/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTableSup();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};
