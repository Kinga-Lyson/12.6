var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);

function searchCountries() {
	
	var countryName = $('#country-name').val();

	if (countryName.length == 0) {
		countryName = 'Poland';
		};
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
	function showCountriesList(resp) {
		countriesList.empty();	
		resp.forEach(function(item) {
			if (item.name.toLowerCase().includes(countryName.toLowerCase())){
				$('<li>').text(' Country: ' + item.name + '; Capital: ' + item.capital).appendTo(countriesList);
			}
		});
	}
}




