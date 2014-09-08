jQuery(document).ready( function($){
	var g_selector, g_something, g_full_insertion;
	function ajaxify( p_url, p_action, p_operand, p_success_func ) {
		$.ajax({
			url: p_url,
			method: 'POST',
			dataType: 'json',
			data: {
				'action' : p_action,
				'operand' : p_operand 
			},
			success: function( p_response ) {
				g_something = p_response.msg;
				p_success_func( g_selector, g_something, true);			
			},
			error: function() {
				alert( 'Something went wrong');			
			}
		});
			
	}
	
	function insertSomething( p_selector, p_something, p_full_insertion ) {
		if( p_full_insertion )
			$( p_selector ).html( p_something );
		else
			$( p_selector ).append( p_something );	
	}

	$( 'input[name=submit-cube]' ).click( function(e){
		g_selector = 'p#answer';
		ajaxify( url, 'compute_cube', $( 'input[name=operand]' ).val(), insertSomething );		

		e.preventDefault();
		return false;	
	});

	$( 'input[name=submit-square]' ).click( function(e){
		g_selector = 'p#answer';
		ajaxify( url, 'compute_square', $( 'input[name=operand]' ).val(), insertSomething );		

		e.preventDefault();
		return false;	
	});
});
