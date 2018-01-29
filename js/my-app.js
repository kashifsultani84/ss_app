// Initialize app
//var myApp = new Framework7();

var myApp = new Framework7({
             swipePanel: 'left',
            pushState : true
         });
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
var site_url = sessionStorage.getItem('site');

if(!site_url){
	var site_url = 'http://www.shoppingspout.de';
	sessionStorage.setItem('site', 'http://www.shoppingspout.de');
}	

//alert("default: "+site_url);
//getting top store banners
$.ajax({
		url: site_url+'/api/featured-stores2.php',
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
				alert('Error: Please Check Internet Connection');
			}
	});

//getting top brands	
$.ajax({
	url: site_url+'/api/featured-brands2.php',
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
			alert('Error: Please Check Internet Connection');
		}
});

 $.ajax({
	url: site_url+'/api/strings.php',
	type: 'GET',
	dataType: 'json',
	success: function (result) {
			//alert(result[0].store_id)
			//alert(result.length);
			var data = '';
			var back_lbl = '';
			var home_lbl = '';
			var new_coupons_lbl = '';
			var all_stores_lbl = '';
			var all_categories_lbl = '';
			var categories_lbl = '';
			var top_stores_lbl = '';
			var search_lbl = '';
			var search_placeholder_text_lbl = '';
			var store_not_found_lbl = '';
			var category_not_found_lbl = '';
			var success_lbl = '';
			var loading_lbl = '';
			var loading_lbl2 = '';
			var featured_brands_lbl = '';
			
			for (var i=0 ; i <= (result.length-1); i++) {
			   
			   $.each( result[i], function( key, value ) {
				 if(key == 'back')
					back_lbl = result[i].back;
				 if(key == 'home')
					home_lbl = result[i].home;
				if(key == 'new_coupons')
					new_coupons_lbl = result[i].new_coupons;
				if(key == 'all_stores')
					all_stores_lbl = result[i].all_stores;
				if(key == 'all_categories')
					all_categories_lbl = result[i].all_categories;
				if(key == 'categories')
					categories_lbl = result[i].categories;
				if(key == 'top_stores')
					top_stores_lbl = result[i].top_stores;
				if(key == 'search')
					search_lbl = result[i].search;
				if(key == 'search_placeholder_text')
					search_placeholder_text_lbl = result[i].search_placeholder_text;
				if(key == 'store_not_found')
					store_not_found_lbl = result[i].store_not_found;
				if(key == 'category_not_found')
					category_not_found_lbl = result[i].category_not_found;
				if(key == 'success')
					success_lbl = result[i].success;
				if(key == 'loading')
					loading_lbl = result[i].loading;
				if(key == 'loading2')
					loading_lbl2 = result[i].loading2;
				if(key == 'featured_brands')
					featured_brands_lbl = result[i].featured_brands;					
			   });
			}
			
			$('#back_lbl').html(back_lbl);
			$('#home_lbl').html(home_lbl);
			$('#new_coupons_lbl').html(new_coupons_lbl);
			$('#all_stores_lbl').html(all_stores_lbl);
			$('#all_categories_lbl').html(all_categories_lbl);
			$('#categories_lbl').html(categories_lbl);
			$('#top_stores_lbl').html(top_stores_lbl);
			$('#search_lbl').html(search_lbl);
			$("#autocomplete-dropdown-ajax").attr("placeholder", search_placeholder_text_lbl).placeholder();
			$('#store_not_found_lbl').html(store_not_found_lbl);
			$('#category_not_found_lbl').html(category_not_found_lbl);
			$('#success_lbl').html(success_lbl);
			$('#loading_lbl').html(loading_lbl);
			$('#loading_lbl2').html(loading_lbl2);
			$('#featured_brands_lbl').html(featured_brands_lbl);
			
		},
	error: function (request, error) {
			alert('Error: Please Check Internet Connection');
		}
});


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {

   // Get page data from event data
    var page = e.detail.page;
	//var site = page.query.site;
	//alert(site);
	var site_url = sessionStorage.getItem('site');
	//if(!site_url)
		//var site_url = 'http://www.shoppingspout.de';
	//alert(site_url);
	//alert(page.name);
	
	if (page.name === 'home' || page.name === 'index') {
	//alert("here");
	$.ajax({
	url: site_url+'/api/strings.php',
	type: 'GET',
	dataType: 'json',
	success: function (result) {
			//alert(result[0].store_id)
			//alert(result.length);
			var data = '';
			var back_lbl = '';
			var home_lbl = '';
			var new_coupons_lbl = '';
			var all_stores_lbl = '';
			var all_categories_lbl = '';
			var categories_lbl = '';
			var top_stores_lbl = '';
			var search_lbl = '';
			var search_placeholder_text_lbl = '';
			var store_not_found_lbl = '';
			var category_not_found_lbl = '';
			var success_lbl = '';
			var loading_lbl = '';
			var loading_lbl2 = '';
			var featured_brands_lbl = '';
			
			for (var i=0 ; i <= (result.length-1); i++) {
			   
			   $.each( result[i], function( key, value ) {
				 if(key == 'back')
					back_lbl = result[i].back;
				 if(key == 'home')
					home_lbl = result[i].home;
				if(key == 'new_coupons')
					new_coupons_lbl = result[i].new_coupons;
				if(key == 'all_stores')
					all_stores_lbl = result[i].all_stores;
				if(key == 'all_categories')
					all_categories_lbl = result[i].all_categories;
				if(key == 'categories')
					categories_lbl = result[i].categories;
				if(key == 'top_stores')
					top_stores_lbl = result[i].top_stores;
				if(key == 'search')
					search_lbl = result[i].search;
				if(key == 'search_placeholder_text')
					search_placeholder_text_lbl = result[i].search_placeholder_text;
				if(key == 'store_not_found')
					store_not_found_lbl = result[i].store_not_found;
				if(key == 'category_not_found')
					category_not_found_lbl = result[i].category_not_found;
				if(key == 'success')
					success_lbl = result[i].success;
				if(key == 'loading')
					loading_lbl = result[i].loading;
				if(key == 'loading2')
					loading_lbl2 = result[i].loading2;
				if(key == 'featured_brands')
					featured_brands_lbl = result[i].featured_brands;					
			   });
			}
			
			$('#back_lbl').html(back_lbl);
			$('#home_lbl').html(home_lbl);
			$('#new_coupons_lbl').html(new_coupons_lbl);
			$('#all_stores_lbl').html(all_stores_lbl);
			$('#all_categories_lbl').html(all_categories_lbl);
			$('#categories_lbl').html(categories_lbl);
			$('#top_stores_lbl').html(top_stores_lbl);
			$('#search_lbl').html(search_lbl);
			$("#autocomplete-dropdown-ajax").attr("placeholder", search_placeholder_text_lbl).placeholder();
			$('#store_not_found_lbl').html(store_not_found_lbl);
			$('#category_not_found_lbl').html(category_not_found_lbl);
			$('#success_lbl').html(success_lbl);
			$('#loading_lbl').html(loading_lbl);
			$('#loading_lbl2').html(loading_lbl2);
			$('#featured_brands_lbl').html(featured_brands_lbl);
			
		},
	error: function (request, error) {
			alert('Error: Please Check Internet Connection');
		}
});
		//var str="something you want to copy to clipboard";
		//var result = community.clipboard.setText(str);
		//result shows the bytes copied into clipboard, if result=="-1",then something is wrong. 
		 
		//var str = community.clipboard.getText;
		// str is the content in the clipboard. 
		//alert (str);
		
        $.ajax({
			url: site_url+'/api/featured-stores2.php',
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
					alert('Error: Please Check Internet Connection');
				}
		});
		
		$.ajax({
			url: site_url+'/api/featured-brands2.php',
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
					alert('Error: Please Check Internet Connection');
				}
		});
		
		
    }
	
    if (page.name === 'stores') {
	
        //jQuery.noConflict();
		$.ajax({
			url: site_url+'/api/all-stores2.php',
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
					alert('Error: Please Check Internet Connection');
				}
			});
		
		$.ajax({
			url: site_url+'/api/strings.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					var back_lbl = '';
					var home_lbl = '';
					var new_coupons_lbl = '';
					var new_coupons_heading_lbl = '';
					var all_stores_lbl = '';
					var all_categories_lbl = '';
					var categories_lbl = '';
					var top_stores_lbl = '';
					var search_lbl = '';
					var search_placeholder_text_lbl = '';
					var store_not_found_lbl = '';
					var category_not_found_lbl = '';
					var success_lbl = '';
					var loading_lbl = '';
					var loading_lbl2 = '';
					var featured_brands_lbl = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'back')
							back_lbl = result[i].back;
						 if(key == 'home')
							home_lbl = result[i].home;
						if(key == 'new_coupons')
							new_coupons_lbl = result[i].new_coupons;
						if(key == 'new_coupons_heading')
							new_coupons_heading_lbl = result[i].new_coupons_heading;
						if(key == 'all_stores')
							all_stores_lbl = result[i].all_stores;
						if(key == 'all_categories')
							all_categories_lbl = result[i].all_categories;
						if(key == 'categories')
							categories_lbl = result[i].categories;
						if(key == 'top_stores')
							top_stores_lbl = result[i].top_stores;
						if(key == 'search')
							search_lbl = result[i].search;
						if(key == 'search_placeholder_text')
							search_placeholder_text_lbl = result[i].search_placeholder_text;
						if(key == 'store_not_found')
							store_not_found_lbl = result[i].store_not_found;
						if(key == 'category_not_found')
							category_not_found_lbl = result[i].category_not_found;
						if(key == 'success')
							success_lbl = result[i].success;
						if(key == 'loading')
							loading_lbl = result[i].loading;
						if(key == 'loading2')
							loading_lbl2 = result[i].loading2;
						if(key == 'featured_brands')
							featured_brands_lbl = result[i].featured_brands;					
					   });
					}
					
					$('#back_lbl_st').html(back_lbl);
					$('#home_lbl').html(home_lbl);
					$('#new_coupons_lbl_st').html(new_coupons_lbl);
					$('#all_stores_lbl').html(all_stores_lbl);
					$('#all_categories_lbl').html(all_categories_lbl);
					$('#categories_lbl_st').html(categories_lbl);
					$('#top_stores_lbl_st').html(top_stores_lbl);
					$('#search_lbl_st').html(search_lbl);
					$("#search_placeholder_lbl_st").attr("placeholder", search_placeholder_text_lbl).placeholder();
					$('#store_not_found_lbl').html(store_not_found_lbl);
					$('#category_not_found_lbl').html(category_not_found_lbl);
					$('#success_lbl_st').html(success_lbl);
					$('#loading_lbl_st').html(loading_lbl);
					$('#loading_lbl2').html(loading_lbl2);
					$('#featured_brands_lbl').html(featured_brands_lbl);
					
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
		});	
    }
	
	if (page.name === 'categories') {

		$.ajax({
			url: site_url+'/api/all-categories2.php',
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
					alert('Error: Please Check Internet Connection');
				}
			});
		
		$.ajax({
			url: site_url+'/api/strings.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					var back_lbl = '';
					var home_lbl = '';
					var new_coupons_lbl = '';
					var new_coupons_heading_lbl = '';
					var all_stores_lbl = '';
					var all_categories_lbl = '';
					var categories_lbl = '';
					var top_stores_lbl = '';
					var search_lbl = '';
					var search_placeholder_text_lbl = '';
					var store_not_found_lbl = '';
					var category_not_found_lbl = '';
					var success_lbl = '';
					var loading_lbl = '';
					var loading_lbl2 = '';
					var featured_brands_lbl = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'back')
							back_lbl = result[i].back;
						 if(key == 'home')
							home_lbl = result[i].home;
						if(key == 'new_coupons')
							new_coupons_lbl = result[i].new_coupons;
						if(key == 'new_coupons_heading')
							new_coupons_heading_lbl = result[i].new_coupons_heading;
						if(key == 'all_stores')
							all_stores_lbl = result[i].all_stores;
						if(key == 'all_categories')
							all_categories_lbl = result[i].all_categories;
						if(key == 'categories')
							categories_lbl = result[i].categories;
						if(key == 'top_stores')
							top_stores_lbl = result[i].top_stores;
						if(key == 'search')
							search_lbl = result[i].search;
						if(key == 'search_placeholder_text')
							search_placeholder_text_lbl = result[i].search_placeholder_text;
						if(key == 'store_not_found')
							store_not_found_lbl = result[i].store_not_found;
						if(key == 'category_not_found')
							category_not_found_lbl = result[i].category_not_found;
						if(key == 'success')
							success_lbl = result[i].success;
						if(key == 'loading')
							loading_lbl = result[i].loading;
						if(key == 'loading2')
							loading_lbl2 = result[i].loading2;
						if(key == 'featured_brands')
							featured_brands_lbl = result[i].featured_brands;					
					   });
					}
					
					$('#back_lbl_ct').html(back_lbl);
					$('#home_lbl').html(home_lbl);
					$('#new_coupons_lbl_ct').html(new_coupons_lbl);
					$('#all_stores_lbl').html(all_stores_lbl);
					$('#all_categories_lbl').html(all_categories_lbl);
					$('#categories_lbl_ct').html(categories_lbl);
					$('#top_stores_lbl_ct').html(top_stores_lbl);
					$('#search_lbl_ct').html(search_lbl);
					$("#search_placeholder_lbl_ct").attr("placeholder", search_placeholder_text_lbl).placeholder();
					$('#store_not_found_lbl').html(store_not_found_lbl);
					$('#category_not_found_lbl_ct').html(category_not_found_lbl);
					$('#success_lbl_ct').html(success_lbl);
					$('#loading_lbl_ct').html(loading_lbl);
					$('#loading_lbl2').html(loading_lbl2);
					$('#featured_brands_lbl').html(featured_brands_lbl);
					
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
		});
    }
	
	
	if (page.name === 'stores_coupons') {
		
		//alert(page.query.store_id);
		var store_id = page.query.store_id;
		
		$.ajax({
			url: site_url+'/api/store-coupons2.php?store_id='+ store_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var data = '';
					var store_heading ='';
					var store_logo_main= '';
					var store_heading_main = '';
					
					var end_date = '';
					var success_ration = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						  //data  += 	key + '  =  ' + value;
						  if(result[i].coupon_expiry_date != null)
							end_date = 'Expiry: '+ result[i].coupon_expiry_date;
						 
						  if(result[i].success_ration != undefined)
							success_ration = result[i].success_ration;	
						  else	
							success_ration = '0';
							
						 if(key == 'coupon_id')
						 {
							couponURL = "<a href='#' onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\">" + result[i].coupon_title + "</a>";
							gotoLink = "onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\"";
							data 	+= 	'<div class="row main-store-content no-gutter" '+ gotoLink +'>'
									+		'<div class="inner-row-main-store-content">'
									+				'<div class="col-8 stores-heading">'
									+					'<h2 class="no-margin">' + couponURL + '</h2>'
									+				'</div>'
									+				'<!-- <div class="col-20 save">'
									+					'<h2 class="no-margin">SAVE</h2>'
									+						'<i class="fa fa-star" id="star-icon"></i>'
									+				'</div>-->'
									+		'</div>'
									+		'<!--end inner-row-main-store-content -->'
									+		'<div class="col-100 store-content no-margin">'
									+			'<h3>' + result[i].store_name +'</h3>'
									+			'<p>' + result[i].coupon_description +'</p>'
									+		'</div>'
									+		'<div class="col-30 success no-margin">'
									+			'<h5>' + success_ration +'% <span id="success_lbl_sd">Success</span></h5>'
									+		'</div>'
									+		'<div class="col-60 Expiry-date no-margin">'
									+			'<h5>' + end_date +'</h5>'
									+		'</div>'
									+	'</div>'
									+	'<!--end main-store-content no-gutter -->';
									
							store_heading = result[i].store_name;
							store_heading_main = result[i].store_name + ' Coupons & Offers';
							store_logo_main = '<img src="'+ result[i].store_logo +'" width="100%" height="100%"/>';		
						 }	
					   });
					}
					//alert(data);
					
					$('#store_coupons_list1').html(data);
					$('#store_name_heading').html(store_heading);
					//$('#store_heading_main').html(store_heading_main);
					$('#store_logo_div').html(store_logo_main);
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
			});
			
			$.ajax({
			url: site_url+'/api/strings.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					var back_lbl = '';
					var home_lbl = '';
					var new_coupons_lbl = '';
					var new_coupons_heading_lbl = '';
					var all_stores_lbl = '';
					var all_categories_lbl = '';
					var categories_lbl = '';
					var top_stores_lbl = '';
					var search_lbl = '';
					var search_placeholder_text_lbl = '';
					var store_not_found_lbl = '';
					var category_not_found_lbl = '';
					var success_lbl = '';
					var loading_lbl = '';
					var loading_lbl2 = '';
					var featured_brands_lbl = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'back')
							back_lbl = result[i].back;
						 if(key == 'home')
							home_lbl = result[i].home;
						if(key == 'new_coupons')
							new_coupons_lbl = result[i].new_coupons;
						if(key == 'new_coupons_heading')
							new_coupons_heading_lbl = result[i].new_coupons_heading;
						if(key == 'all_stores')
							all_stores_lbl = result[i].all_stores;
						if(key == 'all_categories')
							all_categories_lbl = result[i].all_categories;
						if(key == 'categories')
							categories_lbl = result[i].categories;
						if(key == 'top_stores')
							top_stores_lbl = result[i].top_stores;
						if(key == 'search')
							search_lbl = result[i].search;
						if(key == 'search_placeholder_text')
							search_placeholder_text_lbl = result[i].search_placeholder_text;
						if(key == 'store_not_found')
							store_not_found_lbl = result[i].store_not_found;
						if(key == 'category_not_found')
							category_not_found_lbl = result[i].category_not_found;
						if(key == 'success')
							success_lbl = result[i].success;
						if(key == 'loading')
							loading_lbl = result[i].loading;
						if(key == 'loading2')
							loading_lbl2 = result[i].loading2;
						if(key == 'featured_brands')
							featured_brands_lbl = result[i].featured_brands;					
					   });
					}
					
					$('#back_lbl').html(back_lbl);
					$('#home_lbl').html(home_lbl);
					$('#new_coupons_lbl_sd').html(new_coupons_lbl);
					$('#all_stores_lbl').html(all_stores_lbl);
					$('#all_categories_lbl').html(all_categories_lbl);
					$('#categories_lbl_sd').html(categories_lbl);
					$('#top_stores_lbl_sd').html(top_stores_lbl);
					$('#search_lbl').html(search_lbl);
					$('#search_placeholder_text_lbl').html(search_placeholder_text_lbl);
					$('#store_not_found_lbl').html(store_not_found_lbl);
					$('#category_not_found_lbl').html(category_not_found_lbl);
					$('#success_lbl_sd').html(success_lbl);
					$('#loading_lbl_sd').html(loading_lbl);
					$('#loading_lbl2').html(loading_lbl2);
					$('#featured_brands_lbl').html(featured_brands_lbl);
					
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
		});	
    }
	
	
	if (page.name === 'category_coupons') {
		
		var category_id = page.query.category_id;
		
		$.ajax({
			url: site_url+'/api/category-info2.php?category_id=' + category_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var category_heading ='';
					var category_logo_main= '';
					var category_heading_main = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						    category_heading = result[i].category_name;
							category_heading_main = 'Coupons & Offers';
							//category_logo_main = '<img src="'+ result[i].store_logo +'" width="100%" height="100%"/>';		
					   });
					}
					//alert(data);
					
					$('#category_heading').html(category_heading);
					//$('#category_heading_main').html(category_heading_main);
					//$('#category_logo_div').html(category_logo_main);
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
			});
			
			
		$.ajax({
			url: site_url+'/api/category-coupons2.php?category_id=' + category_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var data = '';

					var end_date = '';
					var success_ration = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						  //data  += 	key + '  =  ' + value;
						  if(result[i].coupon_expiry_date != null)
							end_date = 'Expiry: '+ result[i].coupon_expiry_date;
						 
						  if(result[i].success_ration != undefined)
							success_ration = result[i].success_ration;	
						  else	
							success_ration = '0';
							
						 if(key == 'coupon_id')
						 {
							couponURL = "<a href='#' onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\">" + result[i].coupon_title + "</a>";
							
							gotoLink = "onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\"";
							
							data 	+= 	'<div class="row main-store-content no-gutter" '+ gotoLink +'>'
									+		'<div class="inner-row-main-store-content">'
									+				'<div class="col-80 stores-heading">'
									+					'<h2 class="no-margin">' + couponURL + '</h2>'
									+				'</div>'
									+				'<!-- <div class="col-20 save">'
									+					'<h2 class="no-margin">SAVE</h2>'
									+						'<i class="fa fa-star" id="star-icon"></i>'
									+				'</div> -->'
									+		'</div>'
									+		'<!--end inner-row-main-store-content -->'
									+		'<div class="col-100 store-content no-margin">'
									+			'<h3>' + result[i].store_name +'</h3>'
									+			'<p>' + result[i].coupon_description +'</p>'
									+		'</div>'
									+		'<div class="col-30 success no-margin">'
									+			'<h5>' + success_ration +'% <span id="success_lbl_cc">Success</span></h5>'
									+		'</div>'
									+		'<div class="col-60 Expiry-date no-margin">'
									+			'<h5>' + end_date +'</h5>'
									+		'</div>'
									+	'</div>'
									+	'<!--end main-store-content no-gutter -->';
						 }
						 
					   });
					}
					//alert(data);
					
					$('#category_coupons_list1').html(data);
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
			});	
			
			
			
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
					url: site_url+'/api/search-stores2.php',
					method: 'GET',
					dataType: 'json',
					//send "query" to server. Useful in case you generate response dynamically
					data: {
						query: query
					},
					success: function (data) {
						// Find matched items
						var newList = '';
						for (var i = 0; i < data.length; i++) {
							//alert(data[i].store_name);
							if (data[i].store_name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
							
							newList += " <a href='stores_coupons.html?store_id="+ data[i].store_id+ "'><li class='item-content' style='border-bottom: 1px solid #ccc;'><div class='item-media'><i class='icon icon-form-name'></i></div><div class='item-inner'><div class='item-title'><i class='fa fa-tags' style='font-size:20px;color:#007aff;'></i> " + data[i].store_name +"</div></div></li></a>";
						}
						// Hide Preoloader
						autocomplete.hidePreloader();
						// Render items by passing array with result items
						//alert(results);
						$('#store_list_items').html(newList);
						//render(results);
					}
				});
			}
		});	
		
		
		$.ajax({
			url: site_url+'/api/strings.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					var back_lbl = '';
					var home_lbl = '';
					var new_coupons_lbl = '';
					var new_coupons_heading_lbl = '';
					var all_stores_lbl = '';
					var all_categories_lbl = '';
					var categories_lbl = '';
					var top_stores_lbl = '';
					var search_lbl = '';
					var search_placeholder_text_lbl = '';
					var store_not_found_lbl = '';
					var category_not_found_lbl = '';
					var success_lbl = '';
					var loading_lbl = '';
					var loading_lbl2 = '';
					var featured_brands_lbl = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'back')
							back_lbl = result[i].back;
						 if(key == 'home')
							home_lbl = result[i].home;
						if(key == 'new_coupons')
							new_coupons_lbl = result[i].new_coupons;
						if(key == 'new_coupons_heading')
							new_coupons_heading_lbl = result[i].new_coupons_heading;
						if(key == 'all_stores')
							all_stores_lbl = result[i].all_stores;
						if(key == 'all_categories')
							all_categories_lbl = result[i].all_categories;
						if(key == 'categories')
							categories_lbl = result[i].categories;
						if(key == 'top_stores')
							top_stores_lbl = result[i].top_stores;
						if(key == 'search')
							search_lbl = result[i].search;
						if(key == 'search_placeholder_text')
							search_placeholder_text_lbl = result[i].search_placeholder_text;
						if(key == 'store_not_found')
							store_not_found_lbl = result[i].store_not_found;
						if(key == 'category_not_found')
							category_not_found_lbl = result[i].category_not_found;
						if(key == 'success')
							success_lbl = result[i].success;
						if(key == 'loading')
							loading_lbl = result[i].loading;
						if(key == 'loading2')
							loading_lbl2 = result[i].loading2;
						if(key == 'featured_brands')
							featured_brands_lbl = result[i].featured_brands;					
					   });
					}
					
					$('#back_lbl_cc').html(back_lbl);
					$('#home_lbl').html(home_lbl);
					$('#new_coupons_lbl_cc').html(new_coupons_lbl);
					$('#all_stores_lbl').html(all_stores_lbl);
					$('#all_categories_lbl').html(all_categories_lbl);
					$('#categories_lbl_cc').html(categories_lbl);
					$('#top_stores_lbl_cc').html(top_stores_lbl);
					$('#search_lbl_cc').html(search_lbl);
					$("#autocomplete-dropdown-ajax").attr("placeholder", search_placeholder_text_lbl).placeholder();
					$('#store_not_found_lbl').html(store_not_found_lbl);
					$('#category_not_found_lbl_cc').html(category_not_found_lbl);
					$('#success_lbl_cc').html(success_lbl);
					$('#loading_lbl_cc').html(loading_lbl);
					$('#loading_lbl2').html(loading_lbl2);
					$('#featured_brands_lbl').html(featured_brands_lbl);
					
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
		});
		
    }
	
	if (page.name === 'today_coupons') {
		
		$.ajax({
			url: site_url+'/api/today-coupons2.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var data = '';
					
					var end_date = '';
					var success_ration = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						  //data  += 	key + '  =  ' + value;
						  if(result[i].coupon_expiry_date != null)
							end_date = 'Expiry: '+ result[i].coupon_expiry_date;
						 
						  if(result[i].success_ration != undefined)
							success_ration = result[i].success_ration;	
						  else	
							success_ration = '0';
							
						  var couponURL ='';
							

						 if(key == 'coupon_id')
						 {
							couponURL = "<a href='#' onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\">" + result[i].coupon_title + "</a>"; 						  
							
							gotoLink = "onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\"";
							
							data 	+= 	'<div class="row main-store-content no-gutter" '+ gotoLink +'>'
									+		'<div class="inner-row-main-store-content">'
									+				'<div class="col-8 stores-heading">'
									+					'<h2 class="no-margin">' + couponURL +'</a></h2>'
									+				'</div>'
									+				'<!-- <div class="col-20 save">'
									+					'<h2 class="no-margin">SAVE</h2>'
									+						'<i class="fa fa-star" id="star-icon"></i>'
									+				'</div>-->'
									+		'</div>'
									+		'<!--end inner-row-main-store-content -->'
									+		'<div class="col-100 store-content no-margin">'
									+			'<h3>' + result[i].store_name +'</h3>'
									+			'<p>' + result[i].coupon_description +'</p>'
									+		'</div>'
									+		'<div class="col-30 success no-margin">'
									+			'<h5>' + success_ration +'% <span id="success_lbl_td">Success</span></h5>'
									+		'</div>'
									+		'<div class="col-60 Expiry-date no-margin">'
									+			'<h5>' + end_date +'</h5>'
									+		'</div>'
									+	'</div>'
									+	'<!--end main-store-content no-gutter -->';
						 }			
					   });
					}
					//alert(data);
					
					$('#category_coupons_list1').html(data);
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
			});
		
		$.ajax({
			url: site_url+'/api/strings.php',
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					//alert(result[0].store_id)
					//alert(result.length);
					var data = '';
					var back_lbl = '';
					var home_lbl = '';
					var new_coupons_lbl = '';
					var new_coupons_heading_lbl = '';
					var all_stores_lbl = '';
					var all_categories_lbl = '';
					var categories_lbl = '';
					var top_stores_lbl = '';
					var search_lbl = '';
					var search_placeholder_text_lbl = '';
					var store_not_found_lbl = '';
					var category_not_found_lbl = '';
					var success_lbl = '';
					var loading_lbl = '';
					var loading_lbl2 = '';
					var featured_brands_lbl = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
						 if(key == 'back')
							back_lbl = result[i].back;
						 if(key == 'home')
							home_lbl = result[i].home;
						if(key == 'new_coupons')
							new_coupons_lbl = result[i].new_coupons;
						if(key == 'new_coupons_heading')
							new_coupons_heading_lbl = result[i].new_coupons_heading;
						if(key == 'all_stores')
							all_stores_lbl = result[i].all_stores;
						if(key == 'all_categories')
							all_categories_lbl = result[i].all_categories;
						if(key == 'categories')
							categories_lbl = result[i].categories;
						if(key == 'top_stores')
							top_stores_lbl = result[i].top_stores;
						if(key == 'search')
							search_lbl = result[i].search;
						if(key == 'search_placeholder_text')
							search_placeholder_text_lbl = result[i].search_placeholder_text;
						if(key == 'store_not_found')
							store_not_found_lbl = result[i].store_not_found;
						if(key == 'category_not_found')
							category_not_found_lbl = result[i].category_not_found;
						if(key == 'success')
							success_lbl = result[i].success;
						if(key == 'loading')
							loading_lbl = result[i].loading;
						if(key == 'loading2')
							loading_lbl2 = result[i].loading2;
						if(key == 'featured_brands')
							featured_brands_lbl = result[i].featured_brands;					
					   });
					}
					
					$('#back_lbl').html(back_lbl);
					$('#home_lbl').html(home_lbl);
					$('#new_coupons_lbl_td').html(new_coupons_lbl);
					$('#all_stores_lbl').html(all_stores_lbl);
					$('#all_categories_lbl').html(all_categories_lbl);
					$('#categories_lbl_td').html(categories_lbl);
					$('#top_stores_lbl_td').html(top_stores_lbl);
					$('#search_lbl').html(search_lbl);
					$('#search_placeholder_text_lbl').html(search_placeholder_text_lbl);
					$('#store_not_found_lbl').html(store_not_found_lbl);
					$('#category_not_found_lbl').html(category_not_found_lbl);
					$('#success_lbl_td').html(success_lbl);
					$('#loading_lbl_td').html(loading_lbl);
					$('#loading_lbl2').html(loading_lbl2);
					$('#featured_brands_lbl').html(featured_brands_lbl);
					
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
		});
    }
	
	
		if (page.name === 'coupon_detail') {
		
		//alert(page.query.store_id);
		var coupon_id = page.query.coupon_id;
		
		$.ajax({
			url: site_url+'/api/coupon-detail2.php?coupon_id='+ coupon_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var data = '';
					var store_inner_heading ='';
					var store_logo_main= '';
					var store_heading_main = '';
                    var coupon_title = '';
                    var coupon_description = '';
                    var coupon_get_code = '';
					
					var end_date = '';
					var success_ration = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
							
                            if(key=='store_name')
                            {
                                store_inner_heading = result[i].store_name;
                                store_heading_main = result[i].store_name;
                                store_logo_main = '<img src="'+ result[i].store_logo +'" width="50%" height="50%"/>';	
                                coupon_title = result[i].coupon_title;
                                coupon_description = result[i].coupon_description;
                                coupon_get_code = "<a href='#' onclick=\"window.open('"+ result[i].coupon_url+"', '_system', 'location=yes'); return false;\" class='button button-big button-fill color-gray'>Get Code</a>"; 
                            }
					   });
					}
					//alert(store_logo_main);
					
					$('#store_heading_main2').html(store_heading_main);
                    $('#store_inner_heading2').html(store_inner_heading);
                    $('#store_logo_div2').html(store_logo_main);
					$('#coupon_title').html(coupon_title);
                    $('#coupon_description').html(coupon_description);
                    $('#coupon_get_code').html(coupon_get_code);
                    
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
			});
            

            $.ajax({
			url: site_url+'/api/coupon-comments2.php?coupon_id='+ coupon_id,
			type: 'GET',
			dataType: 'json',
			success: function (result) {
					
					var cdata = '';
					
					for (var i=0 ; i <= (result.length-1); i++) {
					   
					   $.each( result[i], function( key, value ) {
							if(key == 'comment_id')
							cdata += '<div class="comments-list">'+ result[i].comment +' <br/>by <b>'+ result[i].comment_by +'</b></div>';
							
					   });
					}
					//alert(data);
					
					$('#comments_list').html(cdata);
                
				},
			error: function (request, error) {
					alert('Error: Please Check Internet Connection');
				}
			});
    }
	
})







	  
function search()
{
	var value = document.getElementById('test').value;
	$.ajax({
			url: site_url+'/api/search-stores2.php?search_term='+value,
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
					alert('Error: Please Check Internet Connection');
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
            url: site_url+'/api/search-stores2.php',
            method: 'GET',
            dataType: 'json',
            //send "query" to server. Useful in case you generate response dynamically
            data: {
                query: query
            },
            success: function (data) {
                // Find matched items
                var newList = '';
                for (var i = 0; i < data.length; i++) {
                    //alert(data[i].store_name);
					if (data[i].store_name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    
                    newList += " <a href='stores_coupons.html?store_id="+ data[i].store_id+ "'><li class='item-content' style='border-bottom: 1px solid #ccc;'><div class='item-media'><i class='icon icon-form-name'></i></div><div class='item-inner'><div class='item-title'><i class='fa fa-tags' style='font-size:20px;color:#007aff;'></i> " + data[i].store_name +"</div></div></li></a>";
                }
                // Hide Preoloader
                autocomplete.hidePreloader();
                // Render items by passing array with result items
                //alert(results);
                $('#store_list_items').html(newList);
                //render(results);
            }
        });
    }
});