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

//getting top store banners
$.ajax({
		url: 'http://www.shoppingspout.us/api/featured-stores2.php',
		type: 'GET',
		dataType: 'json',
		success: function (result) {
				//alert(result[0].store_id)
				//alert(result.length);
				var data = '';
				for (var i=0 ; i <= (result.length-1); i++) {
				   
				   $.each( result[i], function( key, value ) {
					 if(key == 'std'){
					    data += "<div class='col-50 half'><a href='#' onclick=\"window.open('"+ result[i].store_url+"', '_system', 'location=yes'); return false;\"><img src='" + result[i].store_image +"'></a></div>";
						
					 }	
				   });
				}
				
				$('#featured_stores_list').html(data);
			},
		error: function (request, error) {
				alert('Error ' + error);
			}
	});

//getting top brands	
$.ajax({
	url: 'http://www.shoppingspout.us/api/featured-brands2.php',
	type: 'GET',
	dataType: 'json',
	success: function (result) {
			//alert(result[0].store_id)
			//alert(result.length);
			var data = '';
			for (var i=0 ; i <= (result.length-1); i++) {
			   
			   $.each( result[i], function( key, value ) {
				 if(key == 'brand_id')
					data += "<div class='col-25 feat-app'><a href='stores_coupons.html?store_id="+ result[i].store_id+ "'><img src='" + result[i].brand_image +"'></a></div>";
			   });
			}
			
			$('#featured_brands_list').html(data);
		},
	error: function (request, error) {
			alert('Error ' + error);
		}
});




// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {

   // Get page data from event data
    var page = e.detail.page;

	if (page.name === 'index') {
	
        $.ajax({
			url: 'http://www.shoppingspout.us/api/featured-stores2.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'std')
							data += "<div class='col-50 half'><a href='#' onclick=\"window.open('"+ result[i].store_url+"', '_system', 'location=yes'); return false;\"><img src='" + result[i].store_image +"'></a></div>";
					   });
					}
					
					$('#featured_stores_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
		});
		
		$.ajax({
			url: 'http://www.shoppingspout.us/api/featured-brands2.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'brand_id')
							data += "<div class='col-25 feat-app'><a href='stores_coupons.html?store_id="+ result[i].store_id+ "'><img src='" + result[i].brand_image +"'></a></div>"
					   });
					}
					
					$('#featured_brands_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
		});
		
		
    }
	
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
					var store_heading ='';
					var store_logo_main= '';
					var store_heading_main = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						  //data  += 	key + '  =  ' + value;
						 if(key == 'coupon_id')
							data += '<div class="row stores-content">'
									+ '<div class="col-80 heading-stores-content">'
									+ '<ul id="store_list">'
									+		'<li class="item-content">'
									+			'<div class="item-inner"><div class="item-title">' 
									+			'<a href="coupon-detail.html?coupon_id=' + result[i].coupon_id +'" class="headings">' + result[i].coupon_title +'</a></div></div>'
									+		'</li>'
									+ '</ul>'
									+ '<hr />'
									+ '</div>'
									+ '<!--end div-->'
									+ '<div class="col-20 stores-star-save">'
									+		'<span><h6>save</h6><div class="item-media"><i class="f7-icons size-22"></i></i></div></span>'
									+ '</div>'
									+ '<!--end stat save-->'
									+ '<div class="row">'
									+	'<div class="col-100 full-content-store">'
									+		'<h6>' + result[i].store_name +'</h6>'
									+		'<p>' + result[i].coupon_description +'</p>'
									+	'</div>'
									+	'<div class="col-2ds0 success">'
									+		'<p>' + result[i].success_ration +'%Success</p>'
									+	'</div>'
									+	'<div class="col-60 expire">'
									+		'<p>Expire: ' + result[i].coupon_expiry_date +'</p>'
									+	'</div>'
									+ '</div>'
									+ '</div>';
									
							store_heading = result[i].store_name;
							store_heading_main = result[i].store_name + ' Coupons and Offers';
							store_logo_main = '<img src="'+ result[i].store_logo +'" width="50%" height="50%"/>';		
					   });
					}
					//alert(data);
					
					$('#store_coupons_list1').html(data);
					$('#store_name_heading').html(store_heading);
					$('#store_heading_main').html(store_heading_main);
					$('#store_logo_div').html(store_logo_main);
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







	  
function search()
{
	var value = document.getElementById('test').value;
	$.ajax({
			url: 'http://www.shoppingspout.us/api/search-stores2.php?search_term='+value,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'store_name')
							data += " <a href='stores_coupons.html?store_id="+ result[i].store_id+ "'>" + result[i].store_name +"</a>";
									  
 
					   });
					}
					alert(data);
					//$('#store_list').html(data);
				},
			error: function (request, error) {
					alert('Error ' + error);
				}
			});
}



var autocompleteDropdownAjax = myApp.autocomplete({
    input: '#autocomplete-dropdown-ajax',
    openIn: 'dropdown',
    preloader: true, //enable preloader
    valueProperty: 'id', //object's "value" property name
    textProperty: 'name', //object's "text" property name
    limit: 20, //limit to 20 results
    dropdownPlaceholderText: '',
    expandInput: true, // expand input
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        // Show Preloader
        autocomplete.showPreloader();
        // Do Ajax request to Autocomplete data
        $$.ajax({
            url: 'http://www.shoppingspout.us/api/search-stores2.php',
            method: 'GET',
            dataType: 'json',
            //send "query" to server. Useful in case you generate response dynamically
            data: {
                query: query
            },
            success: function (data) {
                // Find matched items
                for (var i = 0; i < data.length; i++) {
                    //alert(data[i].store_name);
					if (data[i].store_name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                }
                // Hide Preoloader
                autocomplete.hidePreloader();
                // Render items by passing array with result items
                render(results);
            }
        });
    }
});