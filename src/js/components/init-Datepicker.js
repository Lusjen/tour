import daterangepicker from 'daterangepicker';

$(function() {
  if (($('.js-daterange').length)) {
    $('.js-daterange').daterangepicker({
    	startDate: '01/02', 
    	endDate: '05/02',
      	autoApply: true,
      // drops: 'up',
		  	locale: {
		       format: 'DD.MM'
		    }
    });
    // $('.js-daterange').data('daterangepicker').append(<p>Hello</p>).setStartDate('03/01');
    // $('#daterange').data('daterangepicker').setEndDate('08/01');
  }
  
});



