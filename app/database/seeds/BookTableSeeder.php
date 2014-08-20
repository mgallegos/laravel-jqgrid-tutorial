<?php

class BookTableSeeder extends Seeder {

	public function run()
	{
		DB::table('DEMO_Book')->delete();

		Book::create(array('name' => 'Into the Wild', 'author' => 'Jon Krakauer', 'publisher' => 'Pan; New Ed edition (July 6, 2011)', 'language' => 'E', 'length' => 228, 'asin' => 'B005AV93JI', 'description' => 'By examining the true story of Chris McCandless, a young man, who in 1992 walked deep into the Alaskan wilderness and whose SOS note and emaciated corpse were found four months later.'));
		Book::create(array('name' => 'El Príncipe', 'author' => 'Nicolás Maquiavelo', 'publisher' => ' e-artnow ediciones (August 1, 2013)', 'language' => 'S', 'length' => 86, 'asin' => 'B00IORCCMU', 'description' => 'El Príncipe es un tratado de teoría política escrito por Nicolás Maquiavelo en 1513, mientras se encontraba confinado en San Casciano por la acusación de haber conspirado en contra de los Médici.'));
		Book::create(array('name' => 'Twenty Thousand Leagues Under the Sea', 'author' => 'Jules Verne', 'publisher' => 'CreateSpace Independent Publishing Platform (May 22, 2014)', 'language' => 'E', 'length' => 212, 'asin' => '1499637632', 'description' => 'It tells the story of Captain Nemo and his submarine Nautilus, as seen from the perspective of Professor Pierre Aronnax after he, his servant Conseil, and Canadian harpoonist Ned Land wash up on their ship.'));
		Book::create(array('name' => 'In a Sunburned Country', 'author' => 'Bill Bryson', 'publisher' => 'Broadway Books; 1st edition (April 27, 2008)', 'language' => 'E', 'length' => 304, 'asin' => 'B000Q9ISSQ', 'description' => ' In A Sunburned Country is his report on what he found in an entirely different place: Australia, the country that doubles as a continent, and a place with the friendliest inhabitants, the hottest and driest weather.'));
		Book::create(array('name' => 'Das Böse im Verborgenen', 'author' => 'James Oswald', 'publisher' => 'Goldmann Verlag (June 23, 2014)', 'language' => 'G', 'length' => 44, 'asin' => 'B00L2884R0', 'description' => 'Der grandiose Start der Krimi-Reihe um Detective Inspector Anthony McLean'));
	}

}
