jQuery(function(){
	jQuery(".updated").eq(0).before("<div id='toggle_updates' class='wp_admin_pack_dashboard_button'>Toggle Updates</div>");
	jQuery("#toggle_updates").on("click", function(){
		jQuery(".updated").slideToggle();
	});

});