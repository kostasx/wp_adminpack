jQuery(function(){

	// HIDE SUBMIT BUTTON
	jQuery("input#Submit").css({ opacity: 0 });

	// SHOW/HIDE SUBMIT BUTTON ON HOVER
	jQuery("input#Submit").hover(function(){
		jQuery(this).animate({ opacity: 1 }, 500 );
	},function(){
		jQuery(this).animate({ opacity: 0 }, 500 );
	});

	// TRIGGER SUBMIT ON THEME SELECT
	jQuery("select#theme").change(function(){
		jQuery("input#Submit").click();
	});

	/* SET #templateside HEIGHT */
	jQuery("#templateside").css({ height: 
	jQuery("textarea#newcontent").height()+10+"px" });

	/* CLONE UPDATE BUTTON AND PLACE ON TOP */
	var updatebutton = jQuery("form#template input#submit");
	var updatebutton_clone = updatebutton.clone().css({ marginTop: "4px" }).click(function(){ updatebutton.click(); });
	jQuery(".alignright").eq(0).after(updatebutton_clone);

	/* ENABLE CTRL+S SHORTCUT FOR UPDATING FILES */
	shortcut.add("Ctrl+S",function() {
		jQuery("form#template input#submit").click();
	});

});