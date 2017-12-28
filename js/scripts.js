var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<img>').attr('src', item.flag).appendTo(countriesList);
        $('<li>').text("Name: " + item.name).appendTo(countriesList);
        $('<li>').text("Capital: " + item.capital).appendTo(countriesList);
        $('<li>').text("Region: " + item.region).appendTo(countriesList);
        $('<li>').text("Subregion: " + item.subregion).appendTo(countriesList);
        $('<li>').text("Population: " + item.population).appendTo(countriesList);
        $('<li>').text("Area: " + item.area).appendTo(countriesList);
        $('<li>').text("Timezone: " + item.timezones).appendTo(countriesList);
        $('<li>').text("Borders: " + item.borders).appendTo(countriesList);
        $('<li>').text("Currency: " + item.currencies[0].name).appendTo(countriesList);
    });
}
}
