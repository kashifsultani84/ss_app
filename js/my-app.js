// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

//theme color
//$$('.view').addClass('theme-red');
//$$('.view').addClass('theme-blue');
//$$('.view').addClass('theme-green');



// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

	
    if (page.name === 'stores') {
        //jQuery.noConflict();
		$.ajax({
			url: 'http://www.shoppingspout.us/api/all-stores2.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'store_name')
							data += " <li class='item-content'><div class='item-media'><i class='icon icon-form-name'></i></div><div class='item-inner'><div class='item-title'><i class='fa fa-tags' style='font-size:20px;color:#007aff;'></i> <a href='stores_coupons.html?store_id="+ result[i].store_id+ "'>" + result[i].store_name +"</a></div></div></li>";
									  
										 
									  
						  
					   });
					}
					
					$('#store_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
			});
    }
	
	if (page.name === 'categories') {

		$.ajax({
			url: 'http://www.shoppingspout.us/api/all-categories2.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'category_name')
							data += " <li class='item-content'><div class='item-media'><i class='icon icon-form-name'></i></div><div class='item-inner'><div class='item-title'><i class='fa fa-tags' style='font-size:20px;color:#007aff;'></i> <a href='category_coupons.html?category_id="+ result[i].category_id+ "'>" + result[i].category_name +"</a></div></div></li>";
					   });
					}
					
					$('#category_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
			});
    }
	
	
	if (page.name === 'stores_coupons') {
		
		//alert(page.query.store_id);
		var store_id = page.query.store_id;
		
		$.ajax({
			url: 'http://www.shoppingspout.us/api/store-coupons2.php?store_id='+ store_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						  //data  += 	key + '  =  ' + value;
						 if(key == 'coupon_id')
							data += " <li class='item-content'><div class='item-media'><i class='icon icon-form-name'></i></div><div class='item-inner'><div class='item-title'><i class='fa fa-tags' style='font-size:20px;color:#007aff;'></i> <a href='"+ result[i].coupon_id+ "'>" + result[i].coupon_title +"</a></div></div></li>";
					   });
					}
					//alert(data);
					$('#store_coupons_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
			});
    }
	
	
	if (page.name === 'category_coupons') {
		
		var category_id = page.query.category_id;
		
		$.ajax({
			url: 'http://www.shoppingspout.us/api/category-coupons2.php?category_id=' + category_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'coupon_id')
							data += " <li class='item-content'><div class='item-media'><i class='icon icon-form-name'></i></div><div class='item-inner'><div class='item-title'><i class='fa fa-tags' style='font-size:20px;color:#007aff;'></i> <a href='"+ result[i].coupon_id+ "'>" + result[i].coupon_title +"</a></div></div></li>";
					   });
					}
					
					$('#category_coupons_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
			});
    }
})