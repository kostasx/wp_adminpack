jQuery(function(){

	// TRIGGER FILTER WHEN CATEGORY SELECTOR HAS CHANGED
	jQuery("select#cat").change(function(){
		jQuery("input#post-query-submit").click();
	});

	// TRIGGER FILTER WHEN DATE SELECTOR HAS CHANGED
	jQuery("select[name='m']").change(function(){
		jQuery("input#post-query-submit").click();
	});

});